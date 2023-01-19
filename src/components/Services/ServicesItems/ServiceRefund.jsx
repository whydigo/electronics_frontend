//страница возврата денежных средств
import React from 'react';
import { useState } from 'react';
import '../../../styles/ServiceReturn.css'
import down from "../icons/down.png"
import app from "../icons/app.png"

const ServiceRefund = () => {
	const [show, setShow] = useState(false)
	const [loan, setLoan] = useState(false)
   const [balance, setBalance] = useState(false)

	const HandleCashlessPayments = () =>{
		setShow(true)
		setLoan(false)
		setBalance(false)
	}
	const handleCloseShow = () =>{
		setShow(false)
	}

	const handleLoan = () =>{
		setLoan(true)
		setShow(false)
		setBalance(false)
	}
	 const handleLoanClose =()=>{
		setLoan(false)
	 }
	const handleBalance = () =>{
		setBalance(true)
		setShow(false)
		setLoan(false)
	}
	const handleBalanceClose = ()=>{
		setBalance(false)
	}


	return (
		<div>
			<div className='parent'>
				<h4>Возврат денежных средств</h4>
				<div className='refund'>Возврат денежных средств Покупателю Вайлдберриз осуществляется следующими способами:</div>
				<div className='container_cashless' >
					<div className='oplata'>
				 <div className='cashless' onClick={HandleCashlessPayments}>Безналичный расчет</div>
				 {show ?  <div className='app' onClick={handleCloseShow}><img className='app_img' src={app} alt="app"/></div>  : <div className='down'><img className='down_img' onClick={HandleCashlessPayments} src={down}  alt="down"/></div>}
				   </div>
					<div>
				  {show && <div className='aaa'>При отказе Покупателя от товара, который был оплачен онлайн банковской картой, денежные средства за него будут автоматически возвращены на банковскую карту, с которой указанный товар был оплачен.
				  <p>После этого срок зачисления денежных средств на Ваш банковский счет будет зависеть от условий банка, в котором он открыт.</p>
				  <h6>Оформление возврата денежных средств на реквизиты.</h6>
				  <p>Для оформления возврата денежных средств на реквизиты необходимо направить обращение в раздел ЛК «Обращения» и добавить реквизиты своего расчётного счета в раздел «Личные данные» «Реквизиты</p>
				  <p>Перечисление денежных средств может занять до 10 календарных дней.</p></div>}
				  </div>
				</div>
				<div className='container_cashless'>
					<div className='oplata'>
				<div className='cashless' onClick={handleLoan}>Кредит или рассрочка</div>
				{!loan ? <div className='down'><img className='down_img' onClick={handleLoan} src={down} alt="down"/></div> : <div className='app' onClick={handleLoanClose}><img className='app_img' src={app} alt="app"/></div>}
				</div>
				{loan && <div><p>При отказе Покупателя от товара надлежащего качества, приобретенного посредством выбора оплаты в рассрочку или в кредит с привлечением средств кредитной организации (Банка), возврату подлежит сумма в размере стоимости товара, за исключением расходов Вайлдберриз на доставку от Покупателя возвращенного товара.</p> 
				<p>Возврат денежных средств производится на кредитный банковский счет Покупателя. Выплата процентов и иных платежей по договору кредита, заключенного Покупателем с кредитной организацией (Банком) указанным способом, Покупателю не компенсируются. Все обязательства перед кредитной организацией покупатель несёт самостоятельно.</p></div>}
				</div>
				<div className='container_cashless'>
					<div className='oplata'>
				<div className='cashless' onClick={handleBalance}>Баланс</div>
				{!balance ? <div className='down'><img className='down_img' onClick={handleBalance} src={down} alt="down"/></div> : <div className='app' onClick={handleBalanceClose}><img className='app_img' src={app} alt="app"/></div>}
				   </div>
					{balance && <div>Возврат денежных средств за возвращенный товар осуществляется на Баланс ЛК для распоряжения покупателем по своему усмотрению. Покупатель вправе оплатить денежными средствами последующие покупки или осуществить их перевод на реквизиты своего расчётного счета. Для перевода на реквизиты своего расчётного счета, покупателю необходимо заполнить форму в разделе «Профиль» «Личные данные» или в разделе «Баланс».</div>}
				</div>
			</div>
		</div>
	);
};

export default ServiceRefund;