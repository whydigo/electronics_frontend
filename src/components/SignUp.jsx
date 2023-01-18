import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authSignUp } from "../features/applicationSlice";
import '../styles/auth.css'
import {Link} from 'react-router-dom'

const SignUp = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSetLog = (e) => {
    setLogin(e.target.value);
  };

  const handleSetPass = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    dispatch(authSignUp({ login, password }));
    e.preventDefault();
    setLogin("");
    setPassword("");
  };
  return (
    <div className="auth__main">
      <form className="auth__form" onSubmit={handleSignUp}>
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
        <button className="auth__button">Зарегистрироваться</button>
        <br />
        <Link className="authLink" to='/login'>Войти</Link>
      </form>
      <div className="auth__elements">
        <div className="auth__element_4"></div>
        <div className="auth__element_5"></div>
        <div className="auth__element_6"></div>
      </div>
    </div>
  );
};

export default SignUp;
