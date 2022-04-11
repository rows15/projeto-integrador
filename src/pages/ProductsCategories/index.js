/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState } from "react";
import CategoryItem from "../../components/CategoryItem";
import api from "../../services/api";

export default function ProductsCategories() {
    
    const [product, setProduct] = useState([]);
    useEffect(() => {
        callApiCategories();
    }, []);    
    
    console.log("passei por aqui");
    async function callApiCategories() {
        
        try {
          const response = await api.get("/products");
            setProduct(response.data);
        
        }
        catch (error) {      
        }
      } 
    return (
        <>
        <h1>categorias</h1>
        <ul style={{listStyle: "none"}}>
          {product.map((item) => (
            <CategoryItem key={item.id} prmProduct={item} />
          ))}
        </ul>
      </>
    );
}
