import React, { useEffect } from "react";
import PostNavigation from "../PostNavigation";
import { useDispatch, useSelector } from "react-redux";
import { postProduct } from "../../../features/ProductSlice";
import { fetchCategories } from "../../../features/CategoriesSlice";
import { useParams } from "react-router-dom";
import { useState } from "react";
import neo from "../../../assets/neo.png";
import "../../../styles/admin.css";

const PostProduct = () => {
  const [img, setImg] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [info0, setInfo0] = useState("");
  const [info1, setInfo1] = useState("");
  const [info2, setInfo2] = useState("");
  const [info3, setInfo3] = useState("");
  const [info4, setInfo4] = useState("");
  const [info5, setInfo5] = useState("");
  const [info6, setInfo6] = useState("");
  const [info7, setInfo7] = useState("");
  const [info8, setInfo8] = useState("");
  const [info9, setInfo9] = useState("");
  const [info10, setInfo10] = useState("");
  const [info11, setInfo11] = useState("");
  const [info12, setInfo12] = useState("");
  const [info13, setInfo13] = useState("");
  const [info14, setInfo14] = useState("");
  const [info15, setInfo15] = useState("");
  const { id } = useParams();

  const categories = useSelector((state) => state.categoryReducer.categories);
  const filteredCategories = categories.filter((i) => i._id === id);
  console.log(filteredCategories);
  const dispatch = useDispatch();

  const handlePostProduct = () => {
    dispatch(
      postProduct({
        name,
        description,
        price,
        discount,
        info0,
        info1,
        info2,
        info3,
        info4,
        info5,
        info6,
        info7,
        info8,
        info9,
        info10,
        info11,
        info12,
        info13,
        info14,
        info15,
        img,
        category: id,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // const sendFile = useCallback(async () => {
  //   try {
  //     const data = new FormData();
  //     data.append("img", img);
  //     console.log(img);

  //     await axios
  //       .post("/camera", data, {})

  //       .then((res) => setPreview(res.data.path));
  //   } catch (error) {}
  // }, [img]);

  return (
    <div className="post-products__container">
      <div className="post-products__header">
        <PostNavigation />
      </div>
      <div className="post-products__main">
        <div className="post-products__left">
          <div className="post-products__title">
            {filteredCategories.map((i) => {
              return i.name;
            })}
          </div>
          <div className="post-products__inputs">
            <div className="post-products__item">
              Название
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Описание
              <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Цена
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Скидка
              <input
                onChange={(e) => setDiscount(e.target.value)}
                value={discount}
                type="text"
              />
            </div>
            <br />
            <h4>Характеристики</h4>
            <div className="post-products__item">
              Модель
              <input
                onChange={(e) => setInfo0(e.target.value)}
                value={info0}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Питание
              <input
                onChange={(e) => setInfo1(e.target.value)}
                value={info1}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Емкость аккумулятора
              <input
                onChange={(e) => setInfo2(e.target.value)}
                value={info2}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Тип матрицы
              <input
                onChange={(e) => setInfo3(e.target.value)}
                value={info3}
                type="text"
              />
            </div>
            <div className="post-products__item">
              {id === "63caaf6db2f72ed28aa640f6"
                ? "Тип экрана"
                : id === "63caaf8b48bfffa7fcebe59d"
                ? "Процессор"
                : id === "63caafc448bfffa7fcebe59f"
                ? "Разрешение"
                : id === "63cbaae09cfb3fc70c243fce"
                ? "Скапуля"
                : "Клявикуля"}
              <input
                onChange={(e) => setInfo4(e.target.value)}
                value={info4}
                type="text"
              />
              {id === "63cbaae09cfb3fc70c243fce" ? (
                <div className="post-products__item">
                  Тип матрицы
                  <input
                    onChange={(e) => setInfo3(e.target.value)}
                    value={info3}
                    type="text"
                  />
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="post-products__item">
              Фото товара
              <input
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setImg(file);
                }}
              />
            </div>
            <button className="post-products__btn" onClick={handlePostProduct}>
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

export default PostProduct;
