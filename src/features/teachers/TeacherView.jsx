import { useDispatch, useSelector} from 'react-redux'; 
import { fetchTeachers } from './TeacherSlice'; 
import { useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 


const TeacherView = () => {
    const dispatch = useDispatch(); 

    const teachersState = useSelector((state) => state?.teachers);
  const { teachers = [], status, error } = teachersState;

 

//   const teachersState = useSelector((state) => state.teachers || {});
// //    If state.teachers is undefined → returns empty object {} instead of crashing
//   const { teachers, status, error } = teachersState;
//   // Result: {teachers: [], status: undefined, error: undefined} 

// const teachersState = useSelector(state => ({
//     teachers: state.teachers?.teachers || [],
//     status: state.teachers?.status || 'idle',
//     error: state.teachers?.error || null
// }));
// const { teachers, status, error } = teachersState; // ✅ Stable reference


// Skip intermediate object entirely
// const teachers = useSelector(state => state.teachers?.teachers);
// console.log(teachers, "teacherskldjfkldfj")
// const status = useSelector(state => state.teachers?.status);
// const error = useSelector(state => state.teachers?.error );


    useEffect(() => {
        dispatch(fetchTeachers()); 
    }, []); 

    console.log(teachers, "checkingteachers"); 

    return (
        <>
            <div>
            <h1>Teacher View</h1>
            <Link to="/addTeachers">Add Teacher</Link>

            <h2>Teacher List</h2>
            {/* {teachers?.data.map((teacher) => (
                <ul>
                    <li>{teacher.name}</li>
                </ul>
            ))} */}
            </div>
        </>
    )
}






export default TeacherView; 