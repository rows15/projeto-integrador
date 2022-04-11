/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";

export default function CategoryItem({ prmProduct }) {
    return (
        <Link to={`/categorias/${prmProduct.id}`}>
            <li style={{ border: "1px solid #666", marginBottom: "10px" }}>
               
                <h2 style={{ color: "black" }}>{prmProduct.name}</h2>
               
            </li>
        </Link>
    );
}