import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../services/authServices.js";

const ProtectLogin = ({ children }) => {
    const isLoggin = isLoggedIn();
    const navigate = useNavigate();

    return isLoggin ? navigate('/home') : children;
}

export default ProtectLogin;