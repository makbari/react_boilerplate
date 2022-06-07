import React from "react";
import { useParams } from "react-router";
import { productItems } from ".";

const ProductItem = () => {
  const params = useParams();
  const product = productItems.find((prod) => prod.id === params.id);
  if (!product) return <div>product with id {params.id} is not found.</div>;
  return (
    <div>
      {product.name}: {product.price}
    </div>
  );
};

export default ProductItem;
