import React from "react";
import "../../../styles/saleRule.css";
import Service from "../Service";

const ServiceSaleRule = () => {
  return (
    <>
      <Service />
      <div className="service__container">
          <h1 className="serviceSaleRule_title">
            Правила продажи товаров в интернет-магазине Electronics
          </h1>
          <ol className="serviceSaleRule_list">
            <li>
              <span>1</span>
              Товары, размещенные на сайте, предназначены для личного
              потребления.
            </li>
            <li>
              <span>2</span>
              Закон «<u>О защите прав потребителей</u>».
            </li>
            <li>
              <span>3</span>
              Гражданский кодекс Российской Федерации (<u>Часть вторая</u>),
              подробная информация указана в статье 497 Гражданского кодекса
              Российской Федерации.
            </li>
            <li>
              <span>4</span>
              Постановление Правительства Российской Федерации от 31.12.2020 №
              2463 «
              <u>
                Об утверждении Правил продажи товаров по договору розничной
                купли-продажи, перечня товаров длительного пользования, на
                которые не распространяется требование потребителя о
                безвозмездном предоставлении ему товара, обладающего этими же
                основными потребительскими свойствами, на период ремонта или
                замены такого товара и перечня непродовольственных товаров
                надлежащего качества, не подлежащих обмену, а также о внесении
                изменений в некоторые акты Правительства Российской Федерации
              </u>
              ».
            </li>
            <li>
              <span>5</span>
              Заказ формируется через интернет-сайт ООО «Электроникс»
              (www.electronics.ru).
            </li>
            <li>
              <span>6</span>
              Стоимость доставки составляет от 0 до 700 рублей. Точную
              информацию о стоимости доставки в Ваш регион Вы можете узнать при
              оформлении заказа.
            </li>
            <li>
              <span>7</span>
              Правила и условия эффективного и безопасного использования Товаров
              указаны на ярлыках или в инструкции по эксплуатации Товара.
            </li>
            <li>
              <span>8</span>
              При доставке предоплаченного заказа, заказ выдаётся исключительно
              в случае предъявления Покупателем кода для получения заказа,
              отраженного в личном кабинете Покупателя, или QR-кода из
              мобильного приложения Покупателя. При непредъявлении Покупателем
              указанного кода или QR-кода выдача заказа Покупателю не
              осуществляется.
            </li>
          </ol>
        </div>
    </>
  );
};

export default ServiceSaleRule;
