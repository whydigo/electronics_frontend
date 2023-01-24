import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./PostNavigation.module.css";

const PostNavigation = () => {
    const isactive =({isActive}) => isActive ? s.active : ""
    return (
        <div className='post__navigation'>
            <NavLink to="/admin/products/camera" className={isactive}>
            <div className="navigation-element">Камеры</div>
            </NavLink>
            <NavLink to="/admin/products/laptop" className={isactive}>
            <div className="navigation-element">Ноутбуки</div>
            </NavLink>
            <NavLink to="/admin/products/headset" className={isactive}>
            <div className="navigation-element">Наушники</div>
            </NavLink>
            <NavLink to="/admin/products/smartphone" className={isactive}>
            <div className="navigation-element">Смартфоны</div>
            </NavLink>
            <NavLink to="/admin/products/smartwatch" className={isactive}>
            <div className="navigation-element">Умные часы</div>
            </NavLink>
            <NavLink to="/admin/products/tablet" className={isactive}>
            <div className="navigation-element">Планшеты</div>
            </NavLink>
            <NavLink to="/admin/products/tv" className={isactive}>
            <div className="navigation-element">Телевизоры</div>
            </NavLink>
        </div>
    );
};

export default PostNavigation;