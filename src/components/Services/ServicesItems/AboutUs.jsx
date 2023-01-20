import React from 'react';
import box from "../../../assets/wildber.png"
import '../../../styles/aboutUs.css'
import copter from "../../../components/Services/icons/cart1.png";
import procent from "../../../components/Services/icons/procent.png";
import corobca from "../../../components/Services/icons/corobca.png";
import prod from "../../../components/Services/icons/prod.png";
import chechnya from "../../../components/Services/icons/chechnya.png";
import saudiya from "../../../components/Services/icons/saudiya.png";
import turkey from "../../../components/Services/icons/turkey.png";
import emirates from "../../../components/Services/icons/emirates.png";
import palestine from "../../../components/Services/icons/palestine.png";
import katar from "../../../components/Services/icons/katar.png";
import irack from "../../../components/Services/icons/irack.png";
import Service from '../ServiceDouble';



const AboutUs = () => {
	return (
		<>
		<Service />
		<div className='service__container'>
		<div className='start-block__intro'>
			<img className='wildber' src={box} alt="wildber"/>
			<div className='welcome'>Добро пожаловать <br/> на Wildberries</div>
			<div className='welcome_two'>18 лет мы стремимся сделать для Вас <br/> шопинг удобным и доступным</div>
		</div>
		<div className='indicators'>
			<div ><span className='indicators__item'>600 тыс+ </span><br/> <span className='indicators__text'>брендов на сайте</span></div>	
			<div ><span className='indicators__item'>7 млн+ </span><br/> <span className='indicators__text'>заказов в день</span></div>	
			<div ><span className='indicators__item'>2 млн кв. м</span><br/> <span className='indicators__text'>складских площадей</span></div>	
			<div ><span className='indicators__item'>350 млн+ </span><br/> <span className='indicators__text'>товаров на складе</span></div>	
		</div>
		<div className='features'>
			<div className='features__section-header section-header'>Наши преимущества</div>
			<div className='features__list'>
				<div className='features__item_delivery'>
					<div className='features__top-wrapper'>
						<div className='features__header'>Быстрая <br/> и бесплатная<br/>доставка</div>
						<img className='features_img' src={copter} alt="copter"/>
					</div>
					<div className='features__text'>Более 80%</div>
					<div className='features__text_down'>доставляется <br/> на следующий день</div>
				</div>
				<div className='features__item_delivery'>
					<div className='features__top-wrapper'>
						<div className='features__header'>Скидки и бонусы</div>
						<img className='features_img' src={procent} alt="procent"/>
					</div>
					<div className='features__text'>до 90%</div>
					<div className='features__text_down'>скидка постоянным <br/> покупателям</div>
				</div>
				<div className='features__item_delivery'>
					<div className='features__top-wrapper'>
						<div className='features__header'>Быстрая <br/> и бесплатная<br/>доставка</div>
						<img className='features_img' src={corobca} alt="corobca"/>
					</div>
					<div className='features__text'>28 тыс+</div>
					<div className='features__text_down'>пунктов самовывоза</div>
				</div>
				<div className='features__item_delivery'>
					<div className='features__top-wrapper'>
						<div className='features__header'>Скидки и бонусы</div>
						<img className='features_img' src={prod} alt="procent"/>
					</div>
					<div className='features__text'>10 млн+</div>
					<div className='features__text_down'>товаров мы ежедневно <br/> отправляем покупателям</div>
				</div>
			</div>
		</div>
		<div className='section-header'>Наша география</div>
		<div className='country'>
			<div className='country_parent'>
			<div className='republic chechnya'><img src={chechnya} alt="wildber"/></div>
			<div className='country_name'>Чечня</div>
			</div>
			<div className='country_parent'>
			<div className='republic chechnya'><img src={saudiya} alt="wildber"/></div>
			<div className='country_name'>Саудовская <br/> аравия</div>
			</div>
			<div className='country_parent'>
			<div className='republic chechnya'><img src={turkey} alt="wildber"/></div>
			<div className='country_name'>Турция</div>
			</div>
			<div className='country_parent'>
			<div className='republic chechnya'><img src={emirates} alt="wildber"/></div>
			<div className='country_name'>ОАЭ</div>
			</div>
			<div className='country_parent'>
			<div className='republic chechnya'><img src={palestine} alt="wildber"/></div>
			<div className='country_name'>Палестина</div>
			</div>
			<div className='country_parent'>
			<div className='republic chechnya'><img src={katar} alt="wildber"/></div>
			<div className='country_name'>Катар</div>
			</div>
			<div className='country_parent'>
			<div className='republic chechnya'><img src={irack} alt="wildber"/></div>
			<div className='country_name'>Ирак</div>
			</div>
		</div>
		</div>
		</>
	);
};

export default AboutUs;