import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/home/Home.jsx";
import ReflectionNotePage from "./pages/reflectionNotePage/ReflectionNotePage.jsx";
import ReflectionMoodPage from "./pages/reflectionMoodPage/ReflectionMoodPage.jsx";
import ReflectionTagsPage from "./pages/reflectionTagsPage/ReflectionTagsPage.jsx";
import ReflectionSummaryPage from "./pages/reflectionSummaryPage/ReflectionSummaryPage.jsx";

const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "reflection/note",
        element: <ReflectionNotePage />,
      },
      {
        path: "reflection/mood",
        element: <ReflectionMoodPage />,
      },
      {
        path: "reflection/tags",
        element: <ReflectionTagsPage />,
      },
      {
        path: "reflection/summary",
        element: <ReflectionSummaryPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default routing;
