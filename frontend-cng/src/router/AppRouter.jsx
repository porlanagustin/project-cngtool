import RouteNotFound from "../components/pages/routeNotFound/RouteNotFound";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routes } from "./menuRoutes.js";
import Login from "../components/pages/login/Login.jsx";
import ProtectLogin from "./ProtectedRoutes/ProtectLogin.jsx";
import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoutes>
            <Layout />
          </ProtectedRoutes>
        }
      >
        <Route
          key={"login"}
          path={"/"}
          element={
            <ProtectLogin>
              <Login />
            </ProtectLogin>
          }
        />

        {routes.map(({ id, path, Element }) => (
          <Route
            key={id}
            path={path}
            element={
              <ProtectedRoutes>
                <Element />
              </ProtectedRoutes>
            }
          />
        ))}
      </Route>

      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
};
export default AppRouter;
