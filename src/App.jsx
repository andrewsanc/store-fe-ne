import { useEffect, useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import Pagination from "./components/Pagination";

export default function App() {
  const [products, setProducts] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    const productData = async () => {
      const data = await fetchData();
      setProducts(data.products);
      setPageNum(data.pageNum);
    };
    productData();
  }, []);

  const search = async (e) => {
    e.preventDefault();
    const data = await fetchData(`name=${e.target.search.value}`);
    setProducts(data.products);
    setPageNum(data.pageNum);
  };

  const getNextPage = async (pageData) => {
    const page = pageData === "prev" ? pageNum - 1 : pageNum + 1;
    const data = await fetchData(`page=${page}`);
    setProducts(data.products);
    setPageNum(data.pageNum);
  };

  return (
    <div className='ui container'>
      <Search search={search} />
      <div className='ui cards'>
        {products && products.map((product) => <Card product={product} />)}
      </div>
      <div className='ui grid centered'>
        <Pagination getNextPage={getNextPage} />
      </div>
    </div>
  );
}

const fetchData = async (params) => {
  const response = await fetch(
    `http://localhost:3000/api/v1/products/?${params}`,
    {
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const products = await response.json();
  return products;
};
