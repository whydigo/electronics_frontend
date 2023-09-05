import React, { useEffect } from "react";
import PostNavigation from "../PostNavigation";
import { useDispatch, useSelector } from "react-redux";
import { postProduct } from "../../../features/ProductSlice";
import { fetchCategories } from "../../../features/CategoriesSlice";
import { useParams } from "react-router-dom";
import { useState } from "react";
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
  const { id } = useParams();

  const categories = useSelector((state) => state.categoryReducer.categories);
  const filteredCategories = categories.filter((i) => i._id === id);
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
        img,
        category: id,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="post-products__container">
      <div className="post-products__header">
        <PostNavigation />
      </div>
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
            <div className="post-products__item">
              Фото товара
              <input
                className="form-control"
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
          <h4>Характеристики</h4>
          <p className="primer">
            <span className="primer_att">
              ! Отделяйте наименование характеристики от ее значения - дефисом
            </span>{" "}
            <br /> Пример: 'Тип экрана - Amoled'
          </p>
          <div className="post-products__item">
            first
            <input
              onChange={(e) => setInfo0(e.target.value)}
              value={info0.characteristic}
              type="text"
            />
          </div>
          <div className="post-products__item">
            second
            <input
              onChange={(e) => setInfo1(e.target.value)}
              value={info1}
              type="text"
            />
          </div>
          <div className="post-products__item">
            third
            <input
              onChange={(e) => setInfo2(e.target.value)}
              value={info2}
              type="text"
            />
          </div>
          <div className="post-products__item">
            fourth
            <input
              onChange={(e) => setInfo3(e.target.value)}
              value={info3}
              type="text"
            />
          </div>
          <div className="post-products__item">
            fifth
            <input
              onChange={(e) => setInfo4(e.target.value)}
              value={info4}
              type="text"
            />
          </div>
          <div className="post-products__item">
            sixth
            <input
              onChange={(e) => setInfo5(e.target.value)}
              value={info5}
              type="text"
            />
          </div>
          <div className="post-products__item">
            seventh
            <input
              onChange={(e) => setInfo6(e.target.value)}
              value={info6}
              type="text"
            />
          </div>
          <div className="post-products__item">
            eighth
            <input
              onChange={(e) => setInfo7(e.target.value)}
              value={info7}
              type="text"
            />
          </div>
          <div className="post-products__item">
            ninth
            <input
              onChange={(e) => setInfo8(e.target.value)}
              value={info8}
              type="text"
            />
          </div>
          <div className="post-products__item">
            tenth
            <input
              onChange={(e) => setInfo9(e.target.value)}
              value={info9}
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostProduct;
