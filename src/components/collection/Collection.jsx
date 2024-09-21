import React from 'react';
import PropTypes from 'prop-types';

import { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './styles.scss';
import { Link } from 'react-router-dom';


Collection.propTypes = {
    data: PropTypes.array,
};

function Collection(props) {
    const { data } = props;
    return (
        <section className=" tf-collection " id='#'>
            <div className="tf-container">
                <div className="row">
                    <div className="col-md-12">
                        <Swiper
                            className="collection-1 visible"
                            spaceBetween={30}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                500: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                991: {
                                    slidesPerView: 4,
                                },
                            }}
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}

                        >

                            {
                                data.slice(0, 9).map(idx => (
                                    <SwiperSlide key={idx.id}>
                                        <div className="slider-item">
                                            <div className="tf-product ">
                                                <div className="image">
                                                    <img src={idx.img} alt="Binabox" />
                                                </div>
                                                <h6 className="name"><Link to="/item-details">{idx.title}</Link></h6>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Collection;