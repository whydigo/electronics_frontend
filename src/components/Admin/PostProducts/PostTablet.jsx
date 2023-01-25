import React from "react";
import { useState } from "react";
import PostNavigation from "../PostNavigation";
import { useDispatch } from "react-redux";
import { postCamera } from "../../../features/CameraSlice";
import "../../../styles/admin.css";
import neo from "../../../assets/neo.png";

const PostTablet = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [model, setModel] = useState("");
  const [cpu, setCpu] = useState("");
  const [numberOfProcessorCores, setNumberOfProcessorCores] = useState("");
  const [numberOfSimCards, setNumberOfSimCards] = useState("");
  const [screenResolution, setScreenResolution] = useState("");
  const [ram, setRam] = useState("");
  const [builtInMemory, setBuiltInMemory] = useState("");
  const [batteryCapacity, setBatteryCapacity] = useState("");
  const [mainCamera, setMainCamera] = useState("");
  const [warrantyPeriod, setWarrantyPeriod] = useState("");
  const dispatch = useDispatch();

  const handlePostTablet = () => {
    dispatch(
      postCamera({
        name,
        description,
        price,
        discount,
        model,
        cpu,
        numberOfProcessorCores,
        numberOfSimCards,
        screenResolution,
        ram,
        builtInMemory,
        batteryCapacity,
        mainCamera,
        warrantyPeriod,
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
            <div className="post-products__title">Планшет</div>
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
              Процессор (Т)
              <input
                onChange={(e) => setCpu(e.target.value)}
                value={cpu}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Емкость аккумулятора (Т)
              <input
                onChange={(e) => setBatteryCapacity(e.target.value)}
                value={batteryCapacity}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Количество ядер процессора (Т)
              <input
                onChange={(e) => setNumberOfProcessorCores(e.target.value)}
                value={numberOfProcessorCores}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Количество SIM карт (Т)
              <input
                onChange={(e) => setNumberOfSimCards(e.target.value)}
                value={numberOfSimCards}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Разрешение экрана (Т)
              <input
                onChange={(e) => setScreenResolution(e.target.value)}
                value={screenResolution}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Объем оперативной памяти (Т)
              <input
                onChange={(e) => setRam(e.target.value)}
                value={ram}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Объем встроенной памяти (Т)
              <input
                onChange={(e) => setBuiltInMemory(e.target.value)}
                value={builtInMemory}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Основная камера (Т)
              <input
                onChange={(e) => setMainCamera(e.target.value)}
                value={mainCamera}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Гарантийный срок (Т)
              <input
                onChange={(e) => setWarrantyPeriod(e.target.value)}
                value={warrantyPeriod}
                type="text"
              />
            </div>
            <button className="post-products__btn" onClick={handlePostTablet}>
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

export default PostTablet;
