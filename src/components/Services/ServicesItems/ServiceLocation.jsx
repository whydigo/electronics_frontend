import React from "react";
import "../../../styles/location.css";
import box from "../../../assets/dostavka_1.png";
import circle from "../../../assets/dostavka_2.png";
import openBox from "../../../assets/dostavka_3.png";
import copter from "../../../assets/dostavka_4.png";

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
              <img className="advantage_img" src={box} alt="fd" />
              Бесплатная доставка
            </div>
            <div className="advantage_item">
              <img className="advantage_img" src={circle} alt="fd" />
              Доставка круглый год по всей России
            </div>
            <div className="advantage_item">
              <img className="advantage_img" src={openBox} alt="fd" />
              Возврат товара при примерке
            </div>
          </div>
          <a className="delivery_banner_btn" href="##">
            Узнать условия
          </a>
        </div>
        <img className="delivery_copter" src={copter} alt="copter" />
      </div>
      <div>
        <h2 className="delivery-geo__title">Наше местоположение</h2>
        <div className="delivery-geo__wrap">
          <div className="delivery-geo__left">
            <div className="type-delivery">
              <span className="type-delivery__name">Адреса</span>
            </div>
            <div className="list-poo">
              <div className="list-poo__item">
                г. Грозный (ЧР), ул. Геннадия Н. Трошева, 7
              </div>
              <div className="list-poo__info">Ежедневно 10:00-18:00</div>
            </div>
          </div>
          <div className="delivery-geo__right">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ace5fa3e93e93554c6cf0ef2460a00877734879c5078180f4df7e6edf53c85121&amp;source=constructor"
              width="100%"
              title="map"
              height="700"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLocation;
