const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        inc: (state, action) => (state = state + 1),

        dec: (state, action) => (state = state - 1),
    },
});

export const { inc, dec } = counterSlice.actions;
export default counterSlice.reducer;
