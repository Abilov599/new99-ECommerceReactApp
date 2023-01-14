import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: undefined,
  error: undefined,
};

export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await axios(`http://localhost:3000/myData/`);
  return response.data;
});

const getProductsData = createSlice({
  name: "getData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default getProductsData.reducer;
