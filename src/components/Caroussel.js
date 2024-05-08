import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Data as Articles} from "../data/Articles";
import './Caroussel.css';

function Caroussel() {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Articles);
    },[])

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };

  return (
        <div className="slider-container">
            <Slider className='card-container' {...settings}>
                {
                    data.map((d) => (
                        <div key={d.id} className='card'>
                            <img src={d.img} alt='' className='cover-image' />
                            <div className='card-body'>
                                <h3 className='card-title'>{d.name}</h3>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
  )
}

export default Caroussel