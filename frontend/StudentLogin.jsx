import { useNavigate } from "react-router-dom";

export default function StudentLogin() {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="box">
        <h2>Student Login</h2>
        <input placeholder="Student ID" />
        <input type="password" placeholder="Password" />
        <button onClick={() => navigate("/dashboard")}>Login</button>
      </div>
    </div>
  );
}
