import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <Topbar />

      <div className="dashboard">
        <Sidebar />
        <div className="content">
          <div className="cards">
            <div className="card-box">Schedule</div>
            <div className="card-box">Works</div>
          </div>
        </div>
      </div>
    </div>
  );
}
