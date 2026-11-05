import ReflectionNotePage from "./pages/reflectionNotePage/ReflectionNotePage";
import { Home } from "./pages/home/Home.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <section className="wrapper">
      {/* <Home /> */}
      <Outlet />
    </section>
  );
}

export default App;
