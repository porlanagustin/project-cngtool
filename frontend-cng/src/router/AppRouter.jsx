import RouteNotFound from "../components/pages/routeNotFound/RouteNotFound";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routes } from "./menuRoutes.js";
import Login from "../components/pages/login/Login.jsx";
// import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* <Route element={<ProtectedRoutes />}> */}
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      {/* </Route> */}

      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
};

export default AppRouter;
