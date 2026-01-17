import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { useEffect } from 'react';
import { deleteStudent } from "./studentSlice";

const StudentDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const studentsState = useSelector((state) => state.students);
  const { students, status, error } = studentsState;

  // console.log(studentId,"skljtklrjfid", students, "datakdjfklStudents");
  console.log(students, "datakdjfklStudents");

  const student = students?.find((s) => s._id === id);

  console.log(student, "studkfjdkf");

  if (!student) {
    return (
      <div>
        <p>Student not found (ID{id})</p>
        <br />
        <Link to="/">Go to Students List</Link>
      </div>
    );
  }

  //  const handleStudentDelete = (studentId) => {
  //     dispatch(deleteStudent(studentId));
  // }

  // useEffect(() => {
  // handleStudentDelete();
  // });

  const handleStudentDelete = async () => {
    if (window.confirm(`Delete ${student.name}?`)) {
      try {
        await dispatch(deleteStudent(student._id));
        alert("Student deleted successfully!");
        window.location.href = "/";
      } catch (error) {
        console.error("Delete failed:", error);
        alert("Delete failed!");
      }
    }
  };

  return (
    <div>
      {status === "loading" && <p>Loading....</p>}
      {error && <p>{error}</p>}
      <h2>Student Detail</h2>
      <p>Name: {student?.name}</p>
      <p>Age: {student?.age}</p>
      <p>Gender: {student?.gender}</p>
      <p>Grade: {student?.grade}</p>
      <p>Attendance: {student?.attendance}</p>
      <p>Marks: {student?.marks}</p>
      <br />
      <div>
        <Link to="/addStudents" state={{ student, isEdit: true }}>
          <button style={{ backgroundColor: "blue" }}>Edit Details ✏️</button>
        </Link>
        <Link>
          <button
            style={{ backgroundColor: "red" }}
            onClick={handleStudentDelete}
          >
            Delete 🗑️
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StudentDetail;
