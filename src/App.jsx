import { useEffect, useState } from "react";
import Card from "./components/Card";
import Pagination from "./components/Pagination";

export default function App() {
  const [products, setProducts] = useState([]);
  const [pageNum, setPageNum] = useState(1);

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
      setPageNum(result.page);
    };

    fetchData();
  }, []);

  const getNextPage = async (pageData) => {
    const page = pageData === "prev" ? pageNum - 1 : pageNum + 1;

    const response = await fetch(
      `http://localhost:3000/api/v1/products/?page=${page}`,
      {
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json();
    setProducts(result.products);
    setPageNum(result.page);
  };

  return (
    <div className='ui container'>
      <div className='ui cards'>
        {products && products.map((product) => <Card product={product} />)}
      </div>
      <div className='ui grid centered'>
        <Pagination getNextPage={getNextPage} />
      </div>
    </div>
  );
}

// TODO: Restructure fetch functions
