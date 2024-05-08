import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CreateCourse from "./pages/CreateCourse";
import StaffOperations from "./pages/Operations";
import AddStudent from "./pages/AddStudent";
import AddTeacher from "./pages/AddTeacher";
import AddCoursePacket from "./pages/AddCoursePacket";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="/create-course" element={<CreateCourse />} />
          <Route path="/operations" element={<StaffOperations />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/add-teacher" element={<AddTeacher />} />
          <Route path="/create-packet" element={<AddCoursePacket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
