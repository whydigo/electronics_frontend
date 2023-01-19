import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/service.css";

const Service = () => {
  const isactive = ({ isActive }) => (isActive ? "service__header_active" : "");
  return (
    <div className="service__container_1  ">
      <div className="service__header">
        <NavLink to="/services/kak-sdelat-zakaz" className={isactive}>
          Как сделать заказ
        </NavLink>
        <NavLink to="/services/sposob-oplati" className={isactive}>
          Способ оплаты
        </NavLink>
        <NavLink to="/services/location" className={isactive}>
          Адрес
        </NavLink>
        <NavLink to="/services/vozvrat-tovara" className={isactive}>
          Возврат товара
        </NavLink>
        <NavLink to="/services/vozvrat-denezhnyh-sredstv" className={isactive}>
          Возврат денежных средств
        </NavLink>
        <NavLink to="/services/pravila-prodazhi" className={isactive}>
          Правила продажи
        </NavLink>
        <NavLink to="/services/pravila-polzovaniya-torgovoy-ploshchadkoy" className={isactive}>
          Правила пользования торговой площадкой
        </NavLink>
      </div>
    </div>
  );
};

export default Service;
