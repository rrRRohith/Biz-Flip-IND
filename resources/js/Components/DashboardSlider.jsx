
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function DashboardSlider({ adsListing = [], slidesToShow = 4  , dots = false, arrow = false}) {
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

    const [show, setShow] = useState(false);
    const [title, setTitle] = useState('');
    const [adsource, setSource] = useState('');
    const showAd = (ad) => {
        setSource(route('ads.show', ad.slug)+'?embed=true');
        setTitle(ad.title);
        setShow(true);
    }
    const handleClose = () => setShow(false);
    return (
        <>
            {adsListing.length ? (
                <Slider {...settings}>
                    {adsListing.map((ad, index) => (
                        <div key={index} className="item" onClick={(e) => showAd(ad)}>
                            <div className="pe-20">
                                <img
                                    role="button"
                                    src={window.getImageAsset(ad.image)}
                                    className="img-fluid rounded15 mb-15"
                                    alt=""
                                    onError={(e) => { e.target.onerror = null; e.target.src = '/assets/admin/images/noimage.webp'; }}
                                />
                                <h6 className="text-center">{ad.title}</h6>
                            </div>
                        </div>
                    ))}
                </Slider>
            ) : (
                <div>No images available</div>
            )}

            <Modal size="lg" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='p-0'>
                    <iframe className='rounded-3 listframe' src={adsource} frameborder="0"></iframe>
                </Modal.Body>
            </Modal>
        </>
    );
}
