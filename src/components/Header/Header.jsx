import React from "react";
import "../../styles/header.css";
import search from "../../accets/search.png";
import adress from "../../accets/icons9.png";
import user from "../../accets/icon8.png";
import basket from "../../accets/icon10.png";
import { Link } from "react-router-dom";
import AllProducts from "../AllProducts/AllProducts";
import { useState } from "react";

const Header = ({setOpenModal}) => {
  const [text, setText] = useState("")
  return (
    <>
      <header className="header">
        <div className="conainer">
          <nav className="nav-header">
            <div className="burger" onClick={() => setOpenModal(true)}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <Link to="/">
              <h1 className="nav-title">ELECTRONICS</h1>
            </Link>
            <div className="nav_search">
              <img className="search_icon" src={search} alt="" />
              <input
                className="search_nav"
                type="text"
                placeholder="Я ищу..."
                value={text}
                onChange = {(e) => setText(e.target.value)}
              />
            </div>

            <div className="navbar">
              <div className="navbar-adress">
                <img src={adress} alt="" className="navbar-img" />
                <Link to="services/location">
                <p className="navbar-img-text">Адреса</p>
                </Link>
              </div>
              <div className="navbar-adress">
                <img src={user} alt="" className="navbar-img2" />
                <Link to="/login">
                <p className="navbar-img-text2">Войти</p>
                </Link>
              </div>
              <div className="navbar-adress">
                <img src={basket} alt="" className="navbar-img3" />
                <p className="navbar-img-text3">Корзина</p>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <AllProducts text={text} setText={setText}/>
    </>
  );
};

export default Header;
