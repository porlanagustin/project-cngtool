import { useNavigate } from "react-router-dom";
import { regionRoutes } from "./regionRoutes/regionRoutes";
import './PlaceToVisit.css';

const PlaceToVisit = () => {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      {regionRoutes.map(({ id, path, label }) => (
        <div
          key={id}
          className="element-box"
          onClick={() => handleRedirect(path)}
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default PlaceToVisit;
