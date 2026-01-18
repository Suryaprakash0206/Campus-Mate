import logo from "../assets/CC6.png";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <img src={logo} alt="Campus Mate Logo" className="topbar-logo" />
        <h1>CAMPUS MATE</h1>
      </div>
    </div>
  );
}
