import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Details from '../pages/Details';
import ProductsCategories from '../pages/ProductsCategories'
import Adm from '../pages/Adm';
import Footer from '../components/Footer';
import NotFound from '../pages/NotFound';



const Paginas = () => {
  return(
       <BrowserRouter>        
          <Header />
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobrenos" element ={<About />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/detalhes/:id" element={<Details />} />
        <Route path="/produtosporcategoria/:id" element={<ProductsCategories />} />
        <Route path="/administracao" element={<Adm />} />
        <Route path="*" element={<NotFound />} />
                           
      </Routes>
      <Footer/>
       </BrowserRouter>
   )
    
};

export default Paginas;

