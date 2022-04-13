import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import MyContext from './../../context/myContext';


const Product = ({ product }) => {


    const context = useContext(MyContext);
    const navigate = useNavigate()

    return (

        <div key={product.id}>
            <div className="products-single fix shadow">
                <div className="box-img-hover">
                    <div className="type-lb">
                        <p className="sale" style={{ direction: "rtl" }}>{product.discount}% تخفیف</p>
                    </div>
                    <img src={product.image} className="img-fluid" alt="Image" />
                    <div className="mask-icon">
                        <ul>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fas fa-eye"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li>
                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="far fa-heart"></i></a></li>
                        </ul>
                        <button className="btn cart" onClick={() => {
                            // dispatch(productDetail(product))
                            context.handleProductDetail(product)
                            navigate(`/productDetail/${product.id}`)
                            // navigate(`productDetail/${product.id}`)
                        }} >مشاهده جزئیات</button>
                    </div>
                </div>
                <div className="why-text">
                    <h3>{product.title}</h3>
                    <div className="stars my-3 text-center">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <p>برند : {product.brand}</p>
                    <h3 style={{color:"#1ac977",fontSize:"18px", direction: "rtl"}} className="text-muted line-through my-2">{product.price} تومان</h3>
                    <h2 style={{color:"#1ac977",fontSize:"18px", direction: "rtl"}}>{(product.price) * ((100 - product.discount) / 100)} تومان</h2>
                </div>
            </div>
        </div>




        // <div key={product.id} style={{ cursor: 'pointer' }} className="product user-table card shadow" >

        //     <div className="text-center">
        //         <img src={product.image} alt='img' className="image-fluid" width='250' height='250' />
        //     </div>
        //     <h5 className="card-header bg-secondary text-light text-center">{product.title}</h5>
        //     <ul className="list-group list-group-flush text-center">
        //         <li className="list-group-item">{product.price}تومان</li>
        //         <li className="list-group-item"> {product.category}</li>
        //         <li className="cut-text list-group-item">{product.description}</li>
        //     </ul>
        //     {/* <Link to={`detail/${product.id}`}> */}
        //     <button className="btn btn-secondary btn-block">جزئیات محصول

        //     </button>
        // </div>


    );
}

export default Product;