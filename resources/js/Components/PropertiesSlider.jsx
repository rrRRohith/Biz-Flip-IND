import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function PropertiesSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
      };
    return (
        <Slider {...settings}>
           
           <div className="item">
                <div className="pe-20">
                    <img src="/assets/admin/images/food/biryanis.jpg" className="img-fluid rounded15 mb-15"
                        alt="" />
                    <h5>Biryanis Pulav</h5>
                </div>
            </div>
              <div className="item">
                <div className="pe-20">
                    <img src="/assets/admin/images/food/burgers.jpg" className="img-fluid rounded15 mb-15"
                        alt="" />
                    <h5>king Burgers</h5>
                    
                </div>
            </div>
            <div className="item">
                <div className="pe-20">
                    <img src="/assets/admin/images/food/dals.jpg" className="img-fluid rounded15 mb-15"
                        alt="" />
                    <h5>Dal Palak Recipe</h5>
                    
                </div>
            </div>
            <div className="item">
                <div className="pe-20">
                    <img src="/assets/admin/images/food/noodles.jpg" className="img-fluid rounded15 mb-15"
                        alt="" />
                    <h5>Pan Noodles</h5>
                    
                </div>
            </div>
            <div className="item">
                <div className="pe-20">
                    <img src="/assets/admin/images/food/main.jpg" className="img-fluid rounded15 mb-15"
                        alt="" />
                    <h5>Vegetable Jalfrezi</h5>
                    
                </div>
            </div>
            <div className="item">
                <div className="pe-20">
                    <img src="/assets/admin/images/food/subziyan.jpg" className="img-fluid rounded15 mb-15"
                        alt="" />
                    <h5>Aloo Tamatar Ki Sabzi</h5>
                    
                </div>
            </div> 
        </Slider>
    )
}

