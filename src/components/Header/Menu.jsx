import React from "react";
import '../../styles/menu.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../features/CategoriesSlice";
import { Link } from "react-router-dom";


function Menu({ setOpenModal, openModal = [] }) {
    const categories = useSelector((state) => state.categoryReducer.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      {openModal && (
        <div className="overlay">
          <div className="drawer">
            <div className='btn-close'>
              <button className="removeBtn" onClick={() => setOpenModal(false)}>x</button>
            </div>
            <div className="items">
              {categories.map((category) => {
                return (
                  <div className="categoty" key={category._id}><Link to={`/category/${category._id}`} key={category._id}>{category.name}</Link></div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;