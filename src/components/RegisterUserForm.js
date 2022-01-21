import { useRef } from "react";

const RegisterUserForm = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const password2InputRef = useRef();

  const submitRegistrationHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredPassword2 = password2InputRef.current.value;

    // todo: validacija

    const registrationData = {
      Email: enteredEmail,
      Password: enteredPassword,
      ConfirmPassword: enteredPassword2,
    };

    props.onRegisterSubmit(registrationData);
  };

  return (
    <div className="d-flex justify-content-center">
      <form
        className="form-control w-50 text-start"
        onSubmit={submitRegistrationHandler}
      >
        <div className="mb-3">
          <label htmlFor="reg-email" className="form-label">
            E-mail
          </label>
          <input type="text" className="form-control" id="reg-email" ref={emailInputRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="reg-password" className="form-label">
            Lozinka
          </label>
          <input type="password" className="form-control" id="reg-password" ref={passwordInputRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="reg-password2" className="form-label">
            Lozinka ponovo
          </label>
          <input type="password" className="form-control" id="reg-password2" ref={password2InputRef} />
        </div>
        <button className="btn btn-primary">Registruj se</button>
      </form>
    </div>
  );
};

export default RegisterUserForm;
