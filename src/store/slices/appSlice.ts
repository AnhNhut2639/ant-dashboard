import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface IApp {
  loading: boolean;
}

const initialState: IApp = {
  loading: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state: IApp, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = appSlice.actions;

export const selectLoading = (state: RootState): boolean => state.app.loading;

export default appSlice.reducer;
