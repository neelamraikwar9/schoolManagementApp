import { useSelector, useDispatch } from 'react-redux'; 
import {fetchStudents} from './studentSlice'
import { useEffect } from 'react';


const Students = () => {
    const dispatch = useDispatch();
    const students = useSelector((state) => {
        console.log(tasks, "tsks");

        return state.students; 
    });

    useEffect(() => {
        dispatch(fetchStudents())
    }, []);

    return (
        <>
          <h1>Student List</h1>  
        </>
    )
}
