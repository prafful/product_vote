import React from "react";
import Product from "./Product";

import data from '../seed.json'

class ProductList extends React.Component{

    renderProducts = function(){
        return data.map((product)=>{
            return (
                <Product 
                key = {product.id}
                id = {product.id}
                title ={product.title}
                description = {product.description}
                url={product.url}
                votes = {product.votes}
                avatar = {product.submitterAvatarUrl}
                image={product.productImageUrl}
            />
                
            );
        })
    }

    render(){
        const product = data[0];
        return(
            <div>
               {this.renderProducts()}
            </div>
        );
    }

}

export default ProductList;