import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudents,
  updateSchoolStats,
  setTopStudent,
} from "../students/studentSlice";

import { fetchTeachers } from "../teachers/TeacherSlice";

const SchoolView = () => {
  const dispatch = useDispatch();
  // const { students, teachers, schoolStats } = useSelector(
  //   (state) => state.students,
  // );
  // console.log(students, "checkstudents");

  // console.log(teachers, "checkingTeachers");

    // ✅ Select from ROOT state - access both slices + stats
  const students = useSelector((state) => state.students?.students || []);
  const teachers = useSelector((state) => state.teachers?.teachers || []);
  const schoolStats = useSelector((state) => state.students?.schoolStats || {});

  console.log(students, "students");
  console.log(teachers, "teachers");


  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, []);

  //Calculating school statistics in useEffect;
  useEffect(() => {
    if (students.length === 0) return;

    //total Students;
    const totalStudents = students.length;

    const totalTeachers = teachers.length; 

    // Average attendance & marks
    const totalAttendance = students.reduce(
      (sum, student) => sum + student.attendance,
      0,
    );
    console.log(totalAttendance, "totalAttendance");
    const totalMarks = students.reduce(
      (sum, student) => sum + student.marks,
      0,
    );
    console.log(totalMarks, "totalMarks");

    const averageAttendance = totalAttendance / totalStudents;
    console.log(averageAttendance, "averageAttendance");

    const averageMarks = totalMarks / totalStudents;
    console.log(averageMarks, "averageMarks");

    // Top performing student (highest marks)
    const topStudent = students.reduce((top, student) =>
      student.marks > top.marks ? student : top,
    );
    console.log(topStudent, "topStudent");

    // ✅ Dispatch stats to Redux;
    dispatch(
      updateSchoolStats({
        totalStudents,
        totalTeachers,
        averageAttendance: averageAttendance.toFixed(2),
        averageMarks: averageMarks.toFixed(2),
        topStudent: topStudent.name,
      }),
    );

    dispatch(setTopStudent(topStudent));
  }, [students,teachers, dispatch]);

  // useEffect(() => {
  //   if (teachers?.length === 0) return;
  //   const totalTeacher = teachers?.length;

  //   //  averageTeacherAge

  //   dispatch(
  //     updateSchoolStats({
  //       totalTeacher,
  //     }),
  //   );
  // }, [teachers, dispatch]);

  return (
    <div>
      <h1>School View</h1>
      <div>
        <h2>Student</h2>
        <p>Total Students; {schoolStats.totalStudents}</p>
        <p>Average Attendance: {schoolStats.averageAttendance}%</p>
        <p>Average Marks: {schoolStats.averageMarks}</p>
        <p>Top Student: {schoolStats.topStudent?.name}</p>

        <h2>Teacher</h2>
        <p>Total Teacher: {schoolStats.totalTeachers}</p>
      </div>
    </div>
  );
};

export default SchoolView;
