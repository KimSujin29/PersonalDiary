import { createSlice } from "@reduxjs/toolkit";

const diarySlice = createSlice({
  name: "diary",
  initialState: {
    entries: [],
  },
  reducers: {
    setEntries: (state, action) => {
      state.entries = action.payload;
    },
    addEntry: (state, action) => {
      state.entries.unshift(action.payload);
    },
    deleteEntry: (state, action) => {
      state.entries = state.entries.filter((e) => e._id !== action.payload);
    },
  },
});

export const { setEntries, addEntry, deleteEntry } = diarySlice.actions;
export default diarySlice.reducer;
