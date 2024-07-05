import { useEffect } from "react";
import { deleteToken } from '../../services/authServices.js'

const ProtectSession = () => {
  useEffect(() => {
    const handleBeforeUnload = () => {
      deleteToken();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return null;
};

export default ProtectSession;
