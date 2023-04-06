import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import {
  deleteReview,
  fetchReviews,
  postReview,
} from "../../../features/ReviewSlice";
import s from "../../../styles/Review.module.css";
import Modal from "../../Modal/Modal";

const Review = ({ id, name, image }) => {
  const [modalActive, setModalActive] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const reviews = useSelector((state) => state.reviewReducer.reviews);
  const filteredRev = reviews.filter((i) => i.product === id);
  const handleDelete = () => {
  };

  const handlePost = (e) => {
    e.preventDefault();
    dispatch(postReview({ text, product: id }));
    setText("");
  };

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
          slidesPerView={
            filteredRev.length === 1 ? 1 : filteredRev.length === 2 ? 2 : 3
          }
          loop={filteredRev.length >= 3 ? true : false}
        >
          {filteredRev.map((i) => {
            return (
              <SwiperSlide key={i._id} className={s.swiperReviews}>
                <div className={s.review}>
                  <div className={s.profile}>Пользователь</div>
                  <div className={s.text}>{i.text}</div>
                  <div className={s.delete}>
                    <div
                      onClick={() =>
                        handleDelete(dispatch(deleteReview(i._id)))
                      }
                      className={s.dlt}
                    >
                      Удалить
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={s.modalTitle}>Ваша критика очень важна для нас</div>
        <form className={s.modalForm}>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            className={s.modalInput}
            type="text"
          />
          <button onClick={(e) => handlePost(e)} className={s.modalBtn}>
            Готово
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Review;
