
  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
  import axios from "axios";


  export const addTeacher = createAsyncThunk(
    "teachers/addTeachers",
    async (teacherData) => {
      const response = await axios.post(
        "https://school-management-backend-wheat.vercel.app/teachers",
        teacherData,
      );

      console.log(response);

      return response.data;
    },
  );

  export const fetchTeachers = createAsyncThunk(
    "teachers/fetchTeachers",
    async () => {
      const response = await axios.get(
        "https://school-management-backend-wheat.vercel.app/teachers",
      );

      console.log(response.data, "response");

      return response.data;
    },
  );

  export const updateTeacher = createAsyncThunk("teachers/updateTeacher", async (teacherData) => {
    const res = await axios.put(`https://school-management-backend-wheat.vercel.app/teachers/${teacherData.id}`, teacherData); 
    console.log(res, "res"); 

    return res.data; 
  }); 


  export const deleteTeacher = createAsyncThunk("teachers/deleteTeacher", async (teacherId) => {
    const res = await axios.delete(`https://school-management-backend-wheat.vercel.app/teachers/${teacherId}`); 
    console.log(res, "res"); 
   
    return teacherId; 
  })


  

  export const teacherSlice = createSlice({
    name: "teachers",
    initialState: {
      teachers: [],
      status: "idle",
      error: null,
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


      builder.addCase(deleteTeacher.pending, (state) => {
        state.status = "loading";
      }); 

      builder.addCase(deleteTeacher.fulfilled, (state, action) => {
        state.status = "success"
        state.teachers = state.teachers.filter((teacher) => teacher._id !== action.payload); 
      }); 

      builder.addCase(deleteTeacher.rejected, (state, action) => {
        state.status = "error",
        state.error = action.error.message; 
      })
    },
  });

  
