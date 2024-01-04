import { useState } from "react";
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
import AboutPeople from "./pages/AboutPeople";
import Login from "./pages/Login";
import RegisterPage from "./pages/Register";
const AppContainer = () => {
  const [users, setUsers] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ShowPage />,
    },
    {
      path: "/login",
      element: <Login users={users} />,
    },

    {
      path: "/register",
      element: <RegisterPage users={users} setUsers={setUsers} />,
    },
    {
      path: "/shows/:showId",
      element: <AboutMove />,
    },

    {
      path: "/people",
      element: <PeoplePage />,
    },
    {
      path: "/people/:peopleId",
      element: <AboutPeople />,
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
  return (
    <div
      className="container-fluid"
      style={{
        minHeight: "100vh",
      }}
    >
      <HeaderComponent />
      {/* <AboutMove /> */}
      <RouterProvider router={router} />
    </div>
  );
};
export default AppContainer;
