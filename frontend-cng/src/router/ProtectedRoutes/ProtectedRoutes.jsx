import Login from "../../components/pages/login/Login";
import { isLog } from "../../services/authServices";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({children}) => {
    const isLogged = isLog();
    const navigate = useNavigate();

    return isLogged ? children : <Login></Login>


}

export default ProtectedRoutes;