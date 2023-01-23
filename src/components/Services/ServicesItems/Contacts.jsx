import React from 'react';
import '../../../styles/contacts.css';
import Services_Contacts_headset from '../../../assets/Services_Contacts_headset.png'

const Contacts = () => {
    return (
        <div className='с-wrapper'>
            <div className='c-main'>
                <h1 className='c-zagolovok'>Контакты</h1>
                <div className='c-blocks'>
                    <div className='c-block'>
                        <div className='c-block-left'>
                            <h1>Обращения</h1>
                            <p>Если у Вас возник вопрос – напишите нам</p>
                            <p className="questions" ><a className="questions-a" href="#">Частые вопросы</a></p>
                        </div>
                        <div div className='c-block-right'>
                            <img src={Services_Contacts_headset} alt="jt" />
                        </div>
                    </div>
                    <div className='c-block-1'>
                        <h1>Официальные запросы</h1>
                        <p>Для отправки или получения деловой документации</p>
                    </div>
                    <div className='c-block-1'>
                        <h1>Правообладателям</h1>
                        <p>Претензии по нарушению прав на интеллектуальную собственность</p>
                    </div>
                    <div className='c-block-1'>
                        <h1>Партнерам</h1>
                        <p>Узнайте подробные условия для сотрудничества</p>
                    </div>
                    <div className='c-block-1'>
                        <h1>Пресс-служба</h1>
                        <p>Для запросов СМИ и на участие в мероприятиях</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;