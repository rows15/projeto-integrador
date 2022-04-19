import { useEffect, useState } from "react";
import api from "../../services/api";
import {Carousel, Row, Col} from 'react-bootstrap';
import ProductItem from "../../components/ProductItem";

import './style.scss';
import { useNavigate } from 'react-router-dom';

const Carrossel = () => {
  var maxItemsPage = 3;
  var maxItems = 6;

  const [products, setProducts] = useState([]);
  useEffect(() => {
    callApi();
  }, []);

  async function callApi() {
    try {
      const response = await api.get("/products");
      console.log('response', response);

      var dataBatchs = [];
      const data = response.data;

      for (let i = 0; i < maxItems; i++) {
        if (i % maxItemsPage == 0) {
          dataBatchs.push([]);
        }

        dataBatchs[Math.floor(i / maxItemsPage)].push({
          id: data[i]['id'],
          category_id: data[i]['category_id'],
          description: data[i]['description'],
          image: data[i]['image'],
          price: data[i]['price'],
          title: data[i]['title']
        });
      }

      console.log(dataBatchs);
      
      setProducts(dataBatchs);
    }
    catch (error) { 

    }
  }

  // const data = [
  //   {
  //     id: 1,
  //     imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
  //     title: "Flor"
  //   },
  //   {
  //     id: 2,
  //     imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
  //     title: "Flor 2"
  //   },
  //   {
  //     id: 3,
  //     imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
  //     title: "Flor 3"
  //   },
  //   {
  //     id: 4,
  //     imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
  //     title: "Flor 4"
  //   },
  //   {
  //     id: 5,
  //     imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
  //     title: "Flor 5"
  //   },
  //   {
  //     id: 6,
  //     imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
  //     title: "Flor 6"
  //   },
  //   {
  //     id: 7,
  //     imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
  //     title: "Flor 7"
  //   },
  //   {
  //     id: 8,
  //     imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
  //     title: "Flor 8"
  //   },
  //   {
  //     id: 9,
  //     imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
  //     title: "Flor 9"
  //   }
  // ];

  const navigate = useNavigate();

  return (
    
    <section id="carrossel">
      <h2>Categorias populares</h2>
     
      <Carousel variant="dark" id= "destaques">
        {products.map((dataBatch, index) => {
          return (
            <Carousel.Item>
              <Row>
              {dataBatch.map((item, index) => {
                return(
                  <Col key={item.id} md={4} sm={6} className={`mx-auto ${index===1?'d-none d-sm-block' : index===2? 'd-none d-md-block' : ''}`}>
                    <ProductItem key={item.id} prmProduct={item}/>
                  </Col>
                )
              })}
              </Row>
            </Carousel.Item>
          )
        })}
      </Carousel> 
    </section>
  )
}     
export default Carrossel;

