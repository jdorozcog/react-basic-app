import React from 'react';

import './product-row.style.css';
import '../product-category-row/product-category-row.style.css';

const ProductRow = () =>{
    return(
        <div>
            <div className="name">
                <table>
                    <tr>
                        <th>Name</th>
                        <td className="table">
                            <th>Price</th>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="product-category-row-container">
                <div className="name1">Sporting Goods</div>
            </div>
            <div className="product-row-container">
                <div className="name2">
            <table>
                    <tr>
                        <th className="style">Football</th>
                        <td className="table1">
                            <th className="style">$49.99</th>
                        </td>
                    </tr>
                </table> </div>
            </div>   
            <div className="product-row-container">
                <div className="name2">
                <table>
                    <tr>
                        <th className="style">Baseball</th>
                        <td className="table1">
                            <th className="style">$9.99</th>
                        </td>
                    </tr>
                </table></div>
            </div>   
            <div className="product-row-container">
                <div className="name2">
                <table>
                    <tr>
                        <th className="style1">Basketball</th>
                        <td className="table1">
                            <th className="style">$29.99</th>
                        </td>
                    </tr>
                </table> </div>
            </div>
            <div className="product-category-row-container">
                <div className="name1">Electronics  </div>
            </div>
            <div className="product-row-container">
                <div className="name2">
                <table>
                    <tr>
                        <th className="style">iPod Touch</th>
                        <td className="table1">
                            <th className="style">$99.99</th>
                        </td>
                    </tr>
                </table> </div>
            </div>   
            <div className="product-row-container">
                <div className="name2">
                <table>
                    <tr>
                        <th className="style1">iPhone 5</th>
                        <td className="table1">
                            <th className="style">$399.99</th>
                        </td>
                    </tr>
                </table></div>
            </div>   
            <div className="product-row-container">
                <div className="name2">
                <table>
                    <tr>
                        <th className="style">Nexus7</th>
                        <td className="table1">
                            <th className="style">$199.99</th>
                        </td>
                    </tr>
                </table> </div>
            </div>
        
        
    </div>

    )
}
export default ProductRow;