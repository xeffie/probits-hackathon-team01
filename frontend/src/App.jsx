import { Link, Outlet, useLocation } from "react-router-dom";
import { BottomMenu } from "./components/bottomMenu/BottomMenu.jsx";

function App() {
  const { pathname } = useLocation();
  const isCoachPage = pathname === "/coach";
  const showViewSwitch = pathname === "/" || isCoachPage;

  return (
    <>
      {showViewSwitch && (
        <div className="view-switch">
          <Link to={isCoachPage ? "/" : "/coach"}>
            {isCoachPage ? "Till användarvyn" : "Till coachvyn"}
          </Link>
        </div>
      )}

      <Outlet />
      <BottomMenu />
    </>
  );
}

export default App;