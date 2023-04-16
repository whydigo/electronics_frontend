import React, { useEffect } from "react";
import s from "../../styles/ReviewsBlock.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../features/ReviewSlice";
import { Link } from "react-router-dom";
import preloader from "../../assets/loading.gif";

const ReviewsBlock = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviewReducer.reviews);
  const reviewsRev = [...reviews];
  const loading = useSelector((state) => state.productReducer.loading);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <div className={s.reviewsHeader}>Последние отзывы покупателей</div>
      {loading ? <div className="preloader">
        <img className="preloader_item" src={preloader} alt="preloader" />
      </div> : null}
      <div className={s.reviews__container}>
        {reviewsRev
          .reverse()
          .slice(0, 3)
          .map((i) => {
            return (
              <div className={s.reviews__item} key={i._id}>
                <div className={s.left}>
                  <div className={s.imgContainer}>
                    <img
                      src={`http://localhost:4000/${i.product.image}`}
                      alt="wtf"
                      className={s.img}
                    />
                  </div>
                  <div className={s.info}>
                    <div className={s.name}>{i.product.name}</div>
                    <div className={s.price}>
                      {i.product.price - i.product.discount}Р{" "}
                      {i.product.discount ? (
                        <div className={s.discount}>{i.product.price}Р</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className={s.right}>
                  <div className={s.profile}>Пользователь П.</div>
                  <Link
                    to={`/product/${i.product._id}`}
                    className={s.reviewLink}
                  >
                    {`Отзыв на ${i.product.name}`}
                  </Link>
                  <div className={s.description}>{i.text}</div>
                  <div className={s.next}>
                    <Link
                      to={`/product/${i.product._id}`}
                      className={s.nextItem}
                    >
                      Перейти к продукту
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ReviewsBlock;
