import React from "react";
import s from "../../../styles/Banners.module.css";
import phone from "../../../assets/phone.jpg";

const SmartphoneBanner = () => {
  return (
    <div className={s.container}>
      <div className={s.left}>
        <div className={s.title}>Сестра одумайся!</div>
        <div className={s.info}>
          <div className={s.name}>Айфон Фон 13S</div>
          <div className={s.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
            voluptatibus sapiente asperiores quia repellat doloremque quo totam
            quibusdam at accusantium alias, quae similique inventore quod
            architecto, ab assumenda voluptas id.
          </div>
          <div className={s.price}>
            19999 P <span className={s.discount}>25000 P</span>
          </div>
        </div>
        <div className={s.but}>
          <button className={s.next}>Перейти к товару</button>
        </div>
      </div>
      <div className={s.right}>
        <img className={s.pic} src={phone} alt="phone" />
      </div>
    </div>
  );
};

export default SmartphoneBanner;
