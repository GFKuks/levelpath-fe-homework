import { AnyAction, Dispatch, ThunkDispatch } from "@reduxjs/toolkit";
import axios from "axios";

import { BirthdayEntry, IBirthdaysState, setData } from "store/birthdays";

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

	axios.get<{ births: BirthdayEntry[]}>(`https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`)
		.then(x => {
			if (x.data?.births) {
				x.data.births.sort((a, b) => a.year - b.year);
				dispatch(setData(x.data.births));
			} else {
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
};