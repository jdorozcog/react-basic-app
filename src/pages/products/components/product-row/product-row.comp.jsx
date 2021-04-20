import React from 'react';

import './product-row.style.css';
import '../product-category-row/product-category-row.style.css';
import '../product-row/product-row.style.css';
const ProductRow = () =>{
    return(
        <div>
            <div className="name">Name   Price</div>
            <div className="product-category-row-container">
                <div className="name1">Sporting Goods</div>
            </div>
            <div className="product-row-container">
                <div className="name2">Football  $49.99 </div>
            </div>   
            <div className="product-row-container">
                <div className="name2">Baseball  $9.99</div>
            </div>   
            <div className="product-row-container">
                <div className="name2">Basketball  $29.99</div>
            </div>
            <div className="product-category-row-container">
                <div className="name1">Electronics  </div>
            </div>
            <div className="product-row-container">
                <div className="name2">iPod Touch $99.99</div>
            </div>   
            <div className="product-row-container">
                <div className="name2">iPhone 5 Touch $399.99</div>
            </div>   
            <div className="product-row-container">
                <div className="name2">Nexus7  $199.99</div>
            </div>
        
        
    </div>

    )
}
export default ProductRow;