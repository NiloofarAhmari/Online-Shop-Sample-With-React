import React, { useState, useEffect } from 'react';
import MyContext from './context/myContext';


const GlobalState = (props) => {

    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [isLoading, setIsLoading] = useState(true)
    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [cartProduct, setCartProduct] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetch('../../data/data.json')
            .then((res) => res.json())
            .then((products) => {
                setProducts(products)
                setIsLoading(false)
            });
    }, []);





    useEffect(() => {

        const categoryFiltered = selectedCategory
            ? products.filter((item) => item.category === selectedCategory)
            : products;
        const brandcategoryfilter = brand
            ? categoryFiltered.filter((i) => i.brand === brand)
            : categoryFiltered;


        const typeFiltered = type
            ? brandcategoryfilter.filter((item) => item.type === type)
            : brandcategoryfilter;
        setFilteredProducts(
            sortBy ? [...typeFiltered].sort((a, b) =>
                sortBy === "lowest" ? a.price - b.price : b.price - a.price)
                : [...typeFiltered].sort((a, b) => (a.id > b.id ? 1 : -1))

        );
    }, [selectedCategory, sortBy, products, brand, type]);


    useEffect(() => {
        const lowerCased = search.toLowerCase();
        setFilteredProducts(products.filter((product) => product.title.toLowerCase().includes(lowerCased))
        );
        
    }, [search, products]);


    useEffect(() => {
        const totalArray = cartProduct.map(product => (
            product.price * ((100 - product.discount) / 100) * product.count
        ))
        const totalPrice = totalArray.filter(x => x > 0).reduce((x, y) => x + y, 0)
        // console.log(totalArray)
        // console.log(totalPrice)
        setTotalPrice(totalPrice)
    }, [cartProduct]);

    // const filteredProduct = (filter, filterType) => {
    //     return products.filter((product) => product.filterType === filter)
     
    // }





    const handleSearch = (e) => {
        setSearch(e.target.value);
    }
    const handleCategory = (e) => {
        setSelectedCategory(e.target.value);
    }
    const handleBrand = (e) => {
        setBrand(e.target.value);
    }
    const handleSort = (e) => {
        setSortBy(e.target.value);
    }
    const handleAddProduct = (product) => {
        const newProducts = [...cartProduct]
        product.count = 1;
        if (newProducts.indexOf(product) === -1){
            newProducts.push(product);
            setCartProduct(newProducts)
        }
   
    
    

    }
    const handleProductDetail = (product) => {
        setProduct(product)
    }
    const handlePlusQuantity = (id) => {

        const newCartProduct = [...cartProduct];

        const cartIndex = newCartProduct.findIndex(t => t.id === id);
        const product = newCartProduct[cartIndex];
        product.count = product.count + 1;
        setCartProduct(newCartProduct);

    }
    const handleMinusQuantity = (id) => {

        const newCartProduct = [...cartProduct];

        const cartIndex = newCartProduct.findIndex(t => t.id === id);
        const product = newCartProduct[cartIndex];

        if (product.count !== 1) {
            product.count = product.count - 1;
            setCartProduct(newCartProduct);
        }

    }

    const handleDeleteCartProduct = (id) => {
        const newCartProduct = [...cartProduct];
        const filteredProduct = newCartProduct.filter(t => t.id !== id);
        setCartProduct(filteredProduct)
    };
    const handleType = (e) => {
        setType(e.target.value);

    }
    const handleResetFilter =()=>{
        setSelectedCategory(""); 
        setSearch("");
        setType("");
        setBrand("");
        setSortBy("")
    }

    return (
        <MyContext.Provider
            value={{
                products: products,
                product: product,
                cartProduct: cartProduct,
                filteredProducts: filteredProducts,
                sortBy: sortBy,
                // totalQuantity: totalQuantity,
                totalPrice: totalPrice,
                handleSearch: handleSearch,
                handleCategory: handleCategory,
                handleSort: handleSort,
                handleBrand: handleBrand,
                handleAddProduct: handleAddProduct,
                handleProductDetail: handleProductDetail,
                handlePlusQuantity: handlePlusQuantity,
                handleMinusQuantity: handleMinusQuantity,
                handleDeleteCartProduct: handleDeleteCartProduct,
                handleType: handleType,
                handleResetFilter:handleResetFilter,
                // handleFilteredProducts: handleFilteredProducts,
                // handleDeleteProduct: handleDeleteProduct,
                // handlePlusTodo: handlePlusTodo,
                // handleMinusTodo: handleMinusTodo
            }}
        >
            {props.children}
        </MyContext.Provider>
    );
}

export default GlobalState;