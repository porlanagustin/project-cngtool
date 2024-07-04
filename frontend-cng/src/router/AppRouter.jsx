import RouteNotFound from "../components/pages/routeNotFound/RouteNotFound";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routes } from "./menuRoutes.js";
import Login from "../components/pages/login/Login.jsx";
import ProtectLogin from "./ProtectedRoutes/ProtectLogin.jsx";

const AppRouter = () => {

  return (
    <Routes>
      <Route element={<ProtectedRoutes><Layout></Layout></ProtectedRoutes>}>
        <Route key={"login"} path={"/"} element={<ProtectLogin><Login></Login></ProtectLogin>}></Route>

        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element></Element>}></Route>
        ))}
      </Route>

      <Route path="*" element={<RouteNotFound></RouteNotFound>}></Route>
    </Routes>
  );
};

export default AppRouter;
