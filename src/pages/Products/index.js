
import ProductItem from '../../components/ProductItem';


const Products = () => {
    return (
      <>
            <title>Produtos</title>
        <p>será para a lista de produtos </p>
        <p>9.	Na tela do produto, deve ser possível adicioná-lo num carrinho, mas esse carrinho ficará em um estado dentro da contextAPI. Posteriormente, quando o usuário clicar na aba de carrinho, os dados serão buscados da contextAPI e a lista de produtos será listada. (Opcionalmente,
          esse carrinho pode ser armazenado no local storage através da contextAPI) </p>
      
        <ProductItem />
        
      </>
    );
  }
  export default Products;
  