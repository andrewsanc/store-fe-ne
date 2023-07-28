import { useEffect, useState } from "react";
import Card from "./components/Card";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/v1/products/", {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      setProducts(result.products);
    };

    fetchData();
  }, []);

  return (
    <div className='ui container'>
      <div className='ui cards'>
        {products && products.map((product) => <Card product={product} />)}
      </div>
    </div>
  );
}
