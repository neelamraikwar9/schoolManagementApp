
import './App.css'
import { Route, Routes } from 'react-router-dom';
import SchoolView from './features/school/SchoolView';
import ClassView from './features/students/ClassView';
import StudentDetail from './features/students/StudentDetail';
import StudentForm from './features/students/StudentForm'; 
import StudentsView from './features/students/StudentView'; 

import TeacherForm from './features/teachers/TeacherForm'; 
import TeacherView from './features/teachers/TeacherView';



function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element=<StudentsView/>></Route>
      <Route path="/addStudents" element=<StudentForm/>></Route>
      <Route path="/classView" element=<ClassView/>></Route>
    
      <Route path="/schoolView" element=<SchoolView/>></Route>
      <Route path="/studentDetail/:id" element=<StudentDetail/>></Route>

      <Route path="/addTeachers" element=<TeacherForm/>></Route>
      <Route path="/teachersView" element=<TeacherView/>></Route>

    </Routes>
   
    </>
  )
}

export default App
