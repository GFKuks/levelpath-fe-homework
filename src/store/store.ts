import { configureStore } from "@reduxjs/toolkit";
import { birthdaysReducer } from "./birthdays/birthdaysSlice";

export const createStore = () => configureStore({
    reducer: {
        birthdays: birthdaysReducer,
    }
});

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;