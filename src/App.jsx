import { useEffect, useState } from "react";

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

      return await response.json();
    };

    const products = fetchData();
    setProducts(products);
  }, []);

  return (
    <div className='ui container'>
      <h1>Hello World</h1>
    </div>
  );
}
