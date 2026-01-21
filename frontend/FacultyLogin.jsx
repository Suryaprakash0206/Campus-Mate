import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FacultyLogin() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (id === "" || password === "") {
      alert("Faculty ID and password required");
      return;
    }
    navigate("/dashboard/faculty");
  };

  return (
    <div className="login">
      <div className="box">
        <h2>Faculty Login</h2>

        <input
          placeholder="Faculty ID"
          onChange={(e) => setId(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
