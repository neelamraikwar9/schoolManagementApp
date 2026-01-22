import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteTeacher } from "./TeacherSlice";

const TeacherDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { teachers, status, error } = useSelector((state) => state.teachers);

  console.log(teachers, "teachers");

  const teacher = teachers?.find((t) => t._id === id);
  console.log(teacher, "teacher");

  if (!teachers) {
    return (
      <div>
        <p>Teacher not found (ID{id})</p>
        <br />
        <Link to="/teachersView">Go to Teacher List</Link>
      </div>
    );
  }

  const handleTeacherDelete =  () => {
    if(window.confirm(`Delete ${teacher.name}?`)){
      try{
        dispatch(deleteTeacher(teacher._id)); 
        alert("Teacher deleted successfully."); 
        window.location.href = "/teachersView"; 
      } catch(error){
        console.error("Delete failed", error);
        alert("Delete failed!"); 
      }
    }
  };

  return (
    <div>
      {status == "loading" && <p>Loading... </p>}
      {error && <p>{error}</p>}

      <h1>Teacher Detail</h1>
      <p>Name: {teacher?.name}</p>
      <p>Email: {teacher?.email}</p>
      <p>Phone: {teacher?.phone}</p>
      <p>Age: {teacher?.age}</p>
      <p>Gender: {teacher?.gender}</p>
      <p>Subject: {teacher?.subject}</p>
      <p>Experience: {teacher?.experience}</p>
      <p>Status: {teacher?.status}</p>
      <div>
      <Link to="/addTeachers" state={{teacher, isEdit: true}}><button  style={{ backgroundColor: "blue" }}>Edit Details</button></Link>
      <button onClick={handleTeacherDelete}>Delete</button>
      </div>
    </div>
    
  );
};

export default TeacherDetail;
