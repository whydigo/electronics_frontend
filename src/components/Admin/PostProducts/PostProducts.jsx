import React, { useEffect, useState } from "react";
import PostNavigation from "../PostNavigation";
import { useDispatch, useSelector } from "react-redux";
import { postProduct } from "../../../features/ProductSlice";
import { fetchCategories } from "../../../features/CategoriesSlice";
import { useParams } from "react-router-dom";
import "../../../styles/admin.css";

const PostProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer.categories);
  const filteredCategories = categories.filter((i) => i._id === id);

  // Состояние для формы
  const [formData, setFormData] = useState({
    img: null,
    name: "",
    description: "",
    price: "",
    discount: "",
  });

  // Состояние для характеристик
  const [characteristics, setCharacteristics] = useState([
    { name: "first", value: "" },
    { name: "second", value: "" },
    { name: "third", value: "" },
    { name: "fourth", value: "" },
    { name: "fifth", value: "" },
    { name: "sixth", value: "" },
    { name: "seventh", value: "" },
    { name: "eighth", value: "" },
    { name: "ninth", value: "" },
    { name: "tenth", value: "" },
  ]);

  // Состояние для отображения остальных характеристик
  const [showMoreCharacteristics, setShowMoreCharacteristics] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCharacteristicChange = (name, value) => {
    const updatedCharacteristics = characteristics.map((char) => {
      if (char.name === name) {
        return { ...char, value };
      }
      return char;
    });
    setCharacteristics(updatedCharacteristics);
  };

  const handleShowMoreCharacteristics = () => {
    setShowMoreCharacteristics(!showMoreCharacteristics);
  };

  const handlePostProduct = () => {
    dispatch(
      postProduct({
        ...formData,
        img: formData.img,
        category: id,
        characteristics,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch, id]);

  return (
    <div className="post-products__container">
      <PostNavigation />
      <div className="post-products__main">
        <div className="post-products__left">
          <div className="post-products__title">
            {filteredCategories.map((i) => {
              return `Добавление товара в категорию "${i.name}"`;
            })}
          </div>
          <div className="post-products__inputs">
            <div className="post-products__item">
              Название
              <input
                onChange={handleInputChange}
                value={formData.name}
                name="name"
                type="text"
              />
            </div>
            <div className="post-products__item">
              Описание
              <input
                onChange={handleInputChange}
                value={formData.description}
                name="description"
                type="text"
              />
            </div>
            <div className="post-products__item">
              Цена
              <input
                onChange={handleInputChange}
                value={formData.price}
                name="price"
                type="text"
              />
            </div>
            <div className="post-products__item">
              Скидка
              <input
                onChange={handleInputChange}
                value={formData.discount}
                name="discount"
                type="text"
              />
            </div>
            <div className="post-products__item">
              Фото товара
              <input
                className="form-control"
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFormData({ ...formData, img: file });
                }}
              />
            </div>
          </div>
        </div>
        <div className="post-products__right">
          <h4>Характеристики</h4>
          <p className="primer">
            <span className="primer_att">
              Отделяйте наименование характеристики от ее значения - дефизом
            </span>{" "}
            <br /> Пример: "Тип экрана - Amoled"
          </p>
          {characteristics
            .slice(0, showMoreCharacteristics ? undefined : 4)
            .map((char) => (
              <div className="post-products__item" key={char.name}>
                {char.name}
                <input
                  onChange={(e) =>
                    handleCharacteristicChange(char.name, e.target.value)
                  }
                  value={char.value}
                  type="text"
                />
              </div>
            ))}
          <button
            className="post-products__btn"
            onClick={handleShowMoreCharacteristics}
          >
            {showMoreCharacteristics
              ? "Скрыть поля"
              : "Показать остальные поля"}
          </button>
        </div>
      </div>
      <button className="post-products__btn" onClick={handlePostProduct}>
        Добавить
      </button>
    </div>
  );
};

export default PostProduct;
