import React, { useContext, useEffect } from "react";
import { ProductContext } from "./ProductProvider";
import { ProductTypeContext } from "./ProductTypeProvider";
import { Product } from "./Product";

export const ProductList = () => {
  const { products, getProducts } = useContext(ProductContext);
  const { productTypes, getProductTypes } = useContext(ProductTypeContext);

  useEffect(() => {
    getProductTypes().then(getProducts)
  }, []);
  
  return (
    <div className="products">
      {products.map((product) => {
        const item = productTypes.find(
          (type) => (
              type.id === product.productTypeId
            //   console.log("type.id", type)
            //   console.log("product.productTypeId", product.productTypeId)
            //   console.log("Product Type:", productTypes)
        ));
          console.log("item", item)
        return (
          <Product
            key={product.id}
            productType={item}
            product={product}
          />
        );
      })}{" "}
    </div>
  );
};
