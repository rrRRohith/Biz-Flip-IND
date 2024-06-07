import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlickSlider({ images = [], slidesToShow = 4  , dots = false, arrow = false}) {
    const settings = {
        dots: dots,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: arrow,
    };

    return (
        <>
            {images.length ? (
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="item">
                            <div className="pe-20">
                                <img
                                    role="button"
                                    src={window.getImageAsset(image)}
                                    className="img-fluid rounded15 mb-15"
                                    alt={window.getImageAsset(image)}
                                    onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                />
                                <h6></h6>
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <div>No images available</div>
            )}
        </>
    );
}
