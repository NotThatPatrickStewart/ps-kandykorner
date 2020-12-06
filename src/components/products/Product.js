import React from "react"

export const Product = ({ product, productType }) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <div className="product__price">${product.price} each</div>
        <div className="product__productType">Type: {productType.productType}</div>
    </section>
)