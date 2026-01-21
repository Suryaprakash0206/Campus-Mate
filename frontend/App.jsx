import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudentLogin from "./pages/StudentLogin";
import FacultyLogin from "./pages/FacultyLogin";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student" element={<StudentLogin />} />
      <Route path="/faculty" element={<FacultyLogin />} />

      <Route path="/dashboard/:role" element={<Dashboard />}>
        <Route path="announcements" />
        <Route path="exams" />
        <Route path="hackathons" />
        <Route path="drives" />
        <Route path="profile" />
        <Route path="timetable" />
        <Route path="permissions" />
        <Route path="granted" />
      </Route>
    </Routes>
  );
}

export default App;
