import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import {
  deleteReview,
  fetchReviews,
  postReview,
} from "../../features/ReviewSlice";
import s from "../../styles/Review.module.css";
import Modal from "../Modal/Modal";
import { fetchUser } from "../../features/applicationSlice";
import preloader from "../../assets/loading.gif";

const Review = ({ id }) => {
  const [modalActive, setModalActive] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.reviewReducer.loading);
  const ide = useSelector((state) => state.application.id);
  const users = useSelector((state) => state.application.users);
  const filt = users.filter((i) => i._id === ide);
  const isAdmin = filt.map((i) => {
    return i.admin;
  });

  const reviews = useSelector((state) => state.reviewReducer.reviews);
  const filteredRev = reviews.filter((i) => i.product._id === id);
  // const userRevs = filteredRev.filter((i) => {
  //   return i.user;
  // });
  // const isUserRevs = userRevs.map((i) => {
  //   return i.user === ide ? true : false;
  // });
  // console.log(isUserRevs.map(i => {return i}));

  const handleDelete = () => {};

  const handlePost = (e) => {
    e.preventDefault();
    dispatch(postReview({ text, product: id }));
    setText("");
    setModalActive(false);
  };

  useEffect(() => {
    dispatch(fetchReviews());
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="preloader">
        <img className="preloader_item" src={preloader} alt="preloader" />
      </div>
    );
  }

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
          {filteredRev.reverse().map((i) => {
            return (
              <SwiperSlide key={i._id} className={s.swiperReviews}>
                <div className={s.review}>
                  <div className={s.profile}>Пользователь</div>
                  <div className={s.text}>{i.text}</div>
                  {isAdmin[0] ? (
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
                  ) : null}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={s.modalTitle}>Ваша критика очень важна для нас</div>
        <form className={s.modalForm} onSubmit={handlePost}>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            className={s.modalInput}
            type="text"
          />
          <button className={s.modalBtn}>Готово</button>
        </form>
      </Modal>
    </div>
  );
};

export default Review;
