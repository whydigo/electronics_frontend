import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { fetchReviews } from "../../../features/ReviewSlice";
import s from "../../../styles/Review.module.css";

const Review = ({ id, name, image }) => {
  const reviews = useSelector((state) => state.reviewReducer.reviews);
  const filteredRev = reviews.filter((i) => i.product === id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);

  return (
    <div className={s.reviews__container}>
      <div className={s.title}>Отзывы</div>
      <div className={s.reviews}>
        <Swiper
          className={s.swiper}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
        >
          {filteredRev.map((i) => {
            return (
              <SwiperSlide>
                <div className={s.review}>
                  <div className={s.profile}>Хабиб Орловский</div>
                  <div className={s.text}>{i.text}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
