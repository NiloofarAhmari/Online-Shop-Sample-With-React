import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="footer pt-4">
                <div className="container-fluid">
                    <p className="text-center">ما را در شبکه های اجتماعی دنبال کنید و از جدیدترین اخبار مطلع شوید</p>
                    <div className="row col-md-12 my-1">
                        <div className="footer-link col-md-4">
                            <h5>دسترسی سریع
                            </h5>
                            <div><a href="#"><i className="fa fa-angle-left ml-1"></i> ارتباط با ما</a></div>
                            <div><a href="#"><i className="fa fa-angle-left ml-1"></i>درباره فروشگاه</a></div>
                            <div><a href="#"><i className="fa fa-angle-left ml-1"></i>ارسال سریع کالا</a></div>
                            <div><a href="#"><i className="fa fa-angle-left ml-1"></i>سوالات متداول</a></div>
                        </div>
                        <div className="col-md-4 my-1">
                            <p> <span className="myfooter-icon ml-1"> <i className="fa fa-phone footer-icon"></i></span> <span
                                className="font-weight-bold">شماره تماس</span>
                                <div className="footer-line"></div>
                            </p>
                            <p>021-88888888</p>


                            <p> <span className="myfooter-icon ml-1"> <i className="fa fa-envelope footer-icon"></i></span> <span
                                className="font-weight-bold"> پست الکترونیکی</span>
                                <div className="footer-line"></div>
                            </p>
                            <p> info.shop@gmail.com</p>
                            <address>
                                <p>
                                    <span className="myfooter-icon ml-1"> <i className="fa fa-map-marker-alt footer-icon"></i></span>
                                    <span className="font-weight-bold">آدرس</span>
                                    <div className="footer-line"></div>
                                    تهران، خیابان سهروردی

                                </p>
                            </address>
                        </div>

                        <div className="col-md-4 d-flex justify-content-center align-items-center">
                            <img src="images/banilogo.svg" alt="logo" className="footer-img img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-6 my-1 mx-auto">
                        <div className="social d-flex justify-content-between align-items-center">
                            <a title="واتساپ" className="social-icon" href="#"><i className="fab fa-whatsapp"></i></a>
                            <a title="اینستاگرام" className="social-icon" href="#"><i className="fab fa-instagram"></i></a>
                            <a title="لینکدین" className="social-icon" href="#"><i className="fab fa-linkedin"></i></a>
                            <a title="آپارات" className="social-icon" href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </footer>


            <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
        </div>
    );
}

export default Footer;