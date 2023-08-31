import React, { useState } from "react";
import "../../styles/header.css";
import search from "../../assets/search.png";
import adress from "../../assets/icons9.png";
import user from "../../assets/icon8.png";
import basket from "../../assets/icon10.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ setOpenModal, text, setText }) => {
  const token = useSelector((state) => state.application.token);
  const product = useSelector((state) => state.productReducer.product);
  const allProducts = [];
  allProducts.push(...product);
  const filteredProducts = allProducts.filter((i) => {
    return i.name?.toLowerCase().includes(text?.toLowerCase().toString());
  });

  const [isOpen, setIsOpen] = useState(true);

  const itemClickHandler = (e) => {
    setText(e.target.textContent);
    setIsOpen(!isOpen);
  };

  const inputClickHandler = () => {
    setIsOpen(true);
  };

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
              <div className="nav-title">Electronics</div>
            </Link>
            <div
              className={
                filteredProducts.length === 0 || !text || !isOpen
                  ? "nav_search"
                  : "nav_search active"
              }
            >
              <img className="search_icon" src={search} alt="" />
              <input
                className="search_nav"
                type="text"
                placeholder="Я ищу..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onClick={inputClickHandler}
              />
              <ul className="autocomplete">
                {text && isOpen
                  ? filteredProducts.map((i) => {
                      return (
                        <Link to={`category/${i.category}`}>
                          <li
                            key={i._id}
                            className="autocomplete__item"
                            onClick={itemClickHandler}
                          >
                            {i.name}
                          </li>
                        </Link>
                      );
                    })
                  : null}
              </ul>
            </div>
            <div className="navbar">
              <Link to="services/location">
                <div className="navbar-adress">
                  <img src={adress} alt="" className="navbar-img" />
                  <p className="navbar-img-text">Адреса</p>
                </div>
              </Link>
              {!token ? (
                <Link to="/login">
                  <div className="navbar-adress">
                    <img src={user} alt="" className="navbar-img" />
                    <p className="navbar-img-text">Войти</p>
                  </div>
                </Link>
              ) : (
                <Link to="/profile">
                  <div className="navbar-adress">
                    <img src={user} alt="" className="navbar-img" />
                    <p className="navbar-img-text">Профиль</p>
                  </div>
                </Link>
              )}
              {token && (
                <>
                  <Link to={`/basket`}>
                    <div className="navbar-adress">
                      <img src={basket} alt="" className="navbar-img" />
                      <p className="navbar-img-text">Корзина</p>
                    </div>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
