import { useState } from "react";
import { useDispatch  } from 'react-redux';
import { addStudents } from './studentSlice';

const StudentForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [gender, setGender] = useState("");
  const [attendance, setAttendance] = useState("");
  const [marks, setMarks] = useState("");


  function handleGenderChange(e) {
    const selectedGender = e.target.value;
    setGender(selectedGender);
  }

  console.log(name, age, grade, gender, attendance, marks, "data");

  const handleAddStudents = (e) => {
    e.preventDefault();

    const studentData = {
        name,
        age: Number(age),
        grade,
        gender,
        attendance,
        marks
    };

    dispatch(addStudents(studentData));
    window.alert("Student added successfully.");
    
    setName("");
    setAge("");
    setGrade("");
    setGender("");
    setAttendance("");
    setMarks("");





    // const studentData = {
    //     name: "",
    //     age: "",
    //     grade: "",
    //     gender: ""
    // };


  };

  return (
    <main>
      <h1>Add Student</h1>
      <form>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />

        <div>
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <br />

        <div>
          <input
            type="text"
            placeholder="Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>
        <br />

        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={gender === "Male"}
            onChange={handleGenderChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={handleGenderChange}
          />
          Female
        </div>
        <br />

         <div>
          <input
            type="number"
            placeholder="Attendance"
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
          />
        </div>
        <br />


         <div>
          <input
            type="number"
            placeholder="Marks"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
        </div>
        <br />

        <div>
          <button onClick={handleAddStudents}>Add</button>
        </div>
      </form>
    </main>
  );
};

export default StudentForm;
