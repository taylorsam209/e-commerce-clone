import React from 'react';
import './Products.css';

const Products = (props) => {
    return(
        <section className='products'>
        <h2 style ={{textAlign: 'center'}}>Best Sellers</h2>
        <div className='products-list'>
            {props.products.map((product, index) => {
                return (
                    <div key={index} className='product-container'>
                    <h1>{product.name}</h1>
                    <img className='product-image' src={`../assets/${product.img_url}`} alt={product.name} />
                    <h2>Color: {product.color}</h2>
                    <h3>Price: ${product.price}</h3>
                    <div className='add-cart-button' onClick={() => props.addToCart(product)}><h3>Add To Cart</h3></div>
                </div>
                )
            }
            )}
        </div>
        </section>
    )
}
export default Products