import React, {useState} from "react";
import { useLocation } from "react-router-dom";

import icon_sm_dvfu from './icons/icon-sm-dvfu.svg'
import img_myuniver_logo from './icons/img-myuniver-logo.svg'
import img_logo_symbol from './icons/img-logo-symbol.svg'
import icon_wow_coin from './icons/icon-wow-coin.png'

import card_back from './icons/back.png'

import './styles/style.css'
import './styles/pass_frontend.css'
import './styles/notification.css'


const PassPage = () => {
    const location = useLocation()
    const { full_name } = location.state;
    const [card_base, ] = useState(location.state.card);
// const PassPage = () => {        
return (
<div>
{/* <!--  --> */}
{/* <link type='text/css' href="%PUBLIC_URL%/styles/style.css" rel="stylesheet" />
<link type='text/css' href="%PUBLIC_URL%/styles/pass_frontend.css" rel="stylesheet" />
<link type='text/css' href="%PUBLIC_URL%/styles/notification.css" rel="stylesheet" /> */}
{/* <!--  --> */}
<div data-v-34b633f4="" id="notify-bubble-layout" aria-atomic="true"></div>
<div className="panel" id="main">
    <div className="blue-top-header top-blue-header bg-blueColour py-2 d-none d-lg-block">
        <div className="container">
            <div className="row">
                <div className="col d-none d-md-inline-block">
                    <div className="">
                        <div className="float-left">
                            <a href="https://www.dvfu.ru/" title="ДВФУ"
                                className="whiteColor text-uppercase font-weight-bold tc-whiteColor mb-0 mr-2 f-XS">www.dvfu.ru</a>
                        </div>
                        <div className="float-right">
                            <a href="https://univer.dvfu.ru/contacts" title="Единый контактный центр"
                                className="whiteColor text-uppercase font-weight-bold tc-whiteColor mb-0 mr-2 f-XS">Единый
                                контактный центр</a>
                            <a href="https://univer.dvfu.ru/feedback" title="Напишите нам"
                                className="whiteColor text-uppercase font-weight-bold tc-whiteColor mb-0 mr-2 f-XS">Напишите
                                нам</a>
                            <a href="https://1citil.dvfu.ru/itil_win/ru_RU/" title="Техническая поддержка"
                                className="whiteColor text-uppercase font-weight-bold tc-whiteColor mb-0 mr-2 f-XS">Техническая
                                поддержка</a>
                            <a href="https://univer.dvfu.ru/pass#"
                                className="bvi-open whiteColor text-uppercase font-weight-bold tc-whiteColor mb-0 mr-2 f-XS"
                                title="Версия для слабовидящих"><i className="bvi-icon bvi-eye"></i> Версия для
                                слабовидящих</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="bg-blur mobile-menu-blur" id="bg-blur" style={{display: 'none'}}></div>

    <header className="main-header" style={{position: 'relative', top: '0px', margin_top: '0px'}}>
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="d-lg-none col-4 col-lg-3 align-baseline hamburger-btn">
                    <button className="hamburger hamburger--spin color-gray" type="button" id="mobileMenuOpen">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <div id="menu" className="menu d-lg-none" style={{display: 'none'}}>
                    <div className="menu-header"></div>
                    <div className="overflow-y-scroll pt-2 pb-7" id="menu-content">
                        <nav className="main-nav menu-vertical">
                            <ul>
                                <li>
                                    <a href="https://www.dvfu.ru/" target="_blank" rel='noreferrer'>
{/* <!--  --> */}
                                        <img src={icon_sm_dvfu} alt='icon_desc'
                                            className="menu-icon mr-1" />
{/* <!--  --> */}
                                        <span>Официальный сайт ДВФУ</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://univer.dvfu.ru/pass#" className="bvi-open">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            className="feather feather-eye menu-icon mr-1">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                        <span>Версия для слабовидящих</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav className="main-nav menu-vertical">
                            <ul>
                                <li>
                                    <a href="https://univer.dvfu.ru/contacts" className="menu-link js-service-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            className="feather feather-phone-call menu-icon mr-1">
                                            <path
                                                d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                            </path>
                                        </svg>
                                        <span>Единый контактный центр</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://univer.dvfu.ru/feedback" className="menu-link js-service-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            className="feather feather-send menu-icon mr-1">
                                            <line x1="22" y1="2" x2="11" y2="13"></line>
                                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                                        </svg>
                                        <span>Напишите нам</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://1citil.dvfu.ru/itil_win/ru_RU/"
                                        className="menu-link js-service-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            className="feather feather-headphones menu-icon mr-1">
                                            <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                                            <path
                                                d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z">
                                            </path>
                                        </svg>
                                        <span>Техническая поддержка</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav className="main-nav menu-vertical">
                            <ul>
                                <li>
                                    <h3>Обучение</h3>
                                    <ul>
                                        <li><a className="menu-link js-service-link" href="https://dpo.dvfu.ru/dd-new"
                                                data-service-id="93" data-service-title="Цифровые кафедры"
                                                data-service-name="dpo-link"><span
                                                    className="service-icon menu-icon service-icon__dpo-link"></span>
                                                <span>Цифровые кафедры</span></a></li>
                                        <li><a className="menu-link js-service-link" href="https://dpo.dvfu.ru/"
                                                data-service-id="90" data-service-title="Дополнительное образование"
                                                data-service-name="furtherEducation"><span
                                                    className="service-icon menu-icon service-icon__furtherEducation"></span>
                                                <span>Дополнительное образование</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/page/service/blackboard"
                                                data-service-id="5"
                                                data-service-title="Электронная образовательная среда BLACKBOARD"
                                                data-service-name="blackboard"><span
                                                    className="service-icon menu-icon service-icon__blackboard"></span>
                                                <span>Электронная образовательная среда BLACKBOARD</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/gradebook" data-service-id="31"
                                                data-service-title="Зачётная книжка"
                                                data-service-name="new-egradebook"><span
                                                    className="service-icon menu-icon service-icon__new-egradebook"></span>
                                                <span>Зачётная книжка</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/schedule" data-service-id="48"
                                                data-service-title="Расписание занятий"
                                                data-service-name="className-schedules"><span
                                                    className="service-icon menu-icon service-icon__className-schedules"></span>
                                                <span>Расписание занятий</span></a></li>
                                        <li><a className="menu-link js-service-link" href="https://univer.dvfu.ru/rau"
                                                data-service-id="65" data-service-title="Рейтинг"
                                                data-service-name="rau"><span
                                                    className="service-icon menu-icon service-icon__rau"></span>
                                                <span>Рейтинг</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/profile/portfolio" data-service-id="67"
                                                data-service-title="Портфолио студента"
                                                data-service-name="portfolio-student"><span
                                                    className="service-icon menu-icon service-icon__portfolio-student"></span>
                                                <span>Портфолио студента</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/brs/rating-plan/" data-service-id="69"
                                                data-service-title="Рейтинг-планы"
                                                data-service-name="rating-plans"><span
                                                    className="service-icon menu-icon service-icon__rating-plans"></span>
                                                <span>Рейтинг-планы</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Финансы</h3>
                                    <ul>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/payment/grant" data-service-id="36"
                                                data-service-title="Стипендия" data-service-name="grant"><span
                                                    className="service-icon menu-icon service-icon__grant"></span>
                                                <span>Стипендия</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/bank/choose-bank/index"
                                                data-service-id="88" data-service-title="Выбор банка"
                                                data-service-name="choose-bank"><span
                                                    className="service-icon menu-icon service-icon__choose-bank"></span>
                                                <span>Выбор банка</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/payment/contract/" data-service-id="85"
                                                data-service-title="Оплата договоров"
                                                data-service-name="contract-payment"><span
                                                    className="service-icon menu-icon service-icon__contract-payment"></span>
                                                <span>Оплата договоров</span></a></li>
                                        <li><a className="menu-link js-service-link" href="https://pay.dvfu.ru/"
                                                data-service-id="86" data-service-title="Сервис онлайн-платежей"
                                                data-service-name="pay-dvfu"><span
                                                    className="service-icon menu-icon service-icon__pay-dvfu"></span>
                                                <span>Сервис онлайн-платежей</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Проживание</h3>
                                    <ul>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/settle" data-service-id="63"
                                                data-service-title="Заселение 23-24"
                                                data-service-name="settle"><span
                                                    className="service-icon menu-icon service-icon__settle"></span>
                                                <span>Заселение 23-24</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/resettle" data-service-id="70"
                                                data-service-title="Переселение" data-service-name="resettle"><span
                                                    className="service-icon menu-icon service-icon__resettle"></span>
                                                <span>Переселение</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/accommodation" data-service-id="71"
                                                data-service-title="Проживание"
                                                data-service-name="accommodation"><span
                                                    className="service-icon menu-icon service-icon__accommodation"></span>
                                                <span>Проживание</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Заявки</h3>
                                    <ul>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/mfc/default/enquiry?id=car-pass"
                                                data-service-id="1" data-service-title="Пропуск на автомобиль"
                                                data-service-name="car-pass"><span
                                                    className="service-icon menu-icon service-icon__car-pass"></span>
                                                <span>Пропуск на автомобиль</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/page/service/vpn-access"
                                                data-service-id="15" data-service-title="VPN"
                                                data-service-name="vpn-access"><span
                                                    className="service-icon menu-icon service-icon__vpn-access"></span>
                                                <span>VPN</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/page/service/room-workplace-service"
                                                data-service-id="42" data-service-title="Обслуживание кабинета"
                                                data-service-name="room-workplace-service"><span
                                                    className="service-icon menu-icon service-icon__room-workplace-service"></span>
                                                <span>Обслуживание кабинета</span></a></li>
                                        <li><a className="menu-link js-service-link" href="https://univer.dvfu.ru/mfc"
                                                data-service-id="80" data-service-title="Единое окно"
                                                data-service-name="mfc"><span
                                                    className="service-icon menu-icon service-icon__mfc"></span>
                                                <span>Единое окно</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://www.dvfu.ru/about/rectorate/32416/the-department-of-personnel-management/the-committee-on-ethics-and-official-conduct-of-employees-of-the-university/"
                                                data-service-id="92" data-service-title="Жалоба на этику"
                                                data-service-name="ethics-violation-complaint"><span
                                                    className="service-icon menu-icon service-icon__ethics-violation-complaint"></span>
                                                <span>Жалоба на этику</span></a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Сервисы</h3>
                                    <ul>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/page/service/email"
                                                data-service-id="16" data-service-title="Почта"
                                                data-service-name="email"><span
                                                    className="service-icon menu-icon service-icon__email"></span>
                                                <span>Почта</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/page/service/library"
                                                data-service-id="21" data-service-title="Библиотека"
                                                data-service-name="library"><span
                                                    className="service-icon menu-icon service-icon__library"></span>
                                                <span>Библиотека</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/phonebook" data-service-id="33"
                                                data-service-title="Телефонный справочник"
                                                data-service-name="phonebook"><span
                                                    className="service-icon menu-icon service-icon__phonebook"></span>
                                                <span>Телефонный справочник</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/page/service/microsoft-office-365"
                                                data-service-id="38" data-service-title="MS Office 365"
                                                data-service-name="microsoft-office-365"><span
                                                    className="service-icon menu-icon service-icon__microsoft-office-365"></span>
                                                <span>MS Office 365</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/page/service/wi-fi-access"
                                                data-service-id="47" data-service-title="Wi-Fi"
                                                data-service-name="wi-fi-access"><span
                                                    className="service-icon menu-icon service-icon__wi-fi-access"></span>
                                                <span>Wi-Fi</span></a></li>
                                        <li><a className="menu-link js-service-link" href="https://univer.dvfu.ru/pass"
                                                data-service-id="68" data-service-title="Заказ пропуска"
                                                data-service-name="pass"><span
                                                    className="service-icon menu-icon service-icon__pass"></span>
                                                <span>Заказ пропуска</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/page/service/bus_schedule"
                                                data-service-id="75" data-service-title="Расписание автобусов"
                                                data-service-name="bus_schedule"><span
                                                    className="service-icon menu-icon service-icon__bus_schedule"></span>
                                                <span>Расписание автобусов</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/page/service/mobile-app"
                                                data-service-id="83"
                                                data-service-title="Мобильное приложение «Мой Универ»"
                                                data-service-name="mobile-app"><span
                                                    className="service-icon menu-icon service-icon__mobile-app"></span>
                                                <span>Мобильное приложение «Мой Универ»</span></a></li>
                                        <li><a className="menu-link js-service-link"
                                                href="https://univer.dvfu.ru/studentProject" data-service-id="87"
                                                data-service-title="Твоя инициатива"
                                                data-service-name="student-project"><span
                                                    className="service-icon menu-icon service-icon__student-project"></span>
                                                <span>Твоя инициатива</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-4 col-lg-2 col-xl-2 px-1 logo-div">
                    <a href="https://univer.dvfu.ru/" title="Мой Универ" className="border-0">
                        <div id="desktopLogoDiv" className="d-none d-lg-block position-relative" style={{height: '90px'}}>
{/* <!--  --> */}
                            <img id="desktopLogo" className="img-fluid position-relative main-logo" alt="Мой Универ"
                                title="Мой Универ" src={img_myuniver_logo} />
{/* <!--  --> */}
                            <img id="desktopLogoMin" className="img-fluid position-absolute main-logo my-auto"
                                style={{height: '40px', top: '0px', bottom: '0px', display: 'none'}} alt="Мой Универ"
                                title="Мой Универ" src={img_logo_symbol} />
{/* <!--  --> */}
                        </div>
                        <img id="mobileLogo" className="img-fluid d-lg-none position-relative main-logo"
                            alt="Мой Универ" title="Мой Универ"
                            src={img_logo_symbol} />
{/* <!--  --> */}
                    </a>
                </div>
                <div className="d-none d-lg-block col-lg-8 col-xl-7 position-static">
                    <nav className="main-nav menu-horizontal">
                        <ul className="nav">
                            <li><a id="dropdown-study" className="btn btn-link dropdown-toggle f-M"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Обучение</a>
                                <ul className="dropdown-menu shadow-dropdown" aria-labelledby="dropdown-study">
                                    <li><a className="menu-link js-service-link" href="https://dpo.dvfu.ru/dd-new"
                                            data-service-id="93" data-service-title="Цифровые кафедры"
                                            data-service-name="dpo-link"><span
                                                className="service-icon menu-icon service-icon__dpo-link"></span>
                                            <span>Цифровые кафедры</span></a></li>
                                    <li><a className="menu-link js-service-link" href="https://dpo.dvfu.ru/"
                                            data-service-id="90" data-service-title="Дополнительное образование"
                                            data-service-name="furtherEducation"><span
                                                className="service-icon menu-icon service-icon__furtherEducation"></span>
                                            <span>Дополнительное образование</span></a></li>
                                    <li><a className="menu-link js-service-link"
                                            href="https://univer.dvfu.ru/page/service/blackboard"
                                            data-service-id="5"
                                            data-service-title="Электронная образовательная среда BLACKBOARD"
                                            data-service-name="blackboard"><span
                                                className="service-icon menu-icon service-icon__blackboard"></span>
                                            <span>Электронная образовательная среда BLACKBOARD</span></a></li>
                                    <li><a className="menu-link js-service-link" href="https://univer.dvfu.ru/gradebook"
                                            data-service-id="31" data-service-title="Зачётная книжка"
                                            data-service-name="new-egradebook"><span
                                                className="service-icon menu-icon service-icon__new-egradebook"></span>
                                            <span>Зачётная книжка</span></a></li>
                                    <li><a className="menu-link js-service-link" href="https://univer.dvfu.ru/schedule"
                                            data-service-id="48" data-service-title="Расписание занятий"
                                            data-service-name="className-schedules"><span
                                                className="service-icon menu-icon service-icon__className-schedules"></span>
                                            <span>Расписание занятий</span></a></li>
                                    <li><a className="menu-link js-service-link" href="https://univer.dvfu.ru/rau"
                                            data-service-id="65" data-service-title="Рейтинг"
                                            data-service-name="rau"><span
                                                className="service-icon menu-icon service-icon__rau"></span>
                                            <span>Рейтинг</span></a></li>
                                    <li><a className="menu-link js-service-link"
                                            href="https://univer.dvfu.ru/profile/portfolio" data-service-id="67"
                                            data-service-title="Портфолио студента"
                                            data-service-name="portfolio-student"><span
                                                className="service-icon menu-icon service-icon__portfolio-student"></span>
                                            <span>Портфолио студента</span></a></li>
                                    <li><a className="menu-link js-service-link"
                                            href="https://univer.dvfu.ru/brs/rating-plan/" data-service-id="69"
                                            data-service-title="Рейтинг-планы"
                                            data-service-name="rating-plans"><span
                                                className="service-icon menu-icon service-icon__rating-plans"></span>
                                            <span>Рейтинг-планы</span></a></li>
                                </ul>
                            </li>
                            <li><a id="dropdown-finance" className="btn btn-link dropdown-toggle f-M"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Финансы</a>
                                <ul className="dropdown-menu shadow-dropdown" aria-labelledby="dropdown-finance">
                                    <li><a className="menu-link js-service-link"
                                            href="https://univer.dvfu.ru/payment/grant" data-service-id="36"
                                            data-service-title="Стипендия" data-service-name="grant"><span
                                                className="service-icon menu-icon service-icon__grant"></span>
                                            <span>Стипендия</span></a></li>
                                    <li><a className="menu-link js-service-link"
                                            href="https://univer.dvfu.ru/bank/choose-bank/index"
                                            data-service-id="88" data-service-title="Выбор банка"
                                            data-service-name="choose-bank"><span
                                                className="service-icon menu-icon service-icon__choose-bank"></span>
                                            <span>Выбор банка</span></a></li>
                                    <li><a className="menu-link js-service-link"
                                            href="https://univer.dvfu.ru/payment/contract/" data-service-id="85"
                                            data-service-title="Оплата договоров"
                                            data-service-name="contract-payment"><span
                                                className="service-icon menu-icon service-icon__contract-payment"></span>
                                            <span>Оплата договоров</span></a></li>
                                    <li><a className="menu-link js-service-link" href="https://pay.dvfu.ru/"
                                            data-service-id="86" data-service-title="Сервис онлайн-платежей"
                                            data-service-name="pay-dvfu"><span
                                                className="service-icon menu-icon service-icon__pay-dvfu"></span>
                                            <span>Сервис онлайн-платежей</span></a></li>
                                </ul>
                            </li>
                            <li><a id="dropdown-accommodation" className="btn btn-link dropdown-toggle f-M"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Проживание</a>
                                <ul className="dropdown-menu shadow-dropdown" aria-labelledby="dropdown-accommodation">
                                    <li><a className="menu-link js-service-link" href="https://univer.dvfu.ru/settle"
                                            data-service-id="63" data-service-title="Заселение 23-24"
                                            data-service-name="settle"><span
                                                className="service-icon menu-icon service-icon__settle"></span>
                                            <span>Заселение 23-24</span></a></li>
                                    <li><a className="menu-link js-service-link" href="https://univer.dvfu.ru/resettle"
                                            data-service-id="70" data-service-title="Переселение"
                                            data-service-name="resettle"><span
                                                className="service-icon menu-icon service-icon__resettle"></span>
                                            <span>Переселение</span></a></li>
                                    <li><a className="menu-link js-service-link"
                                            href="https://univer.dvfu.ru/accommodation" data-service-id="71"
                                            data-service-title="Проживание" data-service-name="accommodation"><span
                                                className="service-icon menu-icon service-icon__accommodation"></span>
                                            <span>Проживание</span></a></li>
                                </ul>
                            </li>
                            <li><a id="dropdown-applications" className="btn btn-link dropdown-toggle f-M"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Заявки</a>
                                <ul className="dropdown-menu shadow-dropdown" aria-labelledby="dropdown-applications">
                                    <li><a className="menu-link js-service-link"
                                            href="https://univer.dvfu.ru/mfc/default/enquiry?id=car-pass"
                                            data-service-id="1" data-service-title="Пропуск на автомобиль"
                                            data-service-name="car-pass"><span
                                                className="service-icon menu-icon service-icon__car-pass"></span>
                                            <span>Пропуск на автомобиль</span></a></li>
                                    <li><a className="menu-link js-service-link"
                                            href="https://univer.dvfu.ru/page/service/vpn-access"
                                            data-service-id="15" data-service-title="VPN"
                                            data-service-name="vpn-access"><span
                                                className="service-icon menu-icon service-icon__vpn-access"></span>
                                            <span>VPN</span></a></li>
                                    <li><a className="menu-link js-service-link"
                                            href="https://univer.dvfu.ru/page/service/room-workplace-service"
                                            data-service-id="42" data-service-title="Обслуживание кабинета"
                                            data-service-name="room-workplace-service"><span
                                                className="service-icon menu-icon service-icon__room-workplace-service"></span>
                                            <span>Обслуживание кабинета</span></a></li>
                                    <li><a className="menu-link js-service-link" href="https://univer.dvfu.ru/mfc"
                                            data-service-id="80" data-service-title="Единое окно"
                                            data-service-name="mfc"><span
                                                className="service-icon menu-icon service-icon__mfc"></span>
                                            <span>Единое окно</span></a></li>
                                    <li><a className="menu-link js-service-link"
                                            href="https://www.dvfu.ru/about/rectorate/32416/the-department-of-personnel-management/the-committee-on-ethics-and-official-conduct-of-employees-of-the-university/"
                                            data-service-id="92" data-service-title="Жалоба на этику"
                                            data-service-name="ethics-violation-complaint"><span
                                                className="service-icon menu-icon service-icon__ethics-violation-complaint"></span>
                                            <span>Жалоба на этику</span></a></li>
                                </ul>
                            </li>
                            <li><a id="dropdown-services" className="btn btn-link dropdown-toggle f-M"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Сервисы</a>
                                <ul className="dropdown-menu shadow-dropdown" aria-labelledby="dropdown-services">
                                    <li><a className="menu-link js-service-link"
                                            href="https://univer.dvfu.ru/page/service/email" data-service-id="16"
                                            data-service-title="Почта" data-service-name="email"><span
                                                className="service-icon menu-icon service-icon__email"></span>
                                            <span>Почта</span></a></li>
                                    <li><a className="menu-link js-service-link"
                                            href="https://univer.dvfu.ru/page/service/library" data-service-id="21"
                                            data-service-title="Библиотека" data-service-name="library"><span
                                                className="service-icon menu-icon service-icon__library"></span>
                                            <span>Библиотека</span></a></li>
                                    <li><a className="menu-link js-service-link" href="https://univer.dvfu.ru/phonebook"
                                            data-service-id="33" data-service-title="Телефонный справочник"
                                            data-service-name="phonebook"><span
                                                className="service-icon menu-icon service-icon__phonebook"></span>
                                            <span>Телефонный справочник</span></a></li>
                                    <li><a className="menu-link js-service-link"
                                            href="https://univer.dvfu.ru/page/service/microsoft-office-365"
                                            data-service-id="38" data-service-title="MS Office 365"
                                            data-service-name="microsoft-office-365"><span
                                                className="service-icon menu-icon service-icon__microsoft-office-365"></span>
                                            <span>MS Office 365</span></a></li>
                                    <li><a className="menu-link js-service-link"
                                            href="https://univer.dvfu.ru/page/service/wi-fi-access"
                                            data-service-id="47" data-service-title="Wi-Fi"
                                            data-service-name="wi-fi-access"><span
                                                className="service-icon menu-icon service-icon__wi-fi-access"></span>
                                            <span>Wi-Fi</span></a></li>
                                    <li><a className="menu-link js-service-link" href="https://univer.dvfu.ru/pass"
                                            data-service-id="68" data-service-title="Заказ пропуска"
                                            data-service-name="pass"><span
                                                className="service-icon menu-icon service-icon__pass"></span>
                                            <span>Заказ пропуска</span></a></li>
                                    <li><a className="menu-link js-service-link"
                                            href="https://univer.dvfu.ru/page/service/bus_schedule"
                                            data-service-id="75" data-service-title="Расписание автобусов"
                                            data-service-name="bus_schedule"><span
                                                className="service-icon menu-icon service-icon__bus_schedule"></span>
                                            <span>Расписание автобусов</span></a></li>
                                    <li><a className="menu-link js-service-link"
                                            href="https://univer.dvfu.ru/page/service/mobile-app"
                                            data-service-id="83"
                                            data-service-title="Мобильное приложение «Мой Универ»"
                                            data-service-name="mobile-app"><span
                                                className="service-icon menu-icon service-icon__mobile-app"></span>
                                            <span>Мобильное приложение «Мой Универ»</span></a></li>
                                    <li><a className="menu-link js-service-link"
                                            href="https://univer.dvfu.ru/studentProject" data-service-id="87"
                                            data-service-title="Твоя инициатива"
                                            data-service-name="student-project"><span
                                                className="service-icon menu-icon service-icon__student-project"></span>
                                            <span>Твоя инициатива</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-4 col-lg-2 col-xl-3 pl-0 align-baseline">
                    <nav className="actions-nav">
                        <ul className="nav f-M justify-content-end">
                            <li className="nav-item">
                                <div data-v-02f2ebe7="" tabIndex="-1" className="nav-link pl-0">
                                    <i data-v-02f2ebe7=""><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                            className="feather feather-bell">
                                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                        </svg></i> <span data-v-02f2ebe7="" className="red-dot">9+</span>
                                </div>
                            </li>
                            <li className="nav-item pl-sm-0">
                                <a href="https://univer.dvfu.ru/pass#" className="nav-link" data-toggle="dropdown"
                                    role="button" aria-haspopup="true" aria-expanded="false">
                                </a>
                                <div className="d-inline"><a href="https://univer.dvfu.ru/pass#" className="nav-link"
                                        data-toggle="dropdown" role="button" aria-haspopup="true"
                                        aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            className="feather feather-user icon-user-profile">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                        {/* {% block name %} */}
                                        <span className="d-none d-xl-inline-block user-profile-name" title={ full_name }>
                                             { full_name }
                                        </span>
                        {/* {% endblock %} */}
                                        <span className="d-none d-md-inline dropdown-toggle"></span>
                                    </a>
                                    <div className="dropdown-menu shadow-dropdown"><a
                                            href="https://univer.dvfu.ru/pass#" className="nav-link"
                                            data-toggle="dropdown" role="button" aria-haspopup="true"
                                            aria-expanded="false">
                                            <div className="dropdown-item">
                        {/* <!--  --> */}
                                                <img style={{width: '20px', height: '20px'}}
                                                    src={icon_wow_coin} alt='icon_wow_coin_desc' />
                        {/* <!--  --> */}       
                                                <span data-url="/get-coin" id="coin-balance">100</span>
                                            </div>
                                            <div className="dropdown-divider"></div>
                                        </a><a href="https://univer.dvfu.ru/pass#"
                                            className="dropdown-item d-none d-md-block d-lg-none" data-toggle="tooltip"
                                            data-placement="top" title="Уведомления"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-bell icon-N mr-1">
                                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                            </svg> Уведомления</a>
                                        <a className="dropdown-item" href="https://univer.dvfu.ru/profile"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-user icon-N mr-1">
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg> Профиль</a>
                                        <a className="dropdown-item" href="https://univer.dvfu.ru/userRequest"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-list icon-N mr-1">
                                                <line x1="8" y1="6" x2="21" y2="6"></line>
                                                <line x1="8" y1="12" x2="21" y2="12"></line>
                                                <line x1="8" y1="18" x2="21" y2="18"></line>
                                                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                                                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                                                <line x1="3" y1="18" x2="3.01" y2="18"></line>
                                            </svg> Мои заявки</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="https://esa.dvfu.ru/logout"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                className="feather feather-log-out icon-N">
                                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                                <polyline points="16 17 21 12 16 7"></polyline>
                                                <line x1="21" y1="12" x2="9" y2="12"></line>
                                            </svg> Выход</a>
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <div className="content my-3 mb-6">
        <div className="container mb-3">
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-md-12">
                    <div className="card">
                        <div className="card-body text-center p-5">
                            <p>
                                Спасибо, что получили пропуск, не забывайте брать его с собой. </p>
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <div className="mb-1"><strong>Фронтальная сторона</strong></div>
    {/* {% block front_card %} */}
                                    <img src={ card_base } className="img-fluid" alt="Фронтальная сторона">
                                    </img>
    {/* {% endblock %} */}
                                </div>
                                <div className="col-md-6 text-center">
                                    <div className="mb-1"><strong>Задняя сторона</strong></div>
    {/* {% block back_card %} */}
                                    <img src={card_back} className="img-fluid" alt="Фронтальная сторона">
                                    </img>
    {/* {% endblock %} */}
                                </div>
                            </div>

                        </div>

                        <div id="accordion">
                            <div className="mb-4">
                                <div id="headingOne">
                                    <h5 className="">
                                        <button className="btn btn-link" data-toggle="collapse"
                                            data-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            Как заменить пропуск в случае утери
                                        </button>
                                    </h5>
                                </div>

                                <div id="collapseOne" className="m-2 collapse" aria-labelledby="headingOne"
                                    data-parent="#accordion">
                                    <div>
                                        <p>Обратиться в департамент комплексной безопасности в корпусе С, кабинет
                                            С617.</p>

                                        <p>Время работы: пн-пт 09:00-18:00, перерыв 13:00-14:00.</p>

                                        <p>При себе иметь: паспорт</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div id="headingTwo">
                                    <h5 className="">
                                        <button className="btn btn-link collapsed" data-toggle="collapse"
                                            data-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            Как перевыпустить пропуск при изменении данных
                                        </button>
                                    </h5>
                                </div>
                                <div id="collapseTwo" className="m-2 collapse" aria-labelledby="headingTwo"
                                    data-parent="#accordion">
                                    <div>
                                        <p>Если изменились ФИО, должность, название подразделения и т.п. то нужно
                                            обратиться в
                                            бюро пропусков в корпусе "С" кабинет С617.</p>

                                        <p>Время работы: пн-пт 09:00-18:00, перерыв 13:00-14:00.</p>

                                        <p>При себе иметь: паспорт и старый пропуск.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer className="footer bg-whiteColour py-6 main-footer">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 col-lg-8">
                    <p>© 2023 «Мой Универ». Управление информатизации ДВФУ.<br/> Информация, размещённая
                        на&nbsp;данном сайте, является собственностью ДВФУ. Любое копирование материалов сайта
                        без&nbsp;разрешения владельца запрещено.</p>
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                    <a href="https://univer.dvfu.ru/pass#"
                        className="bvi-open text-dark text-uppercase font-weight-bold mb-0 mr-2 f-S"
                        title="Версия для слабовидящих">
                        <i className="bvi-icon bvi-eye"></i>
                        Версия для слабовидящих </a>
                </div>
            </div>
        </div>
    </footer>
</div>


<div data-v-78b41de6=""></div>

{/* <!-- Modal --> */}
<div className="modal fade" id="jsModal" tabIndex="-1" role="dialog" aria-labelledby="jsModalTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="jsModalTitle"></h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body" id="jsModalBody">

            </div>
            <div className="modal-footer" id="jsModalFooter">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
            </div>
        </div>
    </div>
</div>
{/* <!--  --> */}
{/* <script type="text/javascript" src="/styles/jquery.min.js.Без названия"></script>
<script type="text/javascript" src="/styles/app(1).js.Без названия"></script>
<script type="text/javascript" src="/styles/app.js.Без названия"></script>
<script type="text/javascript" src="/styles/yii.js.Без названия"></script> */}
{/* <script type="text/javascript" src="https://univer.dvfu.ru/assets/1aa5f7d91c11582a0a6ba8e79dc764ad/jquery.min.js?v=1702460818" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://univer.dvfu.ru/assets/3da64544a42cb556e5c762e37b336dc9/js/app.js?v=1702460821"></script>
<script type="text/javascript" src="https://univer.dvfu.ru/assets/9c71d53394298ae9b67bd22af616e250/yii.js?v=1702460837"></script>
<script type="text/javascript" src="https://univer.dvfu.ru/assets/ce6b88296970e0fabd6d8023f012272c/js/app.js?v=1702460812"></script>  */}


</div>
)
};

export default PassPage;