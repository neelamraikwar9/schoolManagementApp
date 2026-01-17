import { useSelector, useDispatch } from "react-redux";
import { fetchStudents } from "./studentSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const StudentsView = () => {
  const dispatch = useDispatch();

  const studentsState = useSelector((state) => state.students);
  const { students, status, error } = studentsState;

  // const { students, status, error } = useSelector((state) => state);

  console.log(students, "fullstudentsstate");

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  console.log(students, "studentscheckign");

  return (
    <>
      <h1>Student View</h1>
      <Link to="/addStudents">Add Student</Link>
      <h2>Student List</h2>
      <div>
        {status === "loading" && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {students?.map((student) => (
          <ul key={student._id}>
            <li>
              <Link to={`/studentDetail/${student._id}`}>
                {student.name}(Age: {student.age})
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default StudentsView;
