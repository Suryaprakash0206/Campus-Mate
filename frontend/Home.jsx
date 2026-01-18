import { useNavigate } from "react-router-dom";
import logo from "../assets/CC6.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* LEFT SIDE */}
      <div className="left">
        <img src={logo} alt="Campus Mate Logo" className="big-logo" />
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="card">
          <h2>Campus Mate</h2>

          <button
            onClick={() => navigate("/student")}
            className="student"
          >
            Student Login
          </button>

          <button
            onClick={() => navigate("/faculty")}
            className="faculty"
          >
            Faculty Login
          </button>
        </div>
      </div>
    </div>
  );
}
