import React from 'react';
import "../../styles/basket.css";
import close from "../Services/icons/close.png"
import CartItems from './CartItems';

const Basket = ({setOpened}) => {
	const handleCartClose = () =>{
		setOpened(false)
	}
	return (
		<div className='bas'>
		<div className='basket_close'><img className='close' src={close} alt="" onClick={handleCartClose}/></div>
		<div className='basket_items'><CartItems /></div>
		</div>
	);
};

export default Basket;