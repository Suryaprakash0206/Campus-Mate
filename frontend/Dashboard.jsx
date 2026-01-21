import { useParams, useLocation, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Dashboard() {
  const { role } = useParams();
  const location = useLocation();

  const page =
    location.pathname.split("/").pop() === role
      ? "Welcome"
      : location.pathname.split("/").pop();

  const pageTitle = page.charAt(0).toUpperCase() + page.slice(1);

  return (
    <div className="dashboard-wrapper">
      <Topbar />

      <div className="dashboard">
        <Sidebar role={role} />

        <div className="content">
          <h2>{pageTitle}</h2>
          <p>This is the {pageTitle} page</p>

          <Outlet />
        </div>
      </div>
    </div>
  );
}
