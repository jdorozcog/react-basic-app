import React from 'react';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';

import './product-table.style.css';

const ProductTable = () =>{
    return(
        <div className="product-table-container">
            <ProductCategoryRow/>
            <ProductRow/>
        </div>
    )
}
export default ProductTable;