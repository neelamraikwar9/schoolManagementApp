import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudents,
  updateSchoolStats,
  setTopStudent,
} from "../students/studentSlice";

const SchoolView = () => {
  const dispatch = useDispatch();
  const { students, schoolStats } = useSelector((state) => state.students);
  console.log(students, "checkstudents");

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  //Calculating school statistics in useEffect;
  useEffect(() => {
    if (students.length === 0) return;

    //total Students;
    const totalStudents = students.length;

    // Average attendance & marks
    const totalAttendance = students.reduce(
      (sum, student) => sum + student.attendance,
      0
    );
    console.log(totalAttendance, "totalAttendance");
    const totalMarks = students.reduce(
      (sum, student) => sum + student.marks,
      0
    );
    console.log(totalMarks, "totalMarks");

    const averageAttendance = totalAttendance / totalStudents;
    console.log(averageAttendance, "averageAttendance");

    const averageMarks = totalMarks / totalStudents;
    console.log(averageMarks, "averageMarks");

    // Top performing student (highest marks)
    const topStudent = students.reduce((top, student) =>
      student.marks > top.marks ? student : top
    );
    console.log(topStudent, "topStudent");

    // ✅ Dispatch stats to Redux;
    dispatch(
      updateSchoolStats({
        totalStudents,
        averageAttendance: averageAttendance.toFixed(2),
        averageMarks: averageMarks.toFixed(2),
        topStudent: topStudent.name,
      })
    );

    dispatch(setTopStudent(topStudent));
  }, [students, dispatch]);

  // useEffect(() => {
  //     setTotalStudents(students?.length);
  //     setAverageAttendence(students.attendance/totalStudents);
  //     setAverageMarks(students.marks/totalStudents);
  //     console.log(averageAttendence, "averageAfttendec");
  //     setTopStudent(students.find(ts) => ts.marks > )
  // }, [students])

  return (
    <div>
      <h1>School View</h1>
      <div>
        <p>Total Students; {schoolStats.totalStudents}</p>
        <p>Average Attendance: {schoolStats.averageAttendance}%</p>
        <p>Average Marks: {schoolStats.averageMarks}</p>
        <p>Top Student: {schoolStats.topStudent?.name}</p>
      </div>
    </div>
  );
};

export default SchoolView;
