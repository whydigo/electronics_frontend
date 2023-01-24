import React from "react";
import { useState } from "react";
import PostNavigation from "../PostNavigation";
import { useDispatch } from "react-redux";
import "../../../styles/admin.css";
import neo from "../../../assets/neo.png";
import { postTelevision } from "../../../features/TelevisionSlice";

const PostTelevision = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [model, setModel] = useState("");
  const [connection, setConnection] = useState("");
  const [screen, setScreen] = useState("");
  const [connector, setConnector] = useState("");
  const dispatch = useDispatch();

  const handlePostTelevision = () => {
    dispatch(
      postTelevision({
        name,
        description,
        price,
        discount,
        model,
        connection,
        screen,
        connector,
      })
    );
  };

  return (
    <div className="post-products__container">
      <div className="post-products__header">
        <PostNavigation />
      </div>
      <div className="post-products__main">
        <div className="post-products__left">
          <div className="post-products__title">Телевизор</div>
          <div className="post-products__inputs">
            <div className="post-products__item">
              Название (Т)
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Описание (Т)
              <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Цена (Ч)
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Скидка (Ч)
              <input
                onChange={(e) => setDiscount(e.target.value)}
                value={discount}
                type="text"
              />
            </div>
            <br />
            <h4>Характеристики</h4>
            <div className="post-products__item">
              Модель (Т)
              <input
                onChange={(e) => setModel(e.target.value)}
                value={model}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Конекторы (Т)
              <input
                onChange={(e) => setConnection(e.target.value)}
                value={connection}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Экран (Т)
              <input
                onChange={(e) => setScreen(e.target.value)}
                value={screen}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Разъем (Т)
              <input
                onChange={(e) => setConnector(e.target.value)}
                value={connector}
                type="text"
              />
            </div>
            <button
              className="post-products__btn"
              onClick={handlePostTelevision}
            >
              Добавить
            </button>
          </div>
        </div>
        <div className="post-products__right">
          <div className="neo__title">
            <h1>Ты избранный </h1>
          </div>
          <div className="neo__body">
            <img className="neo__image" src={neo} alt="neo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostTelevision;
