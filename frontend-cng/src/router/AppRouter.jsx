import RouteNotFound from "../components/pages/routeNotFound/RouteNotFound";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { routes } from "./menuRoutes.js";
import Login from "../components/pages/login/Login.jsx";
import { regionRoutes } from "../components/pages/infoDestinations/placeToVisit/regionRoutes/regionRoutes.js";
// import ProtectedRoutes from "./ProtectedRoutes/ProtectedRoutes.jsx";

// Rutas para las páginas principales
const mainRoutes = routes.map(({ id, path, Element }) => (
  <Route key={id} path={path} element={<Element />} />
));

// Rutas para las regiones
const regionRoutesComponents = regionRoutes.map(({ path, Element }) => (
  <Route key={path} path={path} element={<Element />} />
));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route element={<ProtectedRoutes />}> */}
      <Route element={<Layout />}>
        {mainRoutes}
        {regionRoutesComponents}
      </Route>
      {/* </Route> */}

      <Route path="*" element={<RouteNotFound />} />
    </Routes>
  );
};

export default AppRouter;
