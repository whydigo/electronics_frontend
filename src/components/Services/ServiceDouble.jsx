import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/service.css";

const Service = () => {
  const isactive = ({ isActive }) => (isActive ? "service__header_active" : "");
  return (
    <div className="service__container_1  ">
      <div className="service__header_1">
        <NavLink to="/services/about-us" className={isactive}>
          О нас
        </NavLink>
        <NavLink to="/services/rekvizity" className={isactive}>
          Реквизиты
        </NavLink>
        <NavLink to="/services/contacts" className={isactive}>
          Контакты
        </NavLink>
      </div>
    </div>
  );
};

export default Service;
