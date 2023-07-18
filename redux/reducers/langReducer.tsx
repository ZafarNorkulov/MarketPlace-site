import { createSlice } from "@reduxjs/toolkit";

export const LangReducer = createSlice({
  name: "lang",
  initialState: {
    lang: "uz",
  },
  reducers: {
    serLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});
export const { setLang }:any = LangReducer.actions;
export default LangReducer.reducer;
