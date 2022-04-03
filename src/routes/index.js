import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import Home from '../pages/Home';
import About from '../pages/About';

const Paginas = () => {
  return(
       <BrowserRouter>        
          <Header />
            <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobrenos" element ={<About />} />
                           
            </Routes>           
       </BrowserRouter>
   )
    
};

export default Paginas;

