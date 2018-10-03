import React from 'react';

const Products = (props) => {
    return(
        props.products.map((product, index) => {
            return (
                <div key={index}>
                <h1>{product.name}</h1>
                <h2>{product.color}</h2>
                <h3>{product.price}</h3>
              </div>
            )
        }
    )
    )
}
export default Products