import { createContext } from "react";

const MyContext = createContext({
    products:[],
    product: "",
    filteredProducts:[],
    sortBy:"",
    cartProduct:[],
    totalPrice:0,
    handleSearch: ()=>{},
    handleCategory: ()=>{},
    handleSort: ()=>{},
    handleBrand: ()=>{},
    handleDeleteProduct: ()=>{},
    handlePlusQuantity:()=>{},
    handleMinusQuantity:()=>{},
    handleAddProduct:()=>{},
    handleProductDetail:()=>{},
    handleDeleteCartProduct:()=>{},
    handleType:()=>{},
    handleResetFilter:()=>{},
});

export default MyContext;
