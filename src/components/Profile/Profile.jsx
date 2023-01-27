import React from 'react';
import "./profile.css";

const Profile = () => {
    return (
        <div className='profile'>
            <div className='container'>
                <div >
                    <h2 className="profile-title">Фото профиля</h2>
                     <div className='profile-content'> 
                        <div className='profile-user'>
                        <img className='profile-img' src="https://sun9-37.userapi.com/impg/NVhFrc4AMqlCUhRcU6eQTTuL39SSnDTagKj4gg/4YFIEZAis_g.jpg?size=902x1280&quality=95&sign=6b310a809586554cc768cd7a77d526c1&c_uniq_tag=Z98A7AQgMDSul0-XveJmvmqntSwnxreBw3DkTPYRfdQ&type=album" alt="" />
                        <button className='profile-btn'>Выберите файл</button>
                        <img className='profile-img2' src="https://w7.pngwing.com/pngs/786/685/png-transparent-computer-icons-trashcan-text-rectangle-presentation.png" alt="" />
                    </div>
                    <div className='profile-cash'>
                        <div className='profile-cash-content'>
                            <p className='profile-money'>Баланс:</p>
                            <p className='profile-money'>1000 Р</p>
                        </div>
                        <button className='profile-btn'>Пополнить баланс</button>
                    </div>
                    </div>
                  
                <p className='profile-info'>Максимальный размер 5 МБ</p>
                <div className="block">
                    <div className="block1">
                <h3 className="profile-title">Личная информация</h3>
                <p className='profile-title'>Моё имя*</p>
                <input className='profile-input' placeholder='Введите имя' type="text" />
                <p className='profile-title'>Email*</p>
                <input className='profile-input' placeholder='Введите Email' type="text" />
                <p className='profile-title'>Телефон*</p>
                <input className='profile-input' placeholder='Введите номер телефона' type="tel" />
                <button className='profile-btn2'>Сохранить</button>
                </div>
                
                <div className="block2">
                <h3 className="profile-title">Изменение пароля</h3>
                <p className='profile-title'>Текущий пароль</p>
                <input className='profile-input' placeholder='****' type="password" />
                <p className='profile-title'>Новый пароль</p>
                <input className='profile-input' placeholder='****' type="password" />
                <p className='profile-title'>Потвердите пароль</p>
                <input className='profile-input' placeholder='****' type="password" />
                <button className='profile-btn2'>Сохранить</button>
                </div>
                </div>
                <div className="profile-title2">
                <h3 className="profile-title">Удалить профиль</h3>
                <span><img className='profile-remove2' src="https://w7.pngwing.com/pngs/786/685/png-transparent-computer-icons-trashcan-text-rectangle-presentation.png" alt="Удалить" /></span>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;