import React from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Header from './../../components/header/header';
import Footer from './../../components/footer/footer';
import EndCarousel from './../../components/end-carousel/index';
import Warranty from './../../components/warranty/index';
import Article from "../../components/article";
import WomenCarousel from './womenCarousel';
import MenCarousel from './menCarousel';
import JeanwestCarousel from './jeanwestCarousel';
import { Link } from 'react-router-dom';
import EmailSubmit from './../../components/email-submit.js/index';








const Home = () => {
  return (

    <div>
      <Header />


      <div className="hero">
        <div className="carousel slide carousel-fade" id="main-carousel" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#main-carousel" data-slide-to="0" className="active"></li>
            <li data-target="#main-carousel" data-slide-to="1"></li>
            <li data-target="#main-carousel" data-slide-to="2"></li>
          </ol>


          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block img-fluid w-100" src="images/slider/banner-03.jpg" alt="" />
              <div class="carousel-caption d-none d-lg-block" style={{ marginBottom: "280px" }}>
                <h1 className="text-center" style={{ fontSize: "60px", color: "#e7ab3c" }}>به فروشگاه ما خوش آمدید</h1>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <Link to="/shop" className="btn btn-theme">ورود به فروشگاه</Link>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid w-100" src="images/slider/banner-01.jpg" alt="" />
              <div class="carousel-caption d-none d-lg-block" style={{ marginBottom: "280px" }}>
                <h1 className="text-center" style={{ fontSize: "60px", color: "#e7ab3c" }}>به فروشگاه ما خوش آمدید</h1>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <Link to="/shop" className="btn btn-theme">ورود به فروشگاه</Link>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid w-100" src="images/slider/banner-02.jpg" alt="" />
              <div class="carousel-caption d-none d-lg-block" style={{ marginBottom: "280px" }}>
                <h1 className="text-center" style={{ fontSize: "60px", color: "#e7ab3c" }}>به فروشگاه ما خوش آمدید</h1>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                <Link to="/shop" className="btn btn-theme">ورود به فروشگاه</Link>
              </div>
            </div>


          </div>


          <a href="#main-carousel" className="carousel-control-prev" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            <span className="sr-only" aria-hidden="true">Prev</span>
          </a>
          <a href="#main-carousel" className="carousel-control-next" data-slide="next">
            <span className="carousel-control-next-icon"></span>
            <span className="sr-only" aria-hidden="true">Next</span>
          </a>
        </div>
      </div>


      <section className="product my-5 py-5 wow zoomIn" data-wow-delay="0.1s" id="product">
        <h4 className="product-title sideline mx-5">کالکشن های جدید</h4>
        <div className="container">
          <div className="row">

            <div className="col-md-4">
              <Link to="/shop" >
                <div className="product-img-container">
                  <img src="images/xbanner-1.jpg.pagespeed.ic.WtoTbL-e6z.webp" alt="" className="product-img img-fluid" />
                  <div className="layout"></div>
                  <div className="layout-text">مردانه</div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link to="/shop" >
                <div className="product-img-container">
                  <img src="images/xbanner-2.jpg.pagespeed.ic.N15HuVVX4r.webp" alt="" className="product-img img-fluid" />
                  <div className="layout"></div>
                  <div className="layout-text">زنانه</div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/shop" >
                <div className="product-img-container">
                  <img src="images/xbanner-3.jpg.pagespeed.ic.BQA2S7WT5H.webp" alt="" className="product-img img-fluid" />
                  <div className="layout"></div>
                  <div className="layout-text">بچگانه</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>


      <div className="wcollection py-5 my-5 fact-right wow fadeInUp" data-wow-delay="0.5s">
        <h4 className="product-title sideline mx-5">پیشنهادات ویژه زنانه</h4>
        <div className="container">
          <div className="row">
            <div className="col-md-8">


              <WomenCarousel />



            </div>
            <div className="col-md-4 d-none d-md-block position-relative">
              <img src="images/woman-side.jpg" alt="" className="img-fluid" />
              <img className="position-absolute" src="images/acount-logo.png" width="100" height="100" alt=""
                style={{ top: "0", left: "0" }} />
            </div>
          </div>
        </div>
      </div>


      <div className="mcollection py-5 my-5 fact-left wow fadeInUp" data-wow-delay=".7s">
        <h4 className="product-title sideline mx-5">پیشنهادات ویژه مردانه</h4>
        <div className="container">
          <div className="row">
            <div className="col-md-4 d-none d-lg-block position-relative">
              <img src="images/man-side.jpg" alt="" className="img-fluid" />
              <img className="position-absolute" src="images/acount-logo.png" width="100" height="100" alt=""
                style={{ top: "0", right: "0" }} />
            </div>
            <div className="col-md-8">

              <MenCarousel />

            </div>
          </div>
        </div>
      </div>


      <div className="wcollection py-5 mt-5 fact-right wow fadeInUp" data-wow-delay="0.5s">
        <h4 className="product-title sideline mx-5">محصولات جین وست</h4>
        <div className="container">
          <div className="row">
            <div className="col-md-8">


              <JeanwestCarousel />



            </div>
            <div className="col-md-4 d-none d-md-block position-relative">
              <img src="images/jeanwest.png" alt="" className="img-fluid" />
              <img className="position-absolute" src="images/acount-logo.png" width="100" height="100" alt=""
                style={{ top: "0", left: "0" }} />
            </div>
          </div>
        </div>
      </div>
      <EmailSubmit />
      <Article />






      <Warranty />




      <EndCarousel />

      <Footer />


    </div>
  );
};

export default Home;