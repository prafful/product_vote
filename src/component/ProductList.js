import React from "react";
import Product from "./Product";

import data from '../seed.json'

class ProductList extends React.Component{

    render(){
        console.log(data)
        return(
            <div>
                <Product />
            </div>
        );
    }

}

export default ProductList;