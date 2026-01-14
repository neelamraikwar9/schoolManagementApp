import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

const StudentDetail = () => {
    const { id } = useParams(); 
    const students = useSelector((state) => state.students); 

    console.log(id, students, "datakdjfkl")
  return (
    <div>

    </div>
  )
}

export default StudentDetail

