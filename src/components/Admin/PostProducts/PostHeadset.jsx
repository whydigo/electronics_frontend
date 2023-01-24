import React from "react";
import { useState } from "react";
import PostNavigation from "../PostNavigation";
import { useDispatch } from "react-redux";
import "../../../styles/admin.css";
import neo from "../../../assets/neo.png";
import { postHeadset } from "../../../features/HeadsetSlice";

const PotsHeadset = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [model, setModel] = useState("");
  const [compatibility, setCompatibility] = useState("");
  const [connectType, setConnectType] = useState("");
  const [connector, setConnector] = useState("");
  const [nutrition, setNutrition] = useState("");
  const dispatch = useDispatch();

  const handlePostHeadset = () => {
    dispatch(
      postHeadset({
        name,
        description,
        price,
        discount,
        model,
        compatibility,
        connectType,
        connector,
        nutrition,
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
            <div className="post-products__title">Наушники</div>
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
              Совместимость (Т)
              <input
                onChange={(e) => setCompatibility(e.target.value)}
                value={compatibility}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Тип соединения (Т)
              <input
                onChange={(e) => setConnectType(e.target.value)}
                value={connectType}
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
            <div className="post-products__item">
              Питание (Т)
              <input
                onChange={(e) => setNutrition(e.target.value)}
                value={nutrition}
                type="text"
              />
            </div>
            <button className="post-products__btn" onClick={handlePostHeadset}>
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

export default PotsHeadset;
