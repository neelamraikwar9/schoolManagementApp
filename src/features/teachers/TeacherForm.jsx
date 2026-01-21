import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTeacher, updateTeacher } from "./TeacherSlice";
import { useNavigate, useLocation } from "react-router-dom";

const TeacherForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const editingTeacher = location.state?.teacher;
  console.log(editingTeacher, "edintjijjfkljkle");
  const isEditMode = location.state?.isEdit;

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


  useEffect(() => {
    if(editingTeacher){
      setFormData({
        name: editingTeacher.name || "" ,
        email: editingTeacher.email || "", 
        phone: editingTeacher.phone || "",
        age: editingTeacher.age || "",
        gender: editingTeacher.gender || "",
        subject: editingTeacher.subject || "",
        experience: editingTeacher.experience || "",
        status: editingTeacher.status || ""
      });
    }
  }, [editingTeacher]);


  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   console.log("submitting formData", formData); 
  //   try{
  //   if(isEditMode && editingTeacher){
  //     dispatch(updateTeacher({...formData, id: editingTeacher._id})); 
  //   }
  //   alert("Teacher updated successfully!")
  //   else{
  //     dispatch(addTeacher(formData)); 
  //      alert("Teacher added successfully!");
  //   }


  //   setFormData ({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   age: "",
  //   gender: "",
  //   subject: "",
  //   experience: "",
  //   status: "",
  // });

  // } catch(error){

  // }


const handleSubmit = (e) => {
  e.preventDefault(); 

  console.log("Submitting Form", formData);

  try{
    if(isEditMode && editingTeacher){
      dispatch(updateTeacher({...formData, id: editingTeacher._id,})),
      alert("Teacher updated successfully!");
    } else {
      dispatch(addTeacher(formData));
      alert("Teacher added successfully!");
    }
    navigate("/teachersView")
  } catch(error){
     console.log("Error", error);
      alert("Something went wrong!");
  }

}





    

  return (
    <main>
      <h1>{isEditMode ? "Edit Teacher" : "Add Teacher"}</h1>
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
          <button type="submit">
            {editingTeacher ? "Update Teacher" : "Add Teacher"}
          </button>
        </div>
      </form>
    </main>
  );
};

export default TeacherForm;
