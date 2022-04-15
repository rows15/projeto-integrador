/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";

export default function ProductItem({ prmProduct }) {
    return (

       
            <Link to={`/detalhes/${prmProduct.id}`}style={{textDecoration:"none"}}>
                <ul style={{margin:"30px", padding:"10px",alignItems:"center" }}>
                    <li style={{listStyle: "none", border: "1px #666",borderRadius:"10px", margin:"30px",width: 450, height:400,alignItems: "center",background: "white",boxShadow: "5px 5px 5px #D3D3D3" }}>
                        <img  style={{ width: 200, height:150,margin: "50px 120px"}} src={prmProduct.image} />
                        <h2 style={{color: "black", margin: "10px",textAlign: "center"}}>{prmProduct.title}</h2>
                        <p style={{color: "black", margin: "10px ",textAlign: "center"}}>{prmProduct.description}</p>
                        <p style={{ color: "black", margin: "10px", textAlign: "center" }}>{prmProduct.price}</p>
                    <button style={{ display: "inline-block", background: "#003f69", border: "none", color: "white", padding: "10px 32px", textAlign: "center", fontSize: "16px", margin: "0px 155px", borderRadius: "10px",boxShadow: "5px 5px 5px grey"}}>Adicionar</button>
                    </li>
                </ul>
          
            </Link>
         
    );
}