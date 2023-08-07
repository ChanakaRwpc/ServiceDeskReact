import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { AuthProvider } from "./layouts/authentication/authProvider/AuthProvider";
import Signin from "./layouts/authentication/sign-in";
import EngineerHome from "./layouts/other/EngineerHome";
import ManagerHome from "./layouts/other/ManagerHome";
import Verification from "./layouts/authentication/verification";
// import EngineerHome from "./layouts/other/EngineerHome";
import ProtectedRoute from "./route/ProtectedRoute";
import Protected from "./route/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
// import AppBar from "./components/AppBar/ResponsiveAppBar";
import AppBar from "@mui/material/AppBar";
import "react-toastify/dist/ReactToastify.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";

function App() {
  const { userType } = useSelector((state) => state.auth);
  return (
    <AuthContextProvider>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <StyledEngineProvider injectFirst>
        {/* <ProtectedRoute /> */}
        <Routes>
          <Route element={<ProtectedRoute />}>
            {userType === "User" ? (
              <Route element={<EngineerHome />} path="/" exact />
            ) : (
              <Route element={<ManagerHome />} path="/" exact />
            )}
             {/* <Route element={<ManagerHome />} path="/home" /> */}
          </Route>
          <Route element={<Signin />} path="/" />
          <Route element={<Signin />} path="/login" />
          <Route element={<Signin />} path="/*" />
          {/* <Route element={<Verification />} path="/Verification" /> */}
        </Routes>
      </StyledEngineProvider>
    </AuthContextProvider>
  );
}

export default App;
