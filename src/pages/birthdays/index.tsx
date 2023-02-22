import { useState } from "react";

import { useAppDispatch, useBirthdayData } from "store";
import { handleLoadDates } from "./api";
import { BirthdayTable, LoadDataButton, Modal } from "./components";

export const BirthdaysPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [errMessage, setErrMessage] = useState("");

    const birthdayData = useBirthdayData();
    const dispatch = useAppDispatch();

    return (
        <div data-testid="birthdays-page">
            <Modal
                isOpen={modalIsOpen}
                message={errMessage}
                handleClose={() => setModalIsOpen(false)}
            />
			<LoadDataButton
                onClick={() => handleLoadDates(setIsLoading, setModalIsOpen, setErrMessage, dispatch)}
				isLoading={isLoading}
			/>
            <BirthdayTable data={birthdayData} />
        </div>
    );
};