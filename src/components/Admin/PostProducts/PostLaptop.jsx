import React from "react";
import { useState } from "react";
import PostNavigation from "../PostNavigation";
import { useDispatch } from "react-redux";
import { postCamera } from "../../../features/CameraSlice";
import "../../../styles/admin.css";
import neo from "../../../assets/neo.png";

const PotsLaptop = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [model, setModel] = useState("");
  const [processorClockSpeed, setProcessorClockSpeed] = useState("");
  const [numberOfProcessorCores, setNumberOfProcessorCores] = useState("");
  const [processor, setProcessor] = useState("");
  const [screenResolution, setScreenResolution] = useState("");
  const [updateFrequency, setUpdateFrequency] = useState("");
  const [warrantyPeriod, setWarrantyPeriod] = useState("");
  const [videoAdapterMemorySize, setVideoAdapterMemorySize] = useState("");
  const [videoAdapter, setVideoAdapter] = useState("");
  const [batteryCapacity, setBatteryCapacity] = useState("");
  const [ram, setRam] = useState("");
  const [driveType, setDriveType] = useState("");
  const [ssdStorageCapacity, setSsdStorageCapacity] = useState("");
  const [housingMaterial, setHousingMaterial] = useState("");
  const dispatch = useDispatch();

  const handlePostLaptop = () => {
    dispatch(
      postCamera({
        name,
        description,
        price,
        discount,
        model,
        processorClockSpeed,
        numberOfProcessorCores,
        processor,
        screenResolution,
        updateFrequency,
        warrantyPeriod,
        videoAdapterMemorySize,
        videoAdapter,
        batteryCapacity,
        ram,
        driveType,
        ssdStorageCapacity,
        housingMaterial,
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
          <div className="post-products__title">Ноутбук</div>
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
              Тактовая частота процессора (Т)
              <input
                onChange={(e) => setProcessorClockSpeed(e.target.value)}
                value={processorClockSpeed}
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
              Число ядер процессора (Т)
              <input
                onChange={(e) => setNumberOfProcessorCores(e.target.value)}
                value={numberOfProcessorCores}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Процессор (Т)
              <input
                onChange={(e) => setProcessor(e.target.value)}
                value={processor}
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
              Частота обновления (Т)
              <input
                onChange={(e) => setUpdateFrequency(e.target.value)}
                value={updateFrequency}
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
            <div className="post-products__item">
              Объем памяти видеоадаптера (Т)
              <input
                onChange={(e) => setVideoAdapterMemorySize(e.target.value)}
                value={videoAdapterMemorySize}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Видеоадаптер (Т)
              <input
                onChange={(e) => setVideoAdapter(e.target.value)}
                value={videoAdapter}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Емкость батареи (Т)
              <input
                onChange={(e) => setBatteryCapacity(e.target.value)}
                value={batteryCapacity}
                type="text"
              />
            </div>
            <div className="post-products__item">
              ОЗУ (Т)
              <input
                onChange={(e) => setRam(e.target.value)}
                value={ram}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Тип оперативной памяти (Т)
              <input
                onChange={(e) => setDriveType(e.target.value)}
                value={driveType}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Емкость твердотельного накопителя (Т)
              <input
                onChange={(e) => setSsdStorageCapacity(e.target.value)}
                value={ssdStorageCapacity}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Материал корпуса (Т)
              <input
                onChange={(e) => setHousingMaterial(e.target.value)}
                value={housingMaterial}
                type="text"
              />
            </div>
            <button className="post-products__btn" onClick={handlePostLaptop}>
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

export default PotsLaptop;
