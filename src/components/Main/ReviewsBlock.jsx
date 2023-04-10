import React, { useEffect } from "react";
import s from "../../styles/ReviewsBlock.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../features/ReviewSlice";
import { Link } from "react-router-dom";

const ReviewsBlock = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviewReducer.reviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <div className={s.reviews__container}>
      {reviews.slice(0, 3).map((i) => {
        console.log(i.product.image);
        return (
          <div className={s.reviews__item} key={i._id}>
            <div className={s.left}>
              <img
                src={`http://localhost:4000/${i.product.image}`}
                alt="wtf"
                className={s.img}
              />
              <div className={s.info}>
                <div className={s.name}>{i.product.name}</div>
                <div className={s.price}>{i.product.price}Р</div>
              </div>
            </div>
            <div className={s.right}>
              <div className={s.profile}>Пользователь П.</div>
              <div className={s.description}>{i.text}</div>
              <div className={s.next}>
                <Link to={`/product/${i.product._id}`} className={s.nextItem}>Перейти к продукту</Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewsBlock;
