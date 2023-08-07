import "./styles.css";
import { useEffect } from "react";
async function fetchProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  console.log(data);
}

export default function App() {
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
