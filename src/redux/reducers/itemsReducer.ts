import { createSlice } from "@reduxjs/toolkit";
import { ItemsState } from "../types";
import { uploadItemByName, uploadItems } from "../actionsApi";

const initialState: ItemsState = {
  items: [],
  itemName: [],
  status: "idle",
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Maneja las acciones adicionales generadas por createAsyncThunk
    builder
      // Upload Items -------------------------------------------------
      .addCase(uploadItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(uploadItems.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(uploadItems.rejected, (state) => {
        state.status = "failed";
      })

      // Upload Items by Name -----------------------------------------
      .addCase(uploadItemByName.pending, (state) => {
        state.status = "loading";
      })
      .addCase(uploadItemByName.fulfilled, (state, action) => {
        state.status = "idle";
        state.itemName = action.payload;
      })
      .addCase(uploadItemByName.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const {} = itemsSlice.actions;
export default itemsSlice.reducer;
