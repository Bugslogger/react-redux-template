import { createSlice } from "@reduxjs/toolkit";

const state = { IsUser: false };

const ReduxSlice = createSlice({
  initialState: state,
  name: "reduxSlice",
  reducers: {
    /**
     * Here you can create your redux fucntion
     * similar to the given below (or according to your needs)
     *
     * replace below action function with yours
     *
     */

    IsUserLogged: (state, action) => {
      state.IsUser = action.payload;
    },
  },
});

// here inside `{}` bracket export your action functions
export const { IsUserLogged } = ReduxSlice.actions;
export default ReduxSlice.reducer;
