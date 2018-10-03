import React from 'react';

const Products = (props) => {
    return(
        <section style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
            {props.products.map((product, index) => {
                return (
                <div key={index} style={{border: '1px solid black', width: '30%', margin:'20px', padding: '10px 0'}}>
                    <h1>{product.name}</h1>
                    <img style={{width:'60%', margin: "10px auto"}} src={`../assets/${product.img_url}`} alt={product.name} />
                    <h2>{product.color}</h2>
                    <h3>{product.price}</h3>
                    <button onClick={() => props.addToCart(product)}>Add to cart</button>
                </div>
                )
            }
        )}
        </section>
    )
}
export default Products