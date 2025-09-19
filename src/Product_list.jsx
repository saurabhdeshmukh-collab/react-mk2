import React, { useEffect, useState, useMemo, useCallback } from "react";
import ProductCard from "./Product_card";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = useMemo(() => {
        console.log("Filtering products..."); // log for filter 
    return products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  const handleSearch = useCallback((e) => {
        console.log("Updating search input"); // log when callback is reused
    setSearch(e.target.value);
  }, []);

  return (
    <div>
      <h2>Product Listing</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
