import { useDispatch, useSelector } from "react-redux";
import { fetchStudents, setFilter, setSortBy } from "./studentSlice";
import { useMemo, useEffect } from "react";

const ClassView = () => {
  const dispatch = useDispatch();
  const { students, filter, sortBy } = useSelector((state) => state.students);

  console.log(students, "fullstudentsstate");

  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  const filteredStudents = useMemo(() => {
    if (filter === "all") return students;
    if (filter === "boys")
      return students?.filter((boy) => boy.gender === "Male");
    if (filter === "girls")
      return students?.filter((girl) => girl.gender === "Female");
    return students;
  }, [students, filter]);

  console.log(filteredStudents, "filteredStrudnets");

  // const sortedStudents = useMemo(() => {
  //   if(sortBy === "name") return students?.sort((a, b) => a.name.localCompare(b.name));
  //   if(sortBy === "marks") return students?.sort((a, b) => b.marks - a.marks);  //high to low marks;
  //   if(sortBy === "attendance") return students?.sort((a, b) => b.attendance = a.attendance);
  //   return 0;
  // }, [filteredStudents, sortBy]);

  const sortedStudents = useMemo(() => {
    return [...filteredStudents].sort((a, b) => {
      // ✅ SAFE STRING COMPARE
      const nameA = a.name || ""; // Fallback to empty string
      const nameB = b.name || "";

      if (sortBy === "name") {
        return nameA.localeCompare(nameB);
      }
      if (sortBy === "marks") {
        return (b.marks || 0) - (a.marks || 0);
      }
      if (sortBy === "attendance") {
        return (b.attendance || 0) - (a.attendance || 0);
      }
      return 0;
    });
  }, [filteredStudents, sortBy]);
  console.log(filteredStudents, "filteredStudents");

  return (
    <div>
      <h1>Class View</h1>
      <div>
        <label>Filter By Gender: </label>
        <select
          value={filter}
          onChange={(e) => dispatch(setFilter(e.target.value))}
        >
          <option value="all">All</option>
          <option value="boys">Boys</option>
          <option value="girls">Girls</option>
        </select>
      </div>

      <div>
        <label>Sort Boys: </label>
        <select
          value={sortBy}
          onChange={(e) => dispatch(setSortBy(e.target.value))}
        >
          <option value="name">Name</option>
          <option value="marks">Marks</option>
          <option value="attendance">Attendance</option>
        </select>
      </div>

      {/* //render filtered list; */}
      {sortedStudents.map((student) => (
        <ul key={student._id}>
          <li>
            {student.name} - {student.gender} - Marks: {student.marks} -
            Attendance: {student.attendance}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ClassView;
