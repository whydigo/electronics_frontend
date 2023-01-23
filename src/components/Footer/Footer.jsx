import React from "react";
import {Link} from "react-router-dom"
import "./main.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="footer-row">
            <div className="container-1">
              <div className="white">
                <b>Покупателям</b>
              </div>
              <Link to="/services/kak-sdelat-zakaz"> 
              <p>Как сделать заказ</p>
              </Link>
              <Link to="/services/sposob-oplati"> 
              <p>Способы оплаты</p>
              </Link>
              <Link to="/services/location"> 
              <p>Доставка</p>
              </Link>
              <Link to="/services/vozvrat-tovara"> 
              <p>Возврат товара</p>
              </Link>
              <Link to="/services/vozvrat-denezhnyh-sredstv"> 
              <p>Возврат денежных средств</p>
              </Link>
              <Link to="/services/pravila-prodazhi"> 
              <p>Правила продажи</p>
              </Link>
              <Link to="/services/pravila-polzovaniya-torgovoy-ploshchadkoy"> 
              <p>Правила пользования торговой площадкой</p>
              </Link>
            </div>
            <div className="container-2">
              <div className="white">
                <b>Партнерам</b>
              </div>
              <p>Продавайте на Wildberries</p>
              <p>Курьерам</p>
              <p>Перевозчикам</p>
              <p>Партнерский пункт выдачи</p>
              <p>Франшизный пункт выдачи</p>
            </div>
            <div className="container-3">
              <div className="white">
                <b>Компания</b>
              </div>
              <p>О нас</p>
              <p>Реквизиты</p>
              <p>Пресс-центр</p>
              <p>Контакты</p>
              <p>Bug Bounty</p>
              <p>WB.Tech</p>
            </div>
            <div className="container-4">
              <div className="white">
                <b>Мы в соцсетях</b>
              </div>
              <p>
                <div id="blok_1">
                  <a href="##">ВКонтакте</a>
                </div>
              </p>
              <p>
                <div id="blok_2">
                  <a href="##">Одноклассники</a>
                </div>
              </p>
              <p>
                <div id="blok_3">
                  <a href="##">YouTube</a>
                </div>
              </p>
              <p>
                <div id="blok_4">
                  <a href="##">Телеграм</a>
                </div>
              </p>
              <p>
                <div id="blok_5">
                  <a href="##">WhatsApp</a>
                </div>
              </p>
            </div>
            <div className="container-5">
              <div className="white">
                <b>Наши проекты</b>
              </div>
              <p>Трудоустройство</p>
              <p>Цифровые товары</p>
              <p>Вопросы и ответы</p>
            </div>
          </div>
          <div className="container-6">
            
              2004-2023 © Wildberries — модный интернет-магазин одежды, обуви и
              аксессуаров.
              <br />
              Все права защищены. Доставка по всей России.
              <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
