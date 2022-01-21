import { useState, useEffect, useCallback, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AuthContext from "./store/auth-context";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function App() {
  const authCtx = useContext(AuthContext);

  const [carsList, setCarsList] = useState([]);

  const fetchCarsHandler = useCallback((token) => {
    let headers = {};
    if (token) {
      headers = {
        Authorization: "Bearer " + token,
      };
    }
    fetch("https://localhost:44314/api/automobili", { headers: headers })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCarsList(data);
      })
      .catch((error) => {
        console.log(error);
        alert("Došlo je do greške prilikom učitavanja liste automobila!");
      });
  }, []);

  useEffect(() => {
    fetchCarsHandler(authCtx.token);
  }, [fetchCarsHandler, authCtx.token]);

  return (
    <Routes>
      <Route path="/" element={<Home data={carsList} />} />
      {!authCtx.isLoggedIn && <Route path="/login" element={<Login />} />}
      {!authCtx.isLoggedIn && <Route path="/register" element={<Register />} />}
      {authCtx.isLoggedIn && (
        <Route path="/dashboard" element={<Dashboard data={carsList} />} />
      )}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
