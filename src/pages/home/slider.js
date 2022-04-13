import React from 'react';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";



const Slider = () => {

  return (
    <div className="row">

      <OwlCarousel className="owl-theme"  style={{direction:"ltr"}} autoplay={true}  loop margin={10} nav dot>
     

        {/* <div className="item">
          <img src="images/slider/4.jpg" />
      </div>
      <div className="item">
          <img src="images/slider/2.jpg" />
      </div>
      <div className="item">
          <img src="images/slider/3.jpg" />
      </div>
      <div className="item">
          <img src="images/slider/1.jpg" />
      </div> */}


        <div className="item">
          <img src="images/1.jpg" />
        </div>
        <div className="item">
          <img src="images/2.jpg" />
        </div>
        <div className="item">
          <img src="images/3.jpg" />
        </div>
        <div className="item">
          <img src="images/4.jpg" />
        </div>
    
      </OwlCarousel>

    </div>


  );
}

export default Slider;