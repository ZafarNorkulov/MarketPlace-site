import { createSlice } from "@reduxjs/toolkit";

export const AuthReducer = createSlice({
  name: "auth",
  initialState: {
    auth: null,
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.auth = action.payload;
    },
  },
});
 const { setUserInfo }:any = AuthReducer.actions;
 export {setUserInfo}
export default AuthReducer.reducer;
