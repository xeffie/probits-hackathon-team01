import { Outlet } from "react-router-dom";
import { BottomMenu } from "./components/bottomMenu/BottomMenu.jsx";

function App() {
    return (
        <>
            <Outlet />
            <BottomMenu />
        </>
    );
}

export default App;