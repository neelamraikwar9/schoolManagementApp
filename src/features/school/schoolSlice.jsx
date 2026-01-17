import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const schoolSlice = createSlice({
  name: "School",
  initialState: {
    school: [],
    status: "idle",
    error: "null",
  },

  reducers: {},
});
