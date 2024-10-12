import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Slider from 'react-slick';
import { CategoryApi, ImageUrl } from '../../BaseURL/BaseUrl';

const HeaderSlider = () => {

    const [slider, setSlider] = useState([])
    useEffect(() => {
        axios.get(`${CategoryApi}/getslider`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
        })
            .then(function (response) {
                console.log(response.data.data);
                setSlider(response.data.data);
            })
            .catch(function (error) {
                console.error('There was an error making the request:', error);
            });
    }, []);

    const settings = {
        slidesToShow: 1,
        dots: true,
    };
    return (
        <>
            <div className="slider-outer">
                <div className="container">
                    <div className="slider-inner">
                        <Slider  {...settings}>
                            {slider && slider.map((i, index) => {
                                return (
                                    <div className="item" key={index}>
                                        <div className="item-inner">
                                            <img src={`${ImageUrl}/${i.url}`} alt="" />
                                        </div>

                                    </div>
                                )

                            })}

                        </Slider>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HeaderSlider