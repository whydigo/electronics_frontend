import React from "react";
import s from "../../styles/ReviewsBlock.module.css";
import pic from "../../assets/laptop.jpg";

const ReviewsBlock = () => {
  return (
    <div className={s.reviews__container}>
      <div className={s.reviews__item}>
        <div className={s.left}>
          <img src={pic} alt="wtf" className={s.img}></img>
          <div className={s.info}>
            <div className={s.name}>Умные аппле вотч часы</div>
            <div className={s.price}>10000r 15000r</div>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.profile}>Пользователь П.</div>
          <div className={s.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            eaque ea esse. Dicta, amet. Id ipsa perspiciatis alias debitis,
            eligendi iste minima a molestiae! Ex ratione provident fugiat optio
            voluptatibus? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Quidem tenetur tempore vitae ipsum architecto nemo reiciendis
            mollitia, ullam reprehenderit sunt ipsa assumenda dolor beatae quasi
            natus voluptatum quo rem voluptas?
          </div>
          <div className={s.next}>
            <a className={s.nextItem}>Перейти к продукту</a>
          </div>
        </div>
      </div>
      <div className={s.reviews__item}>
        <div className={s.left}>
          <img src={pic} alt="wtf" className={s.img}></img>
          <div className={s.info}>
            <div className={s.name}>Умные аппле вотч часы</div>
            <div className={s.price}>10000r 15000r</div>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.profile}>Пользователь П.</div>
          <div className={s.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            eaque ea esse. Dicta, amet. Id ipsa perspiciatis alias debitis,
            eligendi iste minima a molestiae! Ex ratione provident fugiat optio
            voluptatibus? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Quidem tenetur tempore vitae ipsum architecto nemo reiciendis
            mollitia, ullam reprehenderit sunt ipsa assumenda dolor beatae quasi
            natus voluptatum quo rem voluptas?
          </div>
          <div className={s.next}>
            <a className={s.nextItem}>Перейти к продукту</a>
          </div>
        </div>
      </div>
      <div className={s.reviews__item}>
        <div className={s.left}>
          <img src={pic} alt="wtf" className={s.img}></img>
          <div className={s.info}>
            <div className={s.name}>Умные аппле вотч часы</div>
            <div className={s.price}>10000r 15000r</div>
          </div>
        </div>
        <div className={s.right}>
          <div className={s.profile}>Пользователь П.</div>
          <div className={s.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            eaque ea esse. Dicta, amet. Id ipsa perspiciatis alias debitis,
            eligendi iste minima a molestiae! Ex ratione provident fugiat optio
            voluptatibus? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Quidem tenetur tempore vitae ipsum architecto nemo reiciendis
            mollitia, ullam reprehenderit sunt ipsa assumenda dolor beatae quasi
            natus voluptatum quo rem voluptas?
          </div>
          <div className={s.next}>
            <a className={s.nextItem}>Перейти к продукту</a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ReviewsBlock;
