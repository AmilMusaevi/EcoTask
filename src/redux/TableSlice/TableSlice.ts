import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { tableDefaultData } from "../../data/data";

export type TTableSlice = {
  data: TTableData[];
};

const initialState: TTableSlice = {
  data: tableDefaultData,
};

export const TableSlice = createSlice({
  name: "tableSlice",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<TTableData>) => {
      state.data.unshift({...action.payload})
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.data = state.data.filter((user) => user.key !== action.payload);
    },
    editUser: (state, action: PayloadAction<TTableData>) => {
      state.data = state.data.map((user) => {
        if (user.key == action.payload.key) {
          return { ...action.payload };
        }
        return user;
      });
    },
  },
});

export const { addUser, removeUser, editUser } = TableSlice.actions;
export default TableSlice.reducer;
