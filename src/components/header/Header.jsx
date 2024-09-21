import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import menus from '../../pages/menu';

import './styles.scss';
import logo from '../../assets/images/logo/logo.png';
import logodark from '../../assets/images/logo/logo_dark.png';
import logolight from '../../assets/images/logo/logo-light.png';
import DarkMode from './DarkMode';


const Header = () => {

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        }
    }, []);

    const [menuActive, setMenuActive] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
    };


    return (

        <header className={`header ${scroll ? 'is-fixed' : ''}`}>
            <div className="tf-container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="site-header-inner">
                            <div id="site-logo" className="clearfix">
                                <div id="site-logo-inner">
                                    <Link to="/" rel="home" className="main-logo">
                                        <img id="logo_header" className='logo-dark' src={logodark} alt="Binasea" />
                                        <img id="logo_header" className='logo-light' src={logolight} alt="Binasea" />
                                    </Link>
                                </div>
                            </div>

                            <div className="header-center">
                                <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`}>
                                    <ul id="menu-primary-menu" className="menu">
                                        {
                                            menus.map((data, idx) => (
                                                <li key={idx} className={`menu-item ${data.namesub ? 'menu-item-has-children' : ''}`}
                                                >
                                                    <a href={`#${data.links}`}>{data.name}</a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </nav>
                            </div>

                            <div className="header-right">

                                <DarkMode />

                                <a href="https://t.me/+DokW0qxXU6Y2ZDBh" className="tf-button discord" target='_blank' rel="noreferrer"><span class="material-symbols-outlined">
                                    call
                                </span><span>TELEGRAM</span></a>
                                <a href="mailto:contacto@capitalgreen.io" className="tf-button connect" target='_blank' rel="noreferrer"> <span class="material-symbols-outlined">
                                    mail
                                </span><span>MAIL</span></a>
                                <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </header>

    );
}

export default Header;