import React from 'react';
import "../../styles/discount.css";
import discount from "../../assets/discount_1.webp"
import discount_2 from "../../assets/discount_2.webp"
import discount_3 from "../../assets/discount_3.webp"
import discount_4 from "../../assets/discount_4.webp"
import discount_5 from "../../assets/discount_5.webp"
import discount_6 from "../../assets/discount_6.webp"
import discount_7 from "../../assets/discount_7.webp"
import discount_8 from "../../assets/discount_8.webp"

const DiscountBlock = () => {
    return (
        <div className='discount__container'>
            <div className="discount__item"><img className='discount__image' src={discount} alt="discount" /></div>
            <div className="discount__item"><img className='discount__image' src={discount_2} alt="discount" /></div>
            <div className="discount__item"><img className='discount__image' src={discount_3} alt="discount" /></div>
            <div className="discount__item"><img className='discount__image' src={discount_4} alt="discount" /></div>
            <div className="discount__item"><img className='discount__image' src={discount_5} alt="discount" /></div>
            <div className="discount__item"><img className='discount__image' src={discount_6} alt="discount" /></div>
            <div className="discount__item"><img className='discount__image' src={discount_7} alt="discount" /></div>
            <div className="discount__item"><img className='discount__image' src={discount_8} alt="discount" /></div>
        </div>
    );
};

export default DiscountBlock;