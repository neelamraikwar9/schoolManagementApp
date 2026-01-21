
import { useSelector, useDispatch } from "react-redux";
import { fetchTeachers } from './TeacherSlice'
import { useEffect } from "react";
import { Link } from "react-router-dom";


const TeachersView = () => {
  const dispatch = useDispatch();

//   const teachersState = useSelector((state) => state.tachers);
//   const { teachers, status, error } = teachersState;
const {teachers, status, error } = useSelector((state) => state.teachers); 

  // const { students, status, error } = useSelector((state) => state);

  console.log(teachers, "fullstudentsstate");

  useEffect(() => {
    dispatch(fetchTeachers());
  }, []);

  console.log(teachers, "studentscheckign");

  return (
    <>
      <h1>Teacher View</h1>
      <Link to="/addTeachers">Add Teacher</Link>
      <h2>Teacher List</h2>
       <div>
        {status === "loading" && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {teachers?.map((teacher) => (
          <ul key={teacher._id}>
            <li>
              <Link to={`/teacherDetail/${teacher._id}`}>
                {teacher.name} - (Age: {teacher.age}) - {teacher.subject}
              </Link>
            </li>
          </ul>
        ))}
      </div>
     
    </>
  );
};

export default TeachersView;


