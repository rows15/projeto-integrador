/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import api from "../../services/api";
import ProductItem from "../../components/ProductItem";

export default function Products() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    callApi();
  }, []);

  async function callApi() {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    }
    catch (error) { 

    }
  } 

  return (
    <>
      <h1>Todos os produtos</h1>
      <ul style={{listStyle: "none"}}>
        {products.map((item) => (
          <ProductItem key={item.id} prmProduct={item} />
        ))}
      </ul>
    </>
  );

};