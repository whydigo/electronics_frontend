import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authSignIn } from "../features/applicationSlice";
import "../styles/auth.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSetLog = (e) => {
    setLogin(e.target.value);
  };

  const handleSetPass = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = (e) => {
    dispatch(authSignIn({ login, password }));
    e.preventDefault();
    setLogin("");
    setPassword("");
  };
  return (
    <>
      <div className="auth__main">
        <form className="auth__form" onSubmit={handleSignIn}>
          <input
            className="auth"
            type="text"
            value={login}
            placeholder="логин"
            onChange={handleSetLog}
          />
          <br />
          <input
            className="auth"
            type="password"
            value={password}
            placeholder="пароль"
            onChange={handleSetPass}
          />
          <br />
          <button className="auth__button">Войти</button>
          <br />
          <Link className="authLink" to="/register">
            Зарегистрироваться
          </Link>
        </form>
        <div className="auth__elements">
          <div className="auth__element_1"></div>
          <div className="auth__element_2"></div>
          <div className="auth__element_3"></div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
