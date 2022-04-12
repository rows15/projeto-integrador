/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";

export default function CategoryItem({ prmCategory }) {
    return (
        <Link to={`/categorias/${prmCategory.id}`}>
            {console.log(prmCategory.id)}
            <li style={{border:"1px solid #666", marginBottom:"10px"}}>    
                <h2 style={{color:"black"}}>{prmCategory.name}</h2>
            </li>
        </Link>
    );
}