import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const StudentDetail = () => {
    const { id } = useParams(); 

    const studentsState = useSelector((state) => state.students);
    const { students, status, error } = studentsState;

    // console.log(studentId,"skljtklrjfid", students, "datakdjfklStudents"); 
    console.log(students, "datakdjfklStudents"); 


    const student = students?.find((s) => s._id === id);
     

    console.log(student, "studkfjdkf")

    if(!student){
        return <div>
        <p>Student not found (ID{id})</p>
        <br/>
        <Link to="/">Go to Students List</Link>
        </div>
    }
  return (
    <div>
     {status === "loading" && <p>Loading....</p>}
     {error && <p>{error}</p>}
     <h2>Student Detail</h2>
     <p>Name: {student?.name}</p>
     <p>Age: {student?.age}</p>
     <p>Grade: {student?.grade}</p>
     <p>Attendance: {student?.attendance}</p>
     <p>Marks: {student?.marks}</p>
    </div>
  )
}

export default StudentDetail




// import { useParams } from "react-router-dom";
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const StudentDetail = () => {
//   const { id } = useParams();  // ✅ Match route param: /studentDetail/:id

//   const studentsState = useSelector((state) => state.students);
//   const { students, status, error } = studentsState;

//   console.log(students, "Students array"); 
//   const student = students?.find((s) => s._id === id);  // ✅ String match
//   console.log(student, "Found student");

//   // Loading states
//   if (status === 'loading') return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!student) return (
//     <div>
//       Student not found. 
//       <Link to="/students"> Back to Students</Link>
//     </div>
//   );

//   return (
//     <div>
//       <h2>{student.name}</h2>
//       <p><strong>Grade:</strong> {student.grade}</p>
//       <p><strong>Age:</strong> {student.age}</p>
//       <Link to="/students">← Back to List</Link>
//     </div>
//   );
// };

// export default StudentDetail;
