import React, { useContext } from 'react'
import MainLayout from './../../layout/mainLayout';
import { Link } from 'react-router-dom';
import { useMyContext } from '../../context/my-context';
import MyContext from './../../context/myContext';


const ShoppingCard = () => {

    const context = useContext(MyContext);
    return (
        <MainLayout>
            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>سبد خرید</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/shop">فروشگاه</Link></li>
                                <li className="breadcrumb-item active">سبد خرید</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div className="cart-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-main table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>تصویر</th>
                                            <th>نام کالا</th>
                                            <th>قیمت با اعمال تخفیف</th>
                                            <th>تعداد</th>
                                            <th>قیمت نهایی</th>
                                            <th>حذف کالا</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {context.cartProduct.length > 0 ? (
                                            context.cartProduct.map((product) => (
                                        
                                                <tr key={product.id} >
                                                    <td className="thumbnail-img">
                                                        <a href="#">
                                                            <img className="img-fluid" src={product.image} alt="" />
                                                        </a>
                                                    </td>
                                                    <td className="name-pr">
                                                        <a href="#">
                                                            {product.title}
                                                        </a>
                                                    </td>
                                                    <td className="price-pr">
                                                        <p>{product.price * ((100 - product.discount) / 100)} تومان</p>
                                                    </td>
                                                    <td className="quantity-box">
                                                        <button
                                                            className="btn btn-sm btn-outline-secondary ml-3"
                                                            onClick={()=>context.handlePlusQuantity(product.id)}
                                                        >+</button>
                                                        {product.count}
                                                        <button
                                                            className="btn btn-sm btn-outline-secondary mr-3"
                                                            onClick={()=>context.handleMinusQuantity(product.id)}
                                                        >-</button>


                                                    </td>
                                                    <td className="total-pr">
                                                        <p>{(product.price * ((100 - product.discount) / 100)*(product.count))} تومان</p>
                                                    </td>
                                                    <td className="remove-pr">
                                                    <button
                                                            className="btn btn-sm btn-outline-secondary border-0 mr-3"
                                                            onClick={()=>context.handleDeleteCartProduct(product.id)}
                                                        ><i className="fas fa-times"></i></button>
                                                  
                                                    </td>

                                                </tr>
                                       
                                            ))

                                        ) : (

                                            <div className="empty" >سبد خرید شما خالی است</div>
                                        )

                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col-lg-6 col-sm-6">
                            <div className="coupon-box">
                                <div className="input-group input-group-sm">
                                    <input className="form-control" placeholder="کد تخفیف را وارد نمایید..." aria-label="Coupon code" type="text" />
                                    <div className="input-group-append">
                                        <button className="btn btn-theme" type="button">اعمال کد تخفیف</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 col-sm-6">
                            <div className="update-box">
                                <input value="Update Cart" type="submit" />
                            </div>
                        </div> */}
                    </div>

                    <div className="row my-5">
                        <div className="col-lg-8 col-sm-12"></div>
                        <div className="col-lg-4 col-sm-12">
                            <div className="order-box">
                                {/* <h3>Order summary</h3>
                                <div className="d-flex">
                                    <h4>Sub Total</h4>
                                    <div className="ml-auto font-weight-bold"> $ 130 </div>
                                </div>
                                <div className="d-flex">
                                    <h4>Discount</h4>
                                    <div className="ml-auto font-weight-bold"> $ 40 </div>
                                </div>
                                <hr className="my-1" />
                                <div className="d-flex">
                                    <h4>Coupon Discount</h4>
                                    <div className="ml-auto font-weight-bold"> $ 10 </div>
                                </div>
                                <div className="d-flex">
                                    <h4>Tax</h4>
                                    <div className="ml-auto font-weight-bold"> $ 2 </div>
                                </div>
                                <div className="d-flex">
                                    <h4>Shipping Cost</h4>
                                    <div className="ml-auto font-weight-bold"> Free </div>
                                </div>
                                <hr /> */}
                                <div className="d-flex gr-total">
                                    <h5>مبلغ کل سفارش شما:</h5>
                                    <div className="mr-auto h5"> {context.totalPrice} تومان </div>
                                </div>
                                <hr /> </div>
                        </div>
                        <div className="col-12 d-flex shopping-box"><a href="checkout.html" className="mr-auto btn hvr-hover">ثبت و پرداخت</a> </div>
                    </div>

                </div>
            </div>
        </MainLayout >


    );
}

export default ShoppingCard;