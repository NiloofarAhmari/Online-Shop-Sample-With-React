import React from 'react'
import MainLayout from '../../layout/mainLayout';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <MainLayout>

            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>تماس با ما</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">خانه</Link></li>
                                <li className="breadcrumb-item active"> تماس با ما </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="contact-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="contact-info-left">
                                <h2>اطلاعات تماس</h2>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                                </p>
                                <ul>
                                    <li>
                                        <p><i className="fas fa-map-marker-alt ml-1"></i>تهران، خیابان سهروردی

                                        </p>
                                    </li>
                                    <li>
                                        <p><i className="fas fa-phone-square ml-1"></i> <a href="tel:021-88888888">021-88888888</a></p>
                                    </li>
                                    <li>
                                        <p><i className="fas fa-envelope ml-1"></i><a href="mailto:info.shop@gmail.com">info.shop@gmail.com</a></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <div className="contact-form-right">
                                <h2>با ما در تماس باشید</h2>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="name" name="name" placeholder="نام و نام خانوادگی" required data-error="Please enter your name" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" placeholder="آدرس ایمیل" id="email" className="form-control" name="name" required data-error="Please enter your email" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="subject" name="name" placeholder="موضوع پیام" required data-error="Please enter your Subject" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea className="form-control" id="message" placeholder="متن پیام" rows="4" data-error="Write your message" required></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="submit-button text-center">
                                                <button className="btn hvr-hover" id="submit" type="submit">ارسال</button>
                                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>

    );
}

export default Contact;