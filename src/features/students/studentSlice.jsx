import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk(
  "students/fetchStudents",
  async () => {
    const response = await axios.get(
      "https://school-management-backend-wheat.vercel.app/students"
    );

    console.log(response);

    return response.data;
  }
);

export const addStudents = createAsyncThunk(
  "students/addStudents",
  async (studentData) => {
    const response = await axios.post(
      "https://school-management-backend-wheat.vercel.app/students",
      studentData
    );

    console.log(response);

    return response.data;
  }
);

export const updateStudent = createAsyncThunk(
  "students/updateStudent",
  async (studentData) => {
    const res = await axios.put(
      `https://school-management-backend-wheat.vercel.app/students/${studentData.id}`,
      studentData
    );
    console.log(res, "res");

    return res.data;
  }
);

export const deleteStudent = createAsyncThunk(
  "students/deleteStudent",
  async (studentId) => {
    const res = await axios.delete(
      `https://school-management-backend-wheat.vercel.app/students/${studentId}`
    );
    console.log(res, "res");

    return studentId;
  }
);

export const studentSlice = createSlice({
  name: "students",
  initialState: {
    students: [],
    status: "idle",
    error: null,
    filter: "all",
    sortBy: "name",
    schoolStats: {
      totalStudents: 0,
      averageAttendance: 0,
      averageMarks: 0,
      topStudent: 0,
    },
  },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },

    updateSchoolStats: (state, action) => {
      state.schoolStats = action.payload;
    },

    setTopStudent: (state, action) => {
      state.schoolStats.topStudent = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchStudents.pending, (state) => {
      state.status = "loading";
    });

    builder.addCase(fetchStudents.fulfilled, (state, action) => {
      console.log(action.payload);
      state.status = "success";
      state.students = action.payload;
    });

    builder.addCase(fetchStudents.rejected, (state, action) => {
      state.status = "error";
      state.error = action.payload.message;
    });

    builder.addCase(deleteStudent.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteStudent.fulfilled, (state, action) => {
      (state.status = "success"),
        (state.students = state.students.filter(
          (student) => student._id !== action.payload
        ));
    });

    builder.addCase(deleteStudent.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    });
  },
});

export const { setFilter, setSortBy, updateSchoolStats, setTopStudent } =
  studentSlice.actions;
export default studentSlice.reducer;
