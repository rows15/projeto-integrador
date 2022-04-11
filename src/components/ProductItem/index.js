/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";

export default function ProductItem({ prmProduct }) {
    return (
        <Link to={`/detalhes/${prmProduct.id}`}>
            <li style={{ border: "1px solid #666", marginBottom: "10px" }}>
                <img src={prmProduct.image} width={200} />
                <h2 style={{ color: "black" }}>{prmProduct.title}</h2>
                <p>{prmProduct.description}</p>
                <p>{prmProduct.price}</p>
            </li>
        </Link>
    );
}