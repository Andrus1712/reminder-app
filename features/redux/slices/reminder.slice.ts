import {createSlice} from "@reduxjs/toolkit";

interface IReminderModel {
    description: string;
    payDate: string;
    notes: string;
}


const initialState: IReminderModel = {
    description: "",
    payDate: "",
    notes: ""
}

export const reminderSlice = createSlice({
    name: "reminder",
    initialState: initialState,
    reducers: {
        setReminder: (state, action) => {
            state.description = action.payload.description;
            state.payDate = action.payload.payDate;
            state.notes = action.payload.notes;
        },
    }
});

export const {setReminder} = reminderSlice.actions;
export default reminderSlice.reducer;
