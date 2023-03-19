import React from "react";
import phone from "../../assets/phone.jpg";
import laptop from "../../assets/laptop.jpg";
import smartwatch from "../../assets/smartwatch.jpg";
import s from "../../styles/CategoryBlock.module.css";
import { Link } from "react-router-dom";

const CategoryBlock = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>Популярные категории</div>
      <div className={s.categoriesContainer}>
        <div className={s.category}>
          <Link to="/category/63caaf8b48bfffa7fcebe59d">
            <img src={phone} alt="telephone" className={s.categoryImage} />
          </Link>
        </div>
        <div className={s.category}>
          <Link to="/category/63ce9096f74e0891f0e202fe">
            <img src={laptop} alt="laptop" className={s.categoryImage} />
          </Link>
        </div>
        <div className={s.category}>
          <Link to="/category/63caaf6db2f72ed28aa640f6">
            <img
              src={smartwatch}
              alt="smartwatch"
              className={s.categoryImage}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryBlock;
