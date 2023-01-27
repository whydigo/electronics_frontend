import React from 'react';

const CartItem = ({name,price,discount,image,model}) => {
	return (
		<div className='container_islam'>
			<div className='basket_product_parent'>
				<div className='basket_product_image'><img className="basket_product_image_one" src={`http://localhost:4000/${image}`} alt="" /></div>
				<div className='basket_product_name'>{name}/{model}</div>
				<div className='basket_product_inkdec'>
					<div className='decrem'>-</div>
				<div className='basket_product_amount'>1</div>
				   <div className='increm'>+</div>
				</div>
				<div className='basket_product_price_container'>
					{!discount ? <div className='basket_product_price'>{price} ₽</div> :
					<div>
					 <div className='basket_product_discount'>{Math.round(price - (price/100 * discount))} ₽</div>
					 <div className='basket_product_price strice'><strike>{price} ₽</strike></div>
					 </div>
					}
				</div>
			</div>
		</div>
	);
};

export default CartItem;