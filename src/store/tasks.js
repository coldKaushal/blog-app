import { createSlice } from "@reduxjs/toolkit";

const createReducer = createSlice({
  name: "User",
  initialState: {},
  reducers: {
    addUser: (state, actions)=>{
      state = {
        name: actions.payload.name,
        email: actions.payload.email,
      }
    }
  }
});

export const { addUser } = createReducer.actions;
export default createReducer.reducer;
