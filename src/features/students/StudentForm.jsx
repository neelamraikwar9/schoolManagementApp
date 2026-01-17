import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addStudents, updateStudent } from "./studentSlice";
import { useNavigate, useLocation } from "react-router-dom";

const StudentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [grade, setGrade] = useState("");
  // const [gender, setGender] = useState("");
  // const [attendance , setAttendance] = useState("");
  // const [marks, setMarks] = useState("");

  // function handleGenderChange(e) {
  //   const selectedGender = e.target.value;
  //   setGender(selectedGender);
  // }

  // console.log(name, age, grade, gender, attendance, marks, "data");

  // const handleAddStudents = (e) => {
  //   e.preventDefault();

  //   const studentData = {
  //       name,
  //       age: Number(age),
  //       grade,
  //       gender,
  //       attendance,
  //       marks
  //   };

  //   dispatch(addStudents(studentData));
  //   window.alert("Student added successfully.");

  //   setName("");
  //   setAge("");
  //   setGrade("");
  //   setGender("");
  //   setAttendance("");
  //   setMarks("");
  // };

  const editingStudent = location.state?.student;
  console.log(editingStudent, "edintjijjfkljkle");
  const isEditMode = location.state?.isEdit;

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    grade: "",
    attendance: "",
    marks: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prv) => ({ ...prv, [name]: value }));
  };

  // ✅ Populate form if editing
  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name || "",
        age: editingStudent.age || "",
        gender: editingStudent.gender || "",
        marks: editingStudent.marks || "",
        attendance: editingStudent.attendance || "",
        grade: editingStudent.grade || "",
      });
    }
  }, [editingStudent]);

  // function handleGenderChange(e) {
  //   const selectedGender = e.target.value;
  //   setGender(selectedGender);
  // }

  // console.log(name, age, grade, gender, attendance , marks, "data");

  // const handleAddStudents = (e) => {
  //   e.preventDefault();

  //   if(isEditMode && editingStudent){
  //      dispatch(updateStudent({ id: editingStudent?._id}));
  //   } else{

  // const studentData = {
  //     name,
  //     age: Number(age),
  //     grade,
  //     gender,
  //     attendance,
  //     marks
  // };

  //  const setFormData = {
  //     name,
  //     age: Number(age),
  //     grade,
  //     gender,
  //     attendance ,
  //     marks
  // };

  //     dispatch(addStudents(setFormData));
  //     window.alert("Student added successfully.");

  //     setName("");
  //     setAge("");
  //     setGrade("");
  //     setGender("");
  //     setAttendance("");
  //     setMarks("");
  //   };
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitting", formData);

    try {
      if (isEditMode && editingStudent) {
        dispatch(
          updateStudent({
            ...formData,
            id: editingStudent._id,
          })
        );
        alert("Student updated successfully!");
      } else {
        dispatch(addStudents(formData));
        alert("Student added successfully!");
      }
      navigate("/");
    } catch (error) {
      console.log("Error", error);
      alert("Something went wrong!");
    }
  };

  return (
    <main>
      <h1>{isEditMode ? "Edit Student" : "Add Student"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div>
          <input
            type="number"
            placeholder="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div>
          <input
            type="text"
            name="grade"
            placeholder="Grade"
            value={formData.grade}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
            required
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
            required
          />
          Female
        </div>
        <br />

        <div>
          <input
            type="number"
            name="attendance"
            placeholder="Attendance"
            value={formData.attendance}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div>
          <input
            type="number"
            name="marks"
            placeholder="Marks"
            value={formData.marks}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div>
          <button type="submit">
            {editingStudent ? "Update Student" : "Add Student"}
          </button>
        </div>
      </form>
    </main>
  );
};

export default StudentForm;
