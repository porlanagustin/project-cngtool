import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
// import { useEffect } from "react";
// import { deleteToken } from "./services/authServices.js";

function App() {
  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     deleteToken();
  //   };

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //   };
  // }, []);

  return (
    <BrowserRouter>
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
