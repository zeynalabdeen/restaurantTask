import { createSlice } from "@reduxjs/toolkit"

export const data = createSlice({
    name: "data",
    initialState: {
        value: []
    },
    reducers: {
        updateData: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { updateData } = data.actions;
export default data.reducer;