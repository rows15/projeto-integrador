import { useState, useEffect } from 'react';
import { ModalHeader } from 'react-bootstrap';
import api from '../../services/api';
import './style.scss'







const Administration = () => {

    const handleClick = () => {
        
        if ((loginVar == "brasil") & (passowrdVar == "senha")){
            alert("usuario e senha certos")
            setShow(true)
                    
        } else {
            alert("Usuário e(ou) senha errado")
        }

       
                     /* window.location.href = `https://www.google.com/search?q=${loginVar}`; */
                     
       
                     
                     
                    };
    
    const [showAdminControls,setShow] = useState(false)
    const [loginVar,setLoginVar] = useState(null)
    const [passowrdVar,setpassowrdVar] = useState(null)
    
    function getLogin(val){

        setLoginVar(val.target.value)
        console.log(val.target.value)   

    }
    function getPassword(event){

        setpassowrdVar(event.target.value)
        console.log(event.target.value)   

    }

    //Funcoes no Painel de admin




    const [id,setId] = useState("")
    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    const [categoryId,setCategoryId] = useState("")
    const [description,setDescription] = useState("")
    const [image,setImage] = useState("")



    //CadastrarProduto


    async function saveProduct(body) {
        try {
            await api.post("/products", {
              body: JSON.stringify(body),
              headers: { "Content-type": "application/json; charset=UTF-8" }
            });
            alert("Produto cadastrado com sucesso");
            
          } catch (error) {
            alert("Erro no cadastro do Produto");
          }
    }

    async function newProduct(event) {
        event.preventDefault();
        if (!title || !categoryId || !price) {
          alert("Favor preencher todos os campos");
        } else {
          const body = {
            "title": title,
            "price": price,
            "category_id": categoryId,
            "description": description,
            "image": image,
          };
          saveProduct(body);
        }
      }


      //EditarProduto

      async function updateProduct(body) {
        try {
            await api.put(`/products/${id}`, {
              body: JSON.stringify(body),
              headers: { "Content-type": "application/json; charset=UTF-8" }
            });
            alert("Produto Atualizado");
          } catch (error) {
            alert("Erro ao atualizar");
          }
    }

      async function editProduct(event) {
        event.preventDefault();
        if (!title || !categoryId || !price) {
          alert("Favor preencher todos os campos");
        } else {
          const body = {
            "id": id,
            "title": title,
            "price": price,
            "category_id": categoryId,
            "description": description,
            "image": image,
            
          };
          updateProduct(body);
        }
      }

      //PegarListaCategorias

      const [categories, setCategories] = useState([]);
        useEffect(() => {
        callCategories();
        }, []);

      async function callCategories() {
        
        try {
          const response = await api.get("/categories");
            setCategories(response.data);
            console.log(response.data);
         }
        catch (error) { 
            console.log(error);
            
        }
      } 
    


    return (
        <>
        
        {showAdminControls?<><h2 className='textoPainel' >PAINEL DE ADM</h2>
        
        <div className="AdminContainer">
            <div className="AdminBody">
                <form onSubmit={id?editProduct:newProduct}>
                    <h2>Cadastro/Edição de produtos</h2>
                    <div className="inputs">
                    <label>
                        <span>Id</span>
                        <input
                            value={id}
                            onChange={(event) => setId(event.target.value)}
                        />
                        </label>

                        <label>
                        <span>Título</span>
                        <input
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        </label>
                        <label>
                        <span>Descrição</span>
                        <textarea

                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                        </label>

                        <label>
                        <span>Imagem</span>
                        <input
                            value={image}
                            onChange={(event) => setImage(event.target.value)}
                        />
                        </label>
                        <div>
                            <label>
                                <span>Preço</span>
                                <input
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                                />
                            </label>
                            <label>
                            <span>Categoria</span>
                            <select value={categoryId} onChange={(event) => setCategoryId(event.target.value)}>
                                <option></option>
                                {categories.map((category) => (
                                <option value={category.id}>{category.name}</option>
                                ))}
                            </select>
                            </label>
                            <div className="container-buttons">
                                <button type="submit">{!id ? "Salvar" : "Alterar"}</button>
                                
                            </div>
                        </div>
                    </div>






                </form>






            </div>  








        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </>:<> 

        <input id="login" type="text" placeholder="Enter Username" name="uname" onChange={getLogin} required/>
        <input id="password" type="password" placeholder="Enter Password" name="psw" onChange={getPassword} required/>
        
        <button onClick={handleClick}>  Login</button>
        </>
        
    }
        

        

        </>
        
    );
           
}

export default Administration;