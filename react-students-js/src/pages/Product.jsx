import React from "react";
import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const Product = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-mono">Product Details with react</h1>
    </div>
  );
};

export default Product;
