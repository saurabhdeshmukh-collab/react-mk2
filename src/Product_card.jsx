import React from "react";

const ProductCard = React.memo(({ product }) => {
  console.log("Rendering:", product.title); // log on every render
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px" }}>
      <img src={product.image} alt={product.title} style={{ height: "100px" }} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  );
});

export default ProductCard;
