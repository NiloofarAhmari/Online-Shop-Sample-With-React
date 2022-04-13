import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layout/mainLayout';
import Product from './product';
import MyContext from './../../context/myContext';
import ProductList from './product-list';

const Shop = () => {

    const context = useContext(MyContext);

    // const [products, setProducts] = useState([]);
    // const [filteredProducts, setFilteredProducts] = useState([]);
    // const [selectedCategory, setSelectedCategory] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    // const [search, setSearch] = useState("");
    // const [brand, setBrand] = useState("");
    // const [sortBy, setSortBy] = useState("");

    // useEffect(() => {
    //     setIsLoading(false)

    // }, [context.products]);



    //     useEffect(() => {

    //     const categoryFiltered = selectedCategory
    //       ? products.filter((item) => item.category === selectedCategory)
    //       : products;
    //    const brandcategoryfilter=brand
    //       ?categoryFiltered.filter((i)=> i.brand === brand )
    //       :categoryFiltered;

    //       setFilteredProducts(
    //         sortBy ? [...brandcategoryfilter].sort((a, b) =>
    //           sortBy === "lowest" ? a.price - b.price : b.price - a.price)
    //           : [...brandcategoryfilter].sort((a, b) => (a.id > b.id ? 1 : -1))

    //       );
    //     }, [selectedCategory, sortBy, products,brand]);


    //     useEffect(() => {
    //       const lowerCased = search.toLowerCase();
    //       setFilteredProducts(products.filter((product) => product.title.toLowerCase().includes(lowerCased))
    //       );
    //     }, [search,products]);





    return (
        <MainLayout isLoading={isLoading}>




            <div className="all-title-box">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>فروشگاه</h2>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">خانه</Link></li>
                                <li className="breadcrumb-item active">فروشگاه</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>



            <div className="shop-box-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
                            <div className="product-categori">
                                <div className="search-product">
                                    <form action="#">
                                        <input className="form-control" placeholder="جستجو..." type="text"
                                            onChange={context.handleSearch}
                                        />
                                        <button type="submit"> <i className="fa fa-search"></i> </button>
                                    </form>
                                </div>
                                <div className="filter-sidebar-left">
                                    <div className="title-left">
                                        <h3>دسته بندی</h3>
                                        <button className="btn btn-sm btn-cart mb-2" onClick={context.handleResetFilter}>حذف فیلترها</button>
                                    </div>
                                    <div className="list-group list-group-collapse list-group-sm list-group-tree" id="list-group-men" data-children=".sub-men">
                                        <div className="list-group-collapse sub-men">
                                            <a className="list-group-item list-group-item-action" href="#sub-men1" data-toggle="collapse" aria-expanded="true" aria-controls="sub-men1">مردانه <small className="text-muted">(9)</small>
                                            </a>
                                            <div className="collapse show" id="sub-men1" data-parent="#list-group-men">
                                                <div className="list-group">

                                                    <button style={{ cursor: "pointer" }} value="بلوز مردانه" onClick={context.handleType} className="list-group-item list-group-item-action">بلوز <small className="text-muted">(5)</small></button>
                                                    <button style={{ cursor: "pointer" }} value="کیف مردانه" onClick={context.handleType} className="list-group-item list-group-item-action">کیف <small className="text-muted">(4)</small></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-collapse sub-men">
                                            <a className="list-group-item list-group-item-action" href="#sub-men2" data-toggle="collapse" aria-expanded="false" aria-controls="sub-men2">زنانه
                                                <small className="text-muted">(9)</small>
                                            </a>
                                            <div className="collapse" id="sub-men2" data-parent="#list-group-men">
                                                <div className="list-group">
                                                    <button style={{ cursor: "pointer" }} value="بلوز زنانه" onClick={context.handleType} className="list-group-item list-group-item-action">بلوز <small className="text-muted">(5)</small></button>
                                                    <button style={{ cursor: "pointer" }} value="کیف زنانه" onClick={context.handleType} className="list-group-item list-group-item-action">کیف <small className="text-muted">(3)</small></button>
                                                    <button style={{ cursor: "pointer" }} value="هودی زنانه" onClick={context.handleType} className="list-group-item list-group-item-action">هودی <small className="text-muted">(1)</small></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-collapse sub-men">
                                            <a className="list-group-item list-group-item-action" href="#sub-kid" data-toggle="collapse" aria-expanded="false" aria-controls="sub-kid">بچگانه
                                                <small className="text-muted">(9)</small>
                                            </a>
                                            <div className="collapse" id="sub-kid" data-parent="#list-group-men">
                                                <div className="list-group">
                                                    <button style={{ cursor: "pointer" }} value="بلوز بچگانه" onClick={context.handleType} className="list-group-item list-group-item-action">بلوز <small className="text-muted">(2)</small></button>
                                                    <button style={{ cursor: "pointer" }} value="کیف بچگانه" onClick={context.handleType} className="list-group-item list-group-item-action">کیف <small className="text-muted">(4)</small></button>
                                                    <button style={{ cursor: "pointer" }} value="ژیله بچگانه" onClick={context.handleType} className="list-group-item list-group-item-action">ژیله <small className="text-muted">(1)</small></button>
                                                    <button style={{ cursor: "pointer" }} value="کاپشن بچگانه" onClick={context.handleType} className="list-group-item list-group-item-action">کاپشن <small className="text-muted">(2)</small></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="filter-price-left">
                                    <div className="title-left">
                                        <h3>بر اساس قیمت</h3>
                                    </div>
                                    <div className="price-box-slider">
                                        <div id="slider-range"></div>
                                        <p>
                                            <input type="text" id="amount" readonly style={{ border: "0", color: "#fbb714", fontWeight: "bold" }} />
                                            <button className="btn hvr-hover" type="submit">Filter</button>
                                        </p>
                                    </div>
                                </div> */}
                                <hr />
                                <div className="filter-brand-left">

                                    <div className="brand-box">
                                        <ul>
                                            {/* {products.map((product) => (

                                                <li key={product.id}>
                                                    <div className="radio radio-danger">
                                                        <input name={product.title} id={product.id} value={product.category} type="radio"
                                                          onChange={(e) => setSelectedCategory(e.target.value)}
                                                        />
                                                        <label for={product.id}> {product.category} </label>
                                                    </div>
                                                </li>


                                            ))} */}
                                            <li>
                                                <div className="radio radio-danger">
                                                    <input name="survey" id="Radios" value={""} type="radio"
                                                        onChange={context.handleCategory} />
                                                    <label for="Radios"> همه </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="radio radio-danger">
                                                    <input name="survey" id="Radios1" value="زنانه" type="radio"
                                                        onChange={context.handleCategory} />
                                                    <label for="Radios1"> زنانه </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="radio radio-danger">
                                                    <input name="survey" id="Radios2" value="مردانه" type="radio"
                                                        onChange={context.handleCategory} />
                                                    <label for="Radios2"> مردانه </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="radio radio-danger">
                                                    <input name="survey" id="Radios3" value="بچگانه" type="radio"
                                                        onChange={context.handleCategory} />
                                                    <label for="Radios3"> بچگانه </label>
                                                </div>
                                            </li>
                                        </ul>
                                        <hr />
                                        <div className="title-left">
                                            <h3>برند</h3>
                                        </div>
                                        <div className="brand-box">
                                            <ul>
                                                <li>
                                                    <div className="radio radio-danger">
                                                        <input name="brand" id="Radios" value={""} type="radio"
                                                            onChange={context.handleBrand} />
                                                        <label for="Radios"> همه </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="radio radio-danger">
                                                        <input name="brand" id="Radios4" value="آدیداس" type="radio"
                                                            onChange={context.handleBrand} />
                                                        <label for="Radios4"> آدیداس </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="radio radio-danger">
                                                        <input name="brand" id="Radios5" value="نایک" type="radio"
                                                            onChange={context.handleBrand} />
                                                        <label for="Radios5"> نایک </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="radio radio-danger">
                                                        <input name="brand" id="Radios6" value="جین وست" type="radio"
                                                            onChange={context.handleBrand} />
                                                        <label for="Radios6"> جین وست </label>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="radio radio-danger">
                                                        <input name="brand" id="Radios7" value="ال سی وایکیکی" type="radio"
                                                            onChange={context.handleBrand} />
                                                        <label for="Radios7">ال سی وایکیکی</label>
                                                    </div>
                                                </li>
                                                <hr />
                                                {/* <li>
                                                <div className="radio radio-danger">
                                                    <input name="survey" id="Radios2" value="No" type="radio" />
                                                    <label for="Radios2"> A Bathing Ape </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="radio radio-danger">
                                                    <input name="survey" id="Radios3" value="declater" type="radio" />
                                                    <label for="Radios3"> The Hundreds </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="radio radio-danger">
                                                    <input name="survey" id="Radios4" value="declater" type="radio" />
                                                    <label for="Radios4"> Alife </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="radio radio-danger">
                                                    <input name="survey" id="Radios5" value="declater" type="radio" />
                                                    <label for="Radios5"> Neighborhood </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="radio radio-danger">
                                                    <input name="survey" id="Radios6" value="declater" type="radio" />
                                                    <label for="Radios6"> CLOT </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="radio radio-danger">
                                                    <input name="survey" id="Radios7" value="declater" type="radio" />
                                                    <label for="Radios7"> Acapulco Gold </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="radio radio-danger">
                                                    <input name="survey" id="Radios8" value="declater" type="radio" />
                                                    <label for="Radios8"> UNDFTD </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="radio radio-danger">
                                                    <input name="survey" id="Radios9" value="declater" type="radio" />
                                                    <label for="Radios9"> Mighty Healthy </label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="radio radio-danger">
                                                    <input name="survey" id="Radios10" value="declater" type="radio" />
                                                    <label for="Radios10"> Fiberops </label>
                                                </div>
                                            </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
                            <div className="right-product-box">
                                <div className="product-item-filter row">
                                    <div className="col-12 col-sm-8 p-0 text-sm-left">
                                        <div className="toolbar-sorter-right">
                                            <h2 className="badge text-large badge-pill badge-secondary">تعداد : {context.filteredProducts.length}</h2>
                                            <span>مرتب سازی بر اساس </span>
                                            <select id="basic" className="selectpicker show-tick form-control" data-placeholder="$ USD"
                                                onChange={context.handleSort}
                                                value={context.sortBy}
                                            >
                                                <option data-display="Select">همه</option>
                                                {/* <option value="1">بیشترین تخفیف</option> */}
                                                <option value="highest">گرانترین</option>
                                                <option value="lowest">ارزانترین</option>
                                                {/* <option value="4">پرفروش</option> */}
                                            </select>
                                        </div>
                                        {/* <p>Showing all 4 results</p> */}
                                    </div>
                                    <div className="col-12 col-sm-4 text-center text-sm-right">
                                        <ul className="nav nav-tabs mr-auto">
                                            <li>
                                                <a className="nav-link active" href="#grid-view" data-toggle="tab"> <i className="fa fa-th"></i> </a>
                                            </li>
                                            <li>
                                                <a className="nav-link" href="#list-view" data-toggle="tab"> <i className="fa fa-list-ul"></i> </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="row product-categorie-box">
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane fade show active" id="grid-view">
                                            <div className="row">

                                                {context.filteredProducts.map((product) => (
                                                    <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                        <Product product={product} />
                                                    </div>

                                                ))}
                                            </div>

                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="list-view">
                                            <div className="list-view-box">
                                                <div className="row">

                                                    {context.filteredProducts.map((product) => (
                                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                                            <ProductList product={product} />
                                                        </div>


                                                    ))}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </MainLayout>
    );
}

export default Shop;