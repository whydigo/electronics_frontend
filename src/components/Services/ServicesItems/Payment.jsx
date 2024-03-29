import React from 'react';
import '../../../styles/payment.css';
import Service from '../Service';

const Payment = () => {
    return (
        <>
        <Service />      
          <div className='service__container'>
            <div className='m-payment'>
                <h1 className='m-zagolovok'>Способы оплаты</h1>
                <details className='m-details'>
                    <summary className='m-summary'>Банковская карта</summary>
                    <p className='m-p'><b>Оплата банковской картой, через Интернет, возможна через системы электронных платежей.</b></p>
                    <p className='m-p'>Номер карты (PAN) должен иметь не менее 15 и не более 19 символов.</p>
                    <p className='m-p'><b>Мы принимаем платежи с сайта по следующим банковским картам</b></p>
                </details>
                <details className='m-details'>
                    <summary className='m-summary'>Оплата через СБП (Систему быстрых платежей)</summary>
                    <p className='m-p'>Система быстрых платежей (далее "СБП") - сервис платежной системы Банка России, позволяющий физическим лицам производить оплату за товар/услуги с помощью любого банка-участника СБП.</p>
                    <p className='m-p'>Список банков-участников опубликован на официальном сайте https://sbp.nspk.ru/participants/</p>
                    <p className='m-p'>Безопасность переводов обеспечивается на стороне всех банков-участников СБП: банков, Банка России и НСПК с использованием современных систем защиты. СБП соответствует всем стандартам информационной безопасности.</p>
                </details>
                <details className='m-details'>
                    <summary className='m-summary'>Оплата в кредит или рассрочку</summary>
                    <ul>
                        <li className='m-li'>Выберите понравившиеся товары и положите их в корзину</li>
                        <li className='m-li'>Выберите способ оплаты «Рассрочка» или «Кредит»</li>
                        <li className='m-li'>Заполните анкету и дождитесь решения банка</li>
                        <li className='m-li'>Подпишите кредитный договор по SMS и получите ваш заказ</li>
                    </ul>
                    <p className='m-p'>Кредитные условия индивидуальны для каждого покупателя. С условиями можно будет ознакомиться в момент оформления кредитного договора.</p>
                    <p className='m-p'>Кредит доступен на все товары при стоимости корзины от 5000 рублей</p>
                    <p className='m-p'>Для оформления кредита необходимо:</p>
                    <ul>
                        <li className='m-li'>Быть гражданином РФ</li>
                        <li className='m-li'>Иметь постоянную регистрацию</li>
                        <li className='m-li'>Быть старше 18 лет</li>
                        <li className='m-li'>Иметь постоянный доход</li>
                    </ul>
                </details>
                <details className='m-details'>
                    <summary className='m-summary'>Оплата балансом</summary>
                    <p className='m-p'>Возврат денежных средств за возвращенный товар осуществляется на Баланс ЛК для распоряжения покупателем по своему усмотрению. Покупатель вправе оплатить денежными средствами последующие покупки или осуществить их перевод на реквизиты своего расчётного счета, а также осуществить перевод через СБП. Для осуществления возврата покупателю необходимо заполнить форму в разделе «Баланс».</p>
                    <p className='m-p'>Баланс ЛК является приоритетным способом оплаты заказов. Вне зависимости от выбранного способа оплаты вся стоимость товара будет списана с Баланса ЛК. Если средств на Балансе ЛК недостаточно для полной оплаты заказанных товаров, оставшаяся часть стоимость будет списана с Банковской карты покупателя.</p>
                </details>
            </div>
        </div>
    </>
    );
};

export default Payment;
