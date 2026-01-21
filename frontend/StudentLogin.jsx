import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function StudentLogin() {
  const [roll, setRoll] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (roll === "" || password === "") {
      alert("Roll number and password required");
      return;
    }
    navigate("/dashboard/student");
  };

  return (
    <div className="login">
      <div className="box">
        <h2>Student Login</h2>

        <input
          placeholder="Roll Number"
          onChange={(e) => setRoll(e.target.value)}
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
