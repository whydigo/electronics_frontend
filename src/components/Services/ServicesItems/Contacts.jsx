import React from "react";
import "../../../styles/contacts.css";
import Service from "../ServiceDouble";

const Contacts = () => {
  return (
    <>
      <Service />
      <div className="service__container">
        <div className="wrapper">
          <div className="c-main">
            <h1 className="c-zagolovok">Контакты</h1>
            <div>
              <h1>Официальные запросы</h1>
              <p>Для отправки или получения деловой документации</p>
            </div>
            <div>
              <h1>Правообладателям</h1>
              <p>
                Претензии по нарушению прав на интеллектуальную собственность
              </p>
            </div>
            <div>
              <h1>Партнерам</h1>
              <p>Узнайте подробные условия для сотрудничества</p>
            </div>
            <div>
              <h1>Пресс-служба</h1>
              <p>Для запросов СМИ и на участие в мероприятиях</p>
            </div>
            <div>
              <h1>Юридический адреc</h1>
              <p>
                142181, Московская область, г. Подольск, деревня Коледино,
                Территория Индустриальный парк Коледино, д. 6, стр. 1
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
