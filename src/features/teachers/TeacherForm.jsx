import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTeacher } from "./TeacherSlice";
// import { useNavigate, useLocation } from "react-router-dom";

const TeacherForm = () => {
  const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const editingStudent = location.state?.student;
//   console.log(editingStudent, "edintjijjfkljkle");
//   const isEditMode = location.state?.isEdit;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    subject: "",
    experience: "",
    status: "",
  });

  console.log(formData, "formData"); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prv) => ({ ...prv, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 

    dispatch(addTeacher(formData));

    window.alert("Teacher added successfully.")

    setFormData ({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    subject: "",
    experience: "",
    status: "",
  });

  }

  // ✅ Populate form if editing
//   useEffect(() => {
//     if (editingStudent) {
//       setFormData({
//         name: editingStudent.name || "",
//         age: editingStudent.age || "",
//         gender: editingStudent.gender || "",
//         marks: editingStudent.marks || "",
//         attendance: editingStudent.attendance || "",
//         grade: editingStudent.grade || "",
//       });
//     }
//   }, [editingStudent]);



//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("submitting", formData);

//     try {
//       if (isEditMode && editingStudent) {
//         dispatch(
//           updateStudent({
//             ...formData,
//             id: editingStudent._id,
//           }),
//         );
//         alert("Student updated successfully!");
//       } else {
//         dispatch(addStudents(formData));
//         alert("Student added successfully!");
//       }
//       navigate("/");
//     } catch (error) {
//       console.log("Error", error);
//       alert("Something went wrong!");
//     }
//   };

  return (
    <main>
      {/* <h1>{isEditMode ? "Edit Student" : "Add Student"}</h1> */}
      <form 
      onSubmit={handleSubmit}
      >
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
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div>
          <input
            type="number"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
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
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div>
          <input
            type="number"
            name="experience"
            placeholder="Experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
        <br />

        <div>
        <label>Status: </label>
          <select type="status"
            name="status"
            placeholder="Status"
            value={formData.status}
            onChange={handleChange}
            required>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="on-leave">On-leave</option>
          </select>
            
          
        </div>
        <br />

        <div>
          <button type="submit">Add Teacher
            {/* {editingStudent ? "Update Student" : "Add Student"} */}
          </button>
        </div>
      </form>
    </main>
  );
};

export default TeacherForm;
