import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 
import axios from 'axios';

export const fetchStudents = createAsyncThunk("students/fetchStudents", async () => {
    const response = await axios.get("");

    console.log(response);

    return response.data; 
})


export const studentSlice = createSlice({
    name: "School",
    initialState:{
        students: [], 
        status: 'idle',
        error: null,
    },

    reducers: {
        
    }


})
