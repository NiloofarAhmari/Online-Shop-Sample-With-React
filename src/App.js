import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Product from './pages/product/product';
import Shop from './pages/product/shop';
import ProductDetail from './pages/product/productDetail';
import ShoppingCard from './pages/product/shoppingCard';
import About from './pages/aboutUs/about';
import Contact from './pages/contactUs/contact';
import SideCart from './pages/product/sideCart';
import ScrollToTop from './components/scrollTop';



const App = () => {


  return (


    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='shop' element={<Shop />} />
          {/* <Route path='slider' element={<Slider />} />
            <Route path='react-component' element={<ReactComponent />}>
              <Route path='use-cc' element={<UseClassComponentPage />} />
              <Route path='use-fc' element={<UseFunctionComponentPage />} />
            </Route>
            <Route path='redux' element={<ReduxPageIndex />}/>
            <Route path='context' element={<ContextPageIndex />}/>
            <Route path='shopping' element={<Shopping />} />
            <Route path='users' element={<UserPage />} />
            <Route path='users/new' element={<UserNewPage />} />
            <Route path='users/edit/:id' element={<UserEditPage />} />
            <Route path='store' element={<StoreIndexPage />} />
            <Route path='store2' element={<StoreIndexPage2 />} />
            <Route path='store/detail/:id' element={<StoreDetail />} />
            {/* <Route path='store2/detail/:id' element={<StoreDetail2 />} /> */}
          <Route path='productDetail/:id' element={<ProductDetail />} />
          <Route path='shoppingCard' element={<ShoppingCard />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='sideCart' element={<SideCart />} />



          {/* <Route path='*' element={<PageNotFound />} /> */}
        </Routes>
        {/* <Slider/> */}
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
