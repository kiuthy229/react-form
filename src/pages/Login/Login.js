import React, { useState } from "react";
import LoginForm from "./LoginForm";
import "./Login.css";
// import "bootstrap/dist/css/bootstrap.css";
function Login() {
  const adminUser = {
    email: "admin@gmail.com",
    password: "admin123",
  };
  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");
  const Login = (details) => {
    console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  };
  const Logout = () => {
    setUser({ email: "" });
  };

  return (
    <div className="Login">
      {user.email !== "" ? (
        // show response of the request

        <div className="welcome">
          <h2>
            Welcome, <span>{user.email}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default Login;
