import { createSlice } from "@reduxjs/toolkit";

interface counterState {
  click: number;
  status: boolean;
}

const initialState: counterState = {
  click: 0,
  status: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.click += 1;
    },
    reset: (state) => {
      state.click = 0;
    },
    disable: (state) => {
      state.status = !state.status;
    },
  },
});

export const { increment, reset, disable } = counterSlice.actions;

export default counterSlice.reducer;
