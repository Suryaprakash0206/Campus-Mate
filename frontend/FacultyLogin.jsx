import { useNavigate } from "react-router-dom";

export default function FacultyLogin() {
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="box">
        <h2>Faculty Login</h2>
        <input placeholder="Faculty ID" />
        <input type="password" placeholder="Password" />
        <button onClick={() => navigate("/dashboard")}>Login</button>
      </div>
    </div>
  );
}
