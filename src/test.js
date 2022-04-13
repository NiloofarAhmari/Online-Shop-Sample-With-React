import React, { useContext } from 'react';
import ReactSearchBox from "react-search-box";
import { useNavigate } from 'react-router-dom';
import MyContext from './context/myContext';

export default function Search() {
    const navigate = useNavigate()
    const context = useContext(MyContext);

    return (
        <ReactSearchBox
            width="100%"
            placeholder="جستجو..."
            data={context.products}
            onSelect={(product) =>
                context.handleProductDetail(product)
                // context.handleProductDetail(title)
                // navigate(`/productDetail/${record}`)
                // console.log(record)
                // navigate(`/shop`)
            }
            onFocus={() => {
                console.log("This function is called when is focussed");
            }}
            onChange={(title) => console.log(title)}
            // autoFocus
            leftIcon={<i className="fa fa-search"></i>}
            iconBoxSize="48px"
        />
    );
}
