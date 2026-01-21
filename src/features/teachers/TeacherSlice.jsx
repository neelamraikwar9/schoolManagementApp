import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from 'axios'; 


export const addTeacher = createAsyncThunk("teacher/addTeachers", async(teacherData) => {
    const response = await axios.post("https://school-management-backend-wheat.vercel.app/teachers", teacherData); 

    console.log(response); 

    return response.data; 

}); 

export const fetchTeachers = createAsyncThunk("teachers/fetchTeachers", async() => {
    const response = await axios.get("https://school-management-backend-wheat.vercel.app/teachers"); 

    console.log(response, "response");

    return response.data; 

});

export const teacherSlice = createSlice({
    name:"teachers", 
    initialState: {
        teachers: [],
        status: 'idle', 
        error: null
    },

    reducers: {}, 

    extraReducers: (builder) => {
        builder.addCase(fetchTeachers.pending, (state) => {
            state.status = "loading";
        }); 

        builder.addCase(fetchTeachers.fulfilled, (state, action) => {
            console.log(action.payload); 
            state.status = "success"; 
            state.teachers = action.payload; 
        }); 

        builder.addCase(fetchTeachers.rejected, (state, action) => {
            state.status = "error"; 
            state.error = action.payload.message;     
        }); 
    }





})