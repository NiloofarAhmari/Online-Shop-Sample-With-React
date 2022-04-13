import React, { useContext } from 'react'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import MyContext from '../../context/myContext';
import Product from '../product/product';

const MenCarousel = () => {



    const options = {
        margin: 10,
        responsiveClass: true,
      
        nav: true,
        dots: true,
        loop:true,
        autoplay: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
       
        responsive: {
            400: {
                items: 1,
            },
         
            1000: {
                items: 3,
    
            }
        },
    };
    const context = useContext(MyContext);



    const filteredProduct = context.products.filter((product) => product.category === "مردانه");
    return (


            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                <OwlCarousel className="owl-theme tab-slide" id="tab-slider" style={{ direction: "ltr" }} {...options}>
                    {filteredProduct.map((product, i) => (

                        <Product product={product} />

                    ))}
                </OwlCarousel>
            </div>

    );
}

export default MenCarousel;