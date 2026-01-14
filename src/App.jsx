
import './App.css'
import StudentDetail from './features/students/StudentDetail';
import StudentForm from './features/students/StudentForm'; 
import StudentsView from './features/students/StudentView'; 
import { Route, Routes } from 'react-router-dom';


function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element=<StudentsView/>></Route>
      <Route path="/addStudents" element=<StudentForm/>></Route>
      <Route path="/students" element=<StudentForm/>></Route>
      <Route path="/classes" element=<StudentForm/>></Route>
      <Route path="/school" element=<StudentForm/>></Route>
      <Route path="/studentDetail/:id" element=<StudentDetail/>></Route>

    </Routes>
   
    </>
  )
}

export default App
