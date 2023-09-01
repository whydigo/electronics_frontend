import React from "react";
import { NavLink } from "react-router-dom";
import s from "./PostNavigation.module.css";
import { fetchCategories } from "../../features/CategoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const PostNavigation = () => {
  const isactive = ({ isActive }) => (isActive ? s.active : "");
  const category = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={s.post__navigation}>
      {category.map((i) => {
        return (
          <div className={s.post_products__header}>
            <NavLink
              key={i._id}
              to={`/admin/products/${i._id}`}
              className={isactive}
            >
              <div className={s.navigation_element}>{i.name}</div>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default PostNavigation;
