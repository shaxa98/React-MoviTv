import HeaderComponent from "./components/Header";
import ShowPage from "./pages/ShowPage";
import PeoplePage from "./pages/PeoplePage";
import ArticlesPage from "./pages/ArticlesPage";
import CountdownPage from "./pages/CountdownPage";
import NetworkPage from "./pages/NetworkPage";
import WebChannelsPage from "./pages/WebChannelsPage";
import ForumsPage from "./pages/ForumsPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMove from "./pages/AboutMove";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowPage />,
  },
  {
    path: "/people",
    element: <PeoplePage />,
  },
  {
    path: "/network",
    element: <NetworkPage />,
  },
  {
    path: "/web-chanel",
    element: <WebChannelsPage />,
  },
  {
    path: "/articles",
    element: <ArticlesPage />,
  },
  {
    path: "/countdown",
    element: <CountdownPage />,
  },
  {
    path: "/forums",
    element: <ForumsPage />,
  },
]);

const AppContainer = () => {
  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "100vh",
      }}
    >
      <AboutMove />
      <HeaderComponent />
      <RouterProvider router={router} />
    </div>
  );
};
export default AppContainer;
