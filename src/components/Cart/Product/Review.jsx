import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { fetchReviews } from "../../../features/ReviewSlice";
import s from "../../../styles/Review.module.css";
import Modal from "../../Modal/Modal";

const Review = ({ id, name, image }) => {
  const [modalActive, setModalActive] = useState(false);
  const reviews = useSelector((state) => state.reviewReducer.reviews);
  const filteredRev = reviews.filter((i) => i.product === id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReviews());
  }, [dispatch]);
  return (
    <div className={s.reviews__container}>
      <div className={s.reviews__header}>
        <div className={s.title}>
          {filteredRev.length !== 0 ? "Отзывы" : "Отзывов нет"}
        </div>
        <div className={s.add} onClick={() => setModalActive(true)}>
          Оставить отзыв
        </div>
      </div>
      <div className={s.reviews}>
        <Swiper
          className={s.swiper}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
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
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={s.modalTitle}>Ваша критика очень важна для нас</div>
        <form className={s.modalForm} onClick={(e) => e.preventDefault()}>
          <input className={s.modalInput} type="text" />
          <button className={s.modalBtn}>Готово</button>
        </form>
      </Modal>
    </div>
  );
};

export default Review;
