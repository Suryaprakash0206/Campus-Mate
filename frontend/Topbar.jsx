import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="topbar">
      {/* LEFT / CENTER BRAND */}
      <div className="topbar-center">
        <h1 className="brand">CAMPUS MATE</h1>
      </div>

      {/* RIGHT LOGOUT */}
      <div className="topbar-right">
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
