/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";

export default function CategoryItem({ prmCategory }) {
    return (
        <Link to={`/categorias/${prmCategory.id}`}style={{ textDecoration: "none"}}>
             <ul style={{margin:"1px",width: 250, padding:"1px",border:"1px"}}>
            {console.log(prmCategory.id)}
            <li style={{ listStyle: "none", margin: "1px", width: "100%", height: 30, }}>    
                <h2 style={{color:"black"}}>{prmCategory.name}</h2>
                </li>
                </ul>
        </Link>
    );
}