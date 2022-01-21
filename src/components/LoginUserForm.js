import { useRef } from "react";

const LoginUserForm = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitLoginHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // todo: validacija

    const loginData = {
      username: enteredEmail,
      password: enteredPassword,
    };

    props.onLoginSubmit(loginData);
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="form-control w-50 text-start" onSubmit={submitLoginHandler}>
        <div className="mb-3">
          <label htmlFor="log-email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            id="log-email"
            required
            ref={emailInputRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="log-password" className="form-label">
            Lozinka
          </label>
          <input
            type="password"
            className="form-control"
            id="log-password"
            required
            ref={passwordInputRef}
          />
        </div>
        <button className="btn btn-primary">Prijavi se</button>
      </form>
    </div>
  );
};

export default LoginUserForm;
