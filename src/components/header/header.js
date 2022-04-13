import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ReactSearchBox from "react-search-box";
import Sidebar from "react-sidebar";
import MyContext from './../../context/myContext';
import Search from './../../test';

const Header = () => {
  const context = useContext(MyContext);
  console.log(context.products)
  const [sidebarOpen, onSetSidebarOpen] = useState(false)
  return (
    <div>
      <Sidebar
        sidebar={
          <div className="card m-4">
            <div className="card-header">
              مبلغ قابل پرداخت: {context.totalPrice} تومان
            </div>
            <div className="card-body text-center">

              {context.cartProduct.length > 0 ? (
                context.cartProduct.map((product, i) => (
                  <ul key={i} class="list-group list-group-flush">
                    <li class="list-group-item">
                      <div className="row">
                        <img className="img-fluid ml-1" src={product.image} alt="" width="80" />
                        {product.title}<br />
                        {product.count} عدد - {product.price * ((100 - product.discount) / 100)} تومان
                        <button className="btn btn-sm btn-outline-secondary border-0 mr-auto" onClick={() => context.handleDeleteCartProduct(product.id)}><i className="fas fa-times"></i></button>
                      </div>
                      <hr />
                    </li>

                  </ul>
                ))
              ) : (
                <div className="my-2">سبد خرید شما خالی است</div>
              )}


              <Link to="/shoppingCard" className="btn btn-sm btn-cart">مشاهد سبد خرید</Link>
            </div>
          </div>
        }
        open={sidebarOpen}
        onSetOpen={onSetSidebarOpen}
        styles={{ sidebar: { background: "black", zIndex: "1000", position: "fixed", height: "100vh", width: "350px" } }}
      >
      </Sidebar>
      <div className="top-bar">
        <div className="container-fluid">
          <div className="row d-flex justify-content-between align-items-center py-2">
            <div className="col-md-8 d-none d-md-flex">

              {/* <div className="search mr-3"> <i className="fa fa-search"></i> <input type="text" className="form-control"
                placeholder="جستجو ..." /> <button
                  className="btn btn-sm btn-secondary">جستجو</button>
              </div> */}
              <Search />
            </div>
            <div className="
              col-md-4
              d-flex
              justify-content-md-end justify-content-center
              p-1
              pl-md-3
              py-md-0
            ">
              <div className="col-md-3 d-flex justify-content-end align-items-center">
                <button type="button" className="btn btn-outline-secondary btn-login" data-toggle="modal" data-target="#usermodal"><i
                  className="fas fa-user ml-1 mt-1"></i>ورود / ثبت نام</button>

                <div className="side-line mr-2"></div>


                <button data-toggle="tooltip" data-placement="bottom" title="سبد خرید" onClick={() => onSetSidebarOpen(true)} className="btn bg-transparent border-0 text-secondary mr-2 d-flex justify-content-end"><i className="fas fa-shopping-cart fa-2x pr-1"></i> <span className="badge badge-pill bg-success product-count text-white">{context.cartProduct.length}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="modal fade" id="usermodal" tabindex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h3 style={{ color: "#1ac977" }} className="modal-title">ورود به حساب کاربری</h3>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">آدرس ایمیل</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="ایمیل" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">کلمه عبور</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="کلمه عبور" />
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1">مرا به خاطر بسپار</label>
                </div>
                <button type="submit" className="btn btn-sm btn-cart btn-block">
                  ورود
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>


      <nav className="navbar navbar-expand-md navbar-dark bg-dark btco-hover-menu" id="navbar">
        <a className="navbar-brand" href="#">
          <img src="images/b-logo.png" alt="logo" width="40" height="40" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">صفحه اصلی <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop">فروشگاه</NavLink>
            </li>
            {/* <li className="nav-item dropdown megamenu-li">
              <a className="nav-link dropdown-toggle" href="#" id="dropdownId-1" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">دسته ها</a>
              <ul className="dropdown-menu megamenu-dore" aria-labelledby="dropdownId-1">
                <div className="row">
                  <div class="col-lg-4 border-left">
                    <h6>دوره های حضوری</h6>
                    <a className="dropdown-item" href="#">کیف</a>
                    <a className="dropdown-item" href="#">کفش</a>
                    <a className="dropdown-item" href="#">هودی</a>
                    <a className="dropdown-item" href="#">کاپشن</a>
                    <a className="dropdown-item" href="#">بلوز</a>
                    <a className="dropdown-item" href="#">پلیور</a>

                  </div>
                  <div className="col-lg-4  border-left">
                    <h6>دوره های آنلاین</h6>
                    <a className="dropdown-item" href="#">کیف</a>
                    <a className="dropdown-item" href="#">کفش</a>
                    <a className="dropdown-item" href="#">هودی</a>
                    <a className="dropdown-item" href="#">کاپشن</a>
                    <a className="dropdown-item" href="#">بلوز</a>
                    <a className="dropdown-item" href="#">پلیور</a>
                  </div>
                  <div class="col-md-4">
                    <div class="row">
                      <div class="col-lg-12">
                      <img src="images/special_suggestions.jpg" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </li> */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="https://bootstrapthemes.co" id="navbarDropdownMenuLink"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                جدیدترین ها
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><NavLink className="dropdown-item" to="/shop">کالکشن جدید زنانه</NavLink></li>
                <li><NavLink className="dropdown-item" to="/shop">کالکشن جدید مردانه</NavLink></li>
                <li><NavLink className="dropdown-item" to="/shop">کالکشن جدید بچگانه</NavLink></li>
              </ul>
            </li>
         
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">درباره ما</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">تماس با ما</NavLink>
            </li>

          </ul>
        </div>

      </nav>
    </div>
  );
}

export default Header;