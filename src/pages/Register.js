import { useNavigate } from "react-router-dom";

import ContentWrapper from "../components/layout/Wrapper";
import RegisterUserForm from "../components/RegisterUserForm";

const Register = () => {
  let navigate = useNavigate();

  const RegistrationHandler = (registrationData) => {
    fetch("https://localhost:44314/api/account/register", {
      method: "POST",
      body: JSON.stringify(registrationData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/");
        alert("Uspesna registracija!");
      })
      .catch((error) => {
        console.log(error);
        alert("Doslo je do greske!");
      });
  };

  return (
    <ContentWrapper>
      <section>
        <h2>Registracija</h2>
        <RegisterUserForm onRegisterSubmit={RegistrationHandler} />
      </section>
    </ContentWrapper>
  );
};

export default Register;
