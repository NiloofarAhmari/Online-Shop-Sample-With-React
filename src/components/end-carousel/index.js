import React from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const EndCarousel = () => {
    const options = {
        margin: 5,
        responsiveClass: true,
        autoplayTimeout:3000,
        nav: true,
        dots: true,
        loop:true,
        autoplay: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            600: {
                items: 3,
            },
            700: {
                items: 5,
            },
            1000: {
                items: 8,
    
            }
        },
    };
    return (
        <div>

            <div className="instagram-box">
            <div className="container">
            <OwlCarousel className="owl-theme main-instagram" style={{ direction: "ltr" }} {...options}>

<div className="item">
    <div className="ins-inner-box">
        <img src="images/end-carousel/instagram-img-01.jpg" alt="" />
        <div className="hov-in">
            <a href="#"><i className="fab fa-instagram fa-3x text-white"></i></a>
        </div>
    </div>
</div>
<div className="item">
    <div className="ins-inner-box">
        <img src="images/end-carousel/instagram-img-02.jpg" alt="" />
        <div className="hov-in">
        <a href="#"><i className="fab fa-instagram fa-3x text-white"></i></a>
        </div>
    </div>
</div>
<div className="item">
    <div className="ins-inner-box">
        <img src="images/end-carousel/instagram-img-03.jpg" alt="" />
        <div className="hov-in">
        <a href="#"><i className="fab fa-instagram fa-3x text-white"></i></a>
        </div>
    </div>
</div>
<div className="item">
    <div className="ins-inner-box">
        <img src="images/end-carousel/instagram-img-04.jpg" alt="" />
        <div className="hov-in">
        <a href="#"><i className="fab fa-instagram fa-3x text-white"></i></a>
        </div>
    </div>
</div>
<div className="item">
    <div className="ins-inner-box">
        <img src="images/end-carousel/instagram-img-05.jpg" alt="" />
        <div className="hov-in">
        <a href="#"><i className="fab fa-instagram fa-3x text-white"></i></a>
        </div>
    </div>
</div>
<div className="item">
    <div className="ins-inner-box">
        <img src="images/end-carousel/instagram-img-06.jpg" alt="" />
        <div className="hov-in">
        <a href="#"><i className="fab fa-instagram fa-3x text-white"></i></a>
        </div>
    </div>
</div>
<div className="item">
    <div className="ins-inner-box">
        <img src="images/end-carousel/instagram-img-07.jpg" alt="" />
        <div className="hov-in">
        <a href="#"><i className="fab fa-instagram fa-3x text-white"></i></a>
        </div>
    </div>
</div>
<div className="item">
    <div className="ins-inner-box">
        <img src="images/end-carousel/instagram-img-08.jpg" alt="" />
        <div className="hov-in">
        <a href="#"><i className="fab fa-instagram fa-3x text-white"></i></a>
        </div>
    </div>
</div>
<div className="item">
    <div className="ins-inner-box">
        <img src="images/end-carousel/instagram-img-09.jpg" alt="" />
        <div className="hov-in">
        <a href="#"><i className="fab fa-instagram fa-3x text-white"></i></a>
        </div>
    </div>
</div>
<div className="item">
    <div className="ins-inner-box">
        <img src="images/end-carousel/instagram-img-05.jpg" alt="" />
        <div className="hov-in">
        <a href="#"><i className="fab fa-instagram fa-3x text-white"></i></a>
        </div>
    </div>
</div>
</OwlCarousel>
            </div>
            </div>

        </div>
    );
}

export default EndCarousel;