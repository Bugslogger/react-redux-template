import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer";

export const store = configureStore({
  /**
   * you can replace [Reducer with your reducer and `counter` with whatever name you want to give it]
   */
  reducer: {
    counter: Reducer,
  },
});
