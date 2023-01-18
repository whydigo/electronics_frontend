import React from "react";
import "../../../styles/location.css";

const ServiceLocation = () => {
  return (
    <div>
      <h1 className="serviceLocation_title">Доставка</h1>
      <div className="serviceLocation_banner">
        <div className="banner_content">
          <h2 className="banner_title">
            Быстро доставим любой Ваш заказ по всей России
          </h2>
          <div className="banner_advantage">
            <div className="advantage_item">
                Бесплатная доставка</div>
            <div className="advantage_item">
              Доставка круглый год по всей России
            </div>
            <div className="advantage_item">Возврат товара при примерке</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLocation;
