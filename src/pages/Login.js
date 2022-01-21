import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import ContentWrapper from "../components/layout/Wrapper";
import LoginUserForm from "../components/LoginUserForm";
import AuthContext from "../store/auth-context";

const Login = () => {
  const authCtx = useContext(AuthContext);

  let navigate = useNavigate();

  const LoginHandler = (loginData) => {
    fetch("https://localhost:44314/token", {
      method: "POST",
      body: `grant_type=password&username=${loginData.username}&password=${loginData.password}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const expirationTime = new Date(new Date().getTime() + (+data.expires_in * 1000));
        authCtx.login(data.access_token, expirationTime);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        alert("Doslo je do greske!");
      });
  };

  return (
    <ContentWrapper>
      <section>
        <h2>Prijava</h2>
        <LoginUserForm onLoginSubmit={LoginHandler} />
      </section>
    </ContentWrapper>
  );
};

export default Login;
