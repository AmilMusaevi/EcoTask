import { configureStore } from "@reduxjs/toolkit";

import TableSlice from "./TableSlice/TableSlice";
export const store = configureStore({
  reducer: {
    TableSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
