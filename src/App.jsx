import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Lazy imports
const ProductList = lazy(() => import("./Product_list"));
const About = lazy(() => import("./About"));

function App() {
  return (
    <Router>
      <nav>
        <Link to="/products">Products</Link> | <Link to="/about">About</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
