import React from 'react';
import "../../styles/header.css"
import search from "../../accets/search.png"
import adress from "../../accets/icons9.png"
import user from "../../accets/icon8.png"
import basket from "../../accets/icon10.png"


const Header = () => {

  

    return (
     <>
        <header className='header'>
          <div className='conainer'>
              <nav className='nav-header'>
              <div className="burger">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
               </div>
               <h1 className="nav-title">
                 WILDBERRIES
               </h1>
               <div className="nav_search">
                      <img className="search_icon" src={search} alt="" />
                      <input className="search_nav" type="text" placeholder='Я ищу...' />
               </div>
                
                <div className="navbar">
                     <div className="navbar-adress">
                         <img src={adress} alt="" className='navbar-img'/>
                         <p className='navbar-img-text'>Адреса</p>
                     </div>
                     <div className="navbar-adress">
                         <img src={user} alt="" className='navbar-img2'/>
                         <p className='navbar-img-text2'>Войти</p>
                     </div>
                     <div className="navbar-adress">
                         <img src={basket} alt="" className='navbar-img3'/>
                         <p className='navbar-img-text3'>Корзина</p>
                     </div>
                     
                    
                </div>

              </nav>
          </div>

       


        </header>
         <main>
          
         </main>
       
     </>

       
    );
};

export default Header;