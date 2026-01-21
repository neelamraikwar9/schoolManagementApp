import { configureStore } from "@reduxjs/toolkit";
// import { studentSlice } from "../features/students/studentSlice";
import { studentSlice } from "../features/students/studentSlice";
import { schoolSlice } from "../features/school/schoolSlice";
import { teacherSlice } from "../features/teachers/TeacherSlice";

export default configureStore({
  reducer: {
    students: studentSlice.reducer,
    school: schoolSlice.reducer,
    teachers: teacherSlice.reducer,
  },
});
