import React from 'react';
import ProductTable from '../product-table/product-table.comp';
import SearchBar from '../search-bar/search-bar.comp';

import './filterable-product-table.style.css';

const FilterableProductTable = () =>{
    return(
        <div className="filterable-product-table-container">
            <SearchBar/>
            <ProductTable/>
        </div>
    )
}
export default FilterableProductTable;