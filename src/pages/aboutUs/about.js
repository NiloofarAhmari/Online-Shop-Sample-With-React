import React from 'react';
import MainLayout from './../../layout/mainLayout';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <MainLayout>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>درباره ما</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">خانه</Link></li>
                                <li className="breadcrumb-item active">درباره ما</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div className="about-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="noo-sh-title">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم .</h2>
                            <p> چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-frame"> <img className="img-thumbnail img-fluid" src="images/about-img.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col-sm-6 col-lg-4">
                            <div className="service-block-inner">
                                <h3>ما قابل اعتماد هستیم</h3>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="service-block-inner">
                                <h3>ما حرفه ای هستیم</h3>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                            <div className="service-block-inner">
                                <h3>ما با تجربه هستیم</h3>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-12">
                            <h2 className="text-centet noo-sh-title">تیم حرفه ای ما</h2>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="hover-team">
                                <div className="our-team"> <img src="images/img-1.jpg" alt="" />
                                    <div className="team-content">
                                        <h3 className="title">نام همکار</h3> <span className="post">تخصص ما</span> </div>
                                    <ul className="social">
                                        <li>
                                            <a href="#" className="fab fa-facebook"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-twitter"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-google-plus"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-youtube"></a>
                                        </li>
                                    </ul>
                                    <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                                </div>
                                <div className="team-description">
                                    <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. </p>
                                </div>
                                <hr className="my-0" /> </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="hover-team">
                                <div className="our-team"> <img src="images/img-2.jpg" alt="" />
                                    <div className="team-content">
                                        <h3 className="title">نام همکار</h3> <span className="post">تخصص ما</span> </div>
                                    <ul className="social">
                                        <li>
                                            <a href="#" className="fab fa-facebook"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-twitter"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-google-plus"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-youtube"></a>
                                        </li>
                                    </ul>
                                    <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                                </div>
                                <div className="team-description">
                                    <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. </p>
                                </div>
                                <hr className="my-0" /> </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="hover-team">
                                <div className="our-team"> <img src="images/img-3.jpg" alt="" />
                                    <div className="team-content">
                                        <h3 className="title">نام همکار</h3> <span className="post">تخصص ما</span> </div>
                                    <ul className="social">
                                        <li>
                                            <a href="#" className="fab fa-facebook"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-twitter"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-google-plus"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-youtube"></a>
                                        </li>
                                    </ul>
                                    <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                                </div>
                                <div className="team-description">
                                    <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. </p>
                                </div>
                                <hr className="my-0" /> </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="hover-team">
                                <div className="our-team"> <img src="images/img-1.jpg" alt="" />
                                    <div className="team-content">
                                        <h3 className="title">نام همکار</h3> <span className="post">تخصص ما</span> </div>
                                    <ul className="social">
                                        <li>
                                            <a href="#" className="fab fa-facebook"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-twitter"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-google-plus"></a>
                                        </li>
                                        <li>
                                            <a href="#" className="fab fa-youtube"></a>
                                        </li>
                                    </ul>
                                    <div className="icon"> <i className="fa fa-plus" aria-hidden="true"></i> </div>
                                </div>
                                <div className="team-description">
                                    <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. </p>
                                </div>
                                <hr className="my-0" /> </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>

    );
}

export default About;