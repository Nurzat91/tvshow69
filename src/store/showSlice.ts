import {Shows} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchDataIdShow, fetchGetShow} from "./showThunks";
import {RootState} from "../app/store";

interface ShowState {
  show: Shows [];
  fetchLoading: boolean;
  fetchError: string | null;
}
const initialState: ShowState = {
  show: [],
  fetchLoading: false,
  fetchError: null,
}

export const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetShow.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchGetShow.fulfilled, (state, action) => {
      state.fetchLoading = false;
      state.show = action.payload;
    });
    builder.addCase(fetchGetShow.rejected, (state, action) => {
      state.fetchLoading = false;
      state.fetchError = action.error.message ?? 'Error.';
    });
    builder.addCase(fetchDataIdShow.pending, (state) => {
      state.fetchLoading = true;
    });
    builder.addCase(fetchDataIdShow.fulfilled, (state, action) => {
      state.fetchLoading = false;
      state.show = action.payload;
    });
    builder.addCase(fetchDataIdShow.rejected, (state, action) => {
      state.fetchLoading = false;
      state.fetchError = action.error.message ?? 'Error.';
    });
  }
});

export const showReducer = showSlice.reducer;

export const selectShow = (state: RootState) => state.show.show;