import React from "react";
import { Link } from "react-router-dom";
export interface ProductItemInterface {
  id: string;
  name: string;
  price: number;
}
export const productItems: ProductItemInterface[] = [
  { id: "1", name: "prod1", price: 12 },
  { id: "2", name: "prod2", price: 10 },
];
const Products = () => {
  return (
    <div>
      <ul>
        {productItems.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <li>go to product: {product.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Products;
