import React from "react";
import Product from "./Product";

import data from '../seed.json'

class ProductList extends React.Component{

    constructor(props){
        super(props)

        this.state={
            newData:[]
        }

        this.upVote = this.upVote.bind(this)
    }


    upVote(productId){
        console.log("UpVote Called for " + productId)
        const newProducts = this.state.newData.map((p)=>{
            if(p.id === productId){
                return Object.assign({}, p, {votes:p.votes+1});
            }else{
                return p;
            }
        });

        this.setState({newData:newProducts})
        console.log(this.state.newData)
        
        

   }

    getRandomVote = function(){
        return Math.floor((Math.random() * 50) + 15);
    }

    renderProducts = function(){
        let newSortedData = this.state.newData.sort((a, b)=>{
            return b.votes  - a.votes
        })
        return newSortedData.map((product)=>{
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
                onUpVote={this.upVote}
            />
                
            );
        })
    }

    componentWillMount(){

        let newProducts = data.map((p)=>{
            p.votes = this.getRandomVote();
            return p;
        });

        newProducts = newProducts.sort((a,b) =>{
            return (b.votes-a.votes);
        });

        this.setState({
            newData:newProducts
        });

    }

   
    componentDidUpdate(){
       
    }

    render(){
        console.log("Called Once")
        //console.log(this.state.productsData);
        //this.generateVote()
        return(
            <div>
               {this.renderProducts()}
            </div>
        );
    }

}

export default ProductList;