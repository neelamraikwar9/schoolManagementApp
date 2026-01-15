import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 
import axios from 'axios';

export const fetchStudents = createAsyncThunk("students/fetchStudents", async () => {
    const response = await axios.get("https://school-management-backend-wheat.vercel.app/students");

    console.log(response);

    return response.data; 
})


export const addStudents = createAsyncThunk("students/addStudents", async (studentData) => {
    const response = await axios.post("https://school-management-backend-wheat.vercel.app/students", studentData);

    console.log(response); 

    return response.data; 
})


export const updateStudent = createAsyncThunk("students/updateStudent", async (studentData) => {
    const res = await axios.put(`https://school-management-backend-wheat.vercel.app/students/${studentData.id}`, studentData); 
    console.log(res, "res"); 

    return res.data; 
})



export const studentSlice = createSlice({
    name: "students",
    initialState:{
        students: [], 
        status: 'idle',
        error: null,
    },

    reducers: {
        
    }, 

    extraReducers: (builder) => {
        builder.addCase(fetchStudents.pending, (state) => {
            state.status = "loading"; 
        }); 

        builder.addCase(fetchStudents.fulfilled, (state, action) => {
            console.log(action.payload)
            state.status = "success"; 
            state.students = action.payload; 
        }); 

        builder.addCase(fetchStudents.rejected, (state, action) => {
            state.status = "error";
            state.error = action.payload.message; 
        })

    }


})

// export default studentSlice; 
