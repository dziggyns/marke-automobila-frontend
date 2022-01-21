import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const Header = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <nav className="navbar navbar-light bg-light mb-5">
      <div className="container-fluid">
        <Link to={!isLoggedIn ? "/" : "/dashboard"} style={{ color: "inherit", textDecoration: "inherit" }}>
          <h2>Marke Automobila</h2>
        </Link>
        <div className="d-flex">
          {!isLoggedIn && (
            <Link to="/register" style={{ textDecoration: "none" }}>
              <button className="d-flex btn btn-outline-success" id="register">
                Registracija
              </button>
            </Link>
          )}

          {!isLoggedIn && (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <button
                className="d-flex btn btn-outline-primary mx-2"
                id="login"
              >
                Prijava
              </button>
            </Link>
          )}

          {isLoggedIn && (
            <button className="d-flex btn btn-outline-primary mx-2" id="logout" onClick={logoutHandler}>
              Odjava
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
