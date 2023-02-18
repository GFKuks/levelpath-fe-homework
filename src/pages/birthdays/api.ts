import { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import axios from "axios";

import { setData } from "../../store/birthdays/birthdaysSlice";
import { BirthdayEntry, IBirthdaysState } from "../../store/birthdays/types";

export const handleLoadDates = (
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
	setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
	setErrMessage: React.Dispatch<React.SetStateAction<string>>,
	dispatch: ThunkDispatch<{
		birthdays: IBirthdaysState;
	}, undefined, AnyAction> & Dispatch<AnyAction>
) => {
	setIsLoading(true);

	const currentDate = new Date();
	const day = currentDate.getDate();
	// Months from getMonth are zero-indexed
	const month = currentDate.getMonth() + 1;

	const fetchData = () => axios.get<{ births: BirthdayEntry[]}>(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`)
		.then(x => {
			if (x.data?.births) {
				x.data.births.sort((a, b) => a.year - b.year);
				dispatch(setData(x.data.births));
			} else {
				// TODO: Keep this? 200 with no "births" only appears if I sent incorrect request
				throw new Error("Response does not contain required data.");
			}
		})
		.catch(err => {
			setErrMessage(err.message);
			setModalIsOpen(true);
		})
		.finally(() => {
			setIsLoading(false);
		})

	setTimeout(() => {
		fetchData();
	}, 1000)
};