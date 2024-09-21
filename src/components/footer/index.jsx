import React, { useState, useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import Button03 from '../button/Button03';

import logo from '../../assets/images/logo/logo-footer.png';



function Footer(props) {



    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (

        <footer className="footer">
            <div className="action-box">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="action-box-inner">
                                <h2 className="title">ÚNETE A NUESTRA COMUNIDAD</h2>
                                <p className="content">Impulsa tu proyecto en el metaverso. Haz parte del futuro.
                                </p>
                                <div className="group-btn">
                                    <Button03 title='Correo' path='mailto:contacto@capitalgreen.io' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-inner">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-3 col-md-12">
                            <div className="widget widget-infor">
                                <div className="logo">
                                    <img id="logo_footer" src={logo} alt="Binabox" />
                                </div>
                                <p className="content">Capital Green, tu puente al metaverso.
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-12">
                            <div className="widget widget-menu">
                                <div className="menu menu-2">
                                    <h6 className="widget-title">COMPAÑIA</h6>
                                    <ul >
                                        <li><a href="#INICIO">INICIO</a></li>
                                        <li><a href="#METAVERSO">METAVERSO</a></li>
                                        <li><a href="#NUESTRO PROCESO">NUESTRO PROCESO</a></li>
                                        <li><a href="#CONSTRUYAMOS JUNTOS">CONSTRUYAMOS JUNTOS</a></li>
                                        <li><a href="#TECNOLOGÍAS">TECNOLOGÍAS</a></li>
                                        <li><a href="#CONCEPTOS Y FAQS">FAQs</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-12">
                            <div className="widget widget-subcribe">
                                <h6 className="widget-title">INFORMACIÓN</h6>
                                <form action="#" id="subscribe-form">
                                    <a href='https://t.me/+DokW0qxXU6Y2ZDBh' className="tf-button" target='_blank' rel="noreferrer">Contacto</a>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-inner">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bottom">
                                <p className="copy-right">CAPITAL GREEN  - ALL rights reserved</p>
                                <ul className="social-item">
                                    <li><a href="https://www.instagram.com/capitalgreen_/?igshid=MzRlODBiNWFlZA%3D%3D" target='_blank' rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="https://t.me/+DokW0qxXU6Y2ZDBh"><i className="fab fa-telegram" target='_blank' rel="noreferrer"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                isVisible &&
                <Link onClick={scrollToTop} to='#' id="scroll-top"></Link>
            }
        </footer>
    );
}

export default Footer;