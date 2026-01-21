import { NavLink } from "react-router-dom";

export default function Sidebar({ role }) {
  return (
    <div className="sidebar">

      {/* ================= STUDENT ================= */}
      {role === "student" && (
        <>
          {/* Student = Profile */}
          <NavLink to="profile" className="side-link title">
            Student
          </NavLink>

          <NavLink className="side-link" to="announcements">
            Announcements
          </NavLink>

          <NavLink className="side-link" to="exams">
            Exams
          </NavLink>

          <NavLink className="side-link" to="hackathons">
            Hackathons
          </NavLink>

          <NavLink className="side-link" to="drives">
            Drives
          </NavLink>
        </>
      )}

      {/* ================= FACULTY ================= */}
      {role === "faculty" && (
        <>
          {/* Faculty = Profile */}
          <NavLink to="profile" className="side-link title">
            Faculty
          </NavLink>

          <NavLink className="side-link" to="timetable">
            Timetable
          </NavLink>

          <NavLink className="side-link" to="permissions">
            Permissions
          </NavLink>

          <NavLink className="side-link" to="granted">
            Granted Requests
          </NavLink>
        </>
      )}

    </div>
  );
}
