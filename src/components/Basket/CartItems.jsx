import React from 'react';

const CartItems = () => {
	return (
		<div className='cardsName'>
			<div className='cardsName_one  productNumber'>№</div>
			<div className='cardsName_one cardsName_item'>наименование</div>
			<div className='cardsName_one cardsName_item'>Стоимость</div>
			<div className='cardsName_one cardsName_item'>Количество</div>
		</div>
	);
};

export default CartItems;