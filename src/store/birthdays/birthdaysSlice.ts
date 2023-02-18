import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BirthdayEntry, IBirthdaysState } from "./types";
import { RootState } from "../store";

const initialState: IBirthdaysState = {
    data: [],
};

export const birthdaysSlice = createSlice({
    name: "birthdays",
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<BirthdayEntry[]>) => {
            state.data = action.payload;
        }
    }
});

export const { setData } = birthdaysSlice.actions;

export const selectData = (state: RootState) => state.birthdays.data;

export const birthdaysReducer = birthdaysSlice.reducer;