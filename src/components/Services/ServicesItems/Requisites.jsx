import React from "react";
import "../../../styles/requisites.css";
import Service from "../ServiceDouble";

const Requisites = () => {
  return (
    <>
      <Service />
      <div className="service__container">
        <div className="block">
          <h2>
            <p className="block_1">Реквизиты ООО «Электроникс»</p>
          </h2>
          <div className="block-11">
            <div className="block-1">
              <p>Полное наименование</p>
              <p>Генеральный директор</p>
              <p>Наименование банка</p>
              <p>Корреспондентский счет</p>
              <p>БИК</p>
              <p>Расчетный счет</p>
              <p>ИНН</p>
              <p>КПП</p>
              <p>ОГРН</p>
              <p>Юридический адреc</p>
            </div>
            <div className="block-2">
              <p>Общество с ограниченной ответственностью «Вайлдберриз»</p>
              <p>Цугаев Арби</p>
              <p>в Банк ВТБ (ПАО), г. Москва</p>
              <p>30101810700000000187</p>
              <p>044525187</p>
              <p>40702810500110000939</p>
              <p>7721546864</p>
              <p>507401001</p>
              <p>1067746062449</p>
              <p>
                366002 Чеченская Респ. Грозный ул. Геннадия Н. Трошева, 7,
                             </p>
            </div>
          </div>
          <div className="block-3">
            <p>
              Обращаем внимание, что данные реквизиты не предназначены для
              оплаты заказов
              <br />
              Оплата заказа производится только через Личный кабинет
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requisites;
