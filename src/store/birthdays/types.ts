export type BirthdayEntry = {
    text: string,
    year: number
};

export interface IBirthdaysState {
    data: BirthdayEntry[]
};