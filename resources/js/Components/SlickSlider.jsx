import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlickSlider({ images = [], slidesToShow = 1, dots = false, arrow = false }) {
    const settings = {
        dots: dots,
        infinite: images.length > 1, // Disable infinite loop for a single image
        speed: 500,
        slidesToShow: images.length === 1 ? 1 : slidesToShow, // Show only one slide if there's only one image
        slidesToScroll: 1,
        autoplay: images.length > 1, // Disable autoplay if there's only one image
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
                                    src={image}
                                    className="img-fluid rounded15 mb-15"
                                    alt={`Slide ${index}`}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/assets/admin/images/noimage.webp';
                                    }}
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
