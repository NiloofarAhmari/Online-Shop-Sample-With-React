import React, { useState, useEffect, useContext } from 'react'
import MainLayout from './../../layout/mainLayout';
import { Link, useNavigate } from 'react-router-dom';
import MyContext from './../../context/myContext';


const ProductDetail = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const context = useContext(MyContext);

    return (

        <MainLayout isLoading={isLoading}>


            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>جزئیات محصول</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/shop">فروشگاه</Link></li>
                                <li className="breadcrumb-item active">جزئیات محصول</li>
                                <li className="breadcrumb-item active">{context.product.title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div className="shop-detail-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5 col-md-6">
                            <div id="carousel-example-1" className="single-product-slider carousel slide" data-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="carousel-item active"> <img className="d-block w-100" src={`../${context.product.image}`} alt="First slide" /> </div>
                                    <div className="carousel-item"> <img className="d-block w-100" src={`../${context.product.image1}`} alt="Second slide" /> </div>
                                    <div className="carousel-item"> <img className="d-block w-100" src={`../${context.product.image2}`} alt="Third slide" /> </div>
                                </div>
                                <a className="carousel-control-prev" href="#carousel-example-1" role="button" data-slide="prev">
                                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carousel-example-1" role="button" data-slide="next">
                                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                                    <span className="sr-only">Next</span>
                                </a>
                                <ol className="carousel-indicators">
                                    <li data-target="#carousel-example-1" data-slide-to="0" className="active">
                                        <img className="d-block w-100 img-fluid" src={`../${context.product.image}`} alt="" />
                                    </li>
                                    <li data-target="#carousel-example-1" data-slide-to="1">
                                        <img className="d-block w-100 img-fluid" src={`../${context.product.image1}`} alt="" />
                                    </li>
                                    <li data-target="#carousel-example-1" data-slide-to="2">
                                        <img className="d-block w-100 img-fluid" src={`../${context.product.image2}`} alt="" />
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7 col-md-6">
                            <div className="single-product-details">
                                <h2>{context.product.title}</h2>
                                <h3><del>{context.product.price} تومان</del><span className="mr-2 acount">{context.product.discount}% تخفیف</span></h3>   
                                <h2 className="font-weight-bold text-danger">  {(context.product.price) * ((100 - context.product.discount) / 100)} تومان</h2>

                                <h4>توضیحات محصول</h4>
                                <p>{context.product.description}</p>
                                <ul>
                                    <li>
                                        <div className="form-group size-st">
                                            <label className="size-label"> سایز</label>
                                            <select id="basic" className="selectpicker show-tick form-control">
                                                <option value="0">Size</option>
                                                <option value="0">S</option>
                                                <option value="1">M</option>
                                                <option value="1">L</option>
                                                <option value="1">XL</option>
                                                <option value="1">XXL</option>
                                                <option value="1">3XL</option>
                                                <option value="1">4XL</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="form-group size-st">
                                            <label className="size-label"> رنگ</label>
                                            <select id="basic" className="selectpicker show-tick form-control">
                                                <option value="0">مشکی</option>
                                                <option value="0">سبز</option>
                                                <option value="1">قرمز</option>
                                                <option value="1">آبی</option>
                                            </select>
                                        </div>
                                        {/* <div className="form-group quantity-box">
                                            <label className="control-label">تعداد</label>
                                            <input className="form-control" type="number" />
                                        </div> */}
                                        {/* <p>تعداد</p>
                                            <button
                        className="border-0 btn-transition btn btn-outline-success"
                        // onClick={increament}
                    >+</button>
                    {/* {counter} */}
                                        {/* <button
                        className="border-0 btn-transition btn btn-outline-success"
                        // onClick={decreament}
                    >-</button> */}
                                    </li>
                                </ul>

                                <div className="price-box-bar">
                                    <div className="cart-and-bay-btn">
                                        {/* <a className="btn hvr-hover" data-fancybox-close="" href="#">Buy New</a> */}
                                        <button className="btn hvr-hover" onClick={() => {
                                            // dispatch(userAddToListAction(context.product))
                                            context.handleAddProduct(context.product)
                                            console.log(context.product)
                                            navigate('/shoppingCard')
                                        }}>

                                            اضافه به سبد خرید
                                            <span className='fa fa-plus mr-1'></span>

                                        </button>

                                    </div>
                                </div>

                                <div className="add-to-btn">
                                    <div className="add-comp">
                                        <a className="btn hvr-hover" href="#"><i className="fas fa-heart"></i> اضافه به علاقمندی</a>
                                        <a className="btn hvr-hover" href="#"><i className="fas fa-sync-alt"></i> مقایسه</a>
                                    </div>
                                    <div className="share-bar">
                                        <a className="btn hvr-hover" href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a>
                                        <a className="btn hvr-hover" href="#"><i className="fab fa-google-plus" aria-hidden="true"></i></a>
                                        <a className="btn hvr-hover" href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a>
                                        <a className="btn hvr-hover" href="#"><i className="fab fa-pinterest-p" aria-hidden="true"></i></a>
                                        <a className="btn hvr-hover" href="#"><i className="fab fa-whatsapp" aria-hidden="true"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>





            {/* <div classNameName="row">
                <div classNameName="col-md-4">
                    <img src={context.product.image} alt='img' classNameName="image-fluid" width='250' height='250' />
                </div>

                <div classNameName="col-md-8">
                    <h3>{context.product.title}</h3>


                    <p>{context.product.description}</p>
                    <h4 classNameName="text-center">{context.product.price}تومان</h4>
                    <button classNameName="btn btn-secondary btn-block" onClick={() => {
                        dispatch(userAddToListAction(context.product))
                        navigate('/shopping')
                    }}>

                        اضافه به سبد خرید
                        <span classNameName='fa fa-plus mr-1'></span>

                    </button>

                </div>
            </div> */}
        </MainLayout>
    );
}

export default ProductDetail;