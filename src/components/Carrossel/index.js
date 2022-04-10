import {Carousel, Row, Col} from 'react-bootstrap';

import './style.scss';
import { useNavigate } from 'react-router-dom';

const Carrossel = () => {
  var maxItems = 3;

  const data = [
    {
      id: 1,
      imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
      title: "Flor"
    },
    {
      id: 2,
      imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
      title: "Flor 2"
    },
    {
      id: 3,
      imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
      title: "Flor 3"
    },
    {
      id: 4,
      imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
      title: "Flor 4"
    },
    {
      id: 5,
      imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
      title: "Flor 5"
    },
    {
      id: 6,
      imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
      title: "Flor 6"
    },
    {
      id: 7,
      imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
      title: "Flor 7"
    },
    {
      id: 8,
      imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
      title: "Flor 8"
    },
    {
      id: 9,
      imageUrl: "https://s3.static.brasilescola.uol.com.br/be/2020/12/partes-da-flor.jpg",
      title: "Flor 9"
    }
  ];

  var dataBatchs = [];

  for (let i = 0; i < data.length; i++) {
    if (i % maxItems == 0) {
      dataBatchs.push([]);
    }

    dataBatchs[Math.floor(i / maxItems)].push({
      id: data[i]['id'],
      imageUrl: data[i]['imageUrl'],
      title: data[i]['title']
    });
  }

  console.log(dataBatchs);

  const navigate = useNavigate();

  return (
    
    <section id="carrossel">
      <h2>Categorias populares</h2>
     
      <Carousel variant="dark" id= "destaques">
        {dataBatchs.map((dataBatch, index) => {
          return (
            <Carousel.Item>
              <Row>
              {dataBatch.map(({id, imageUrl, title}, index) => {
                return(
                  <Col key={id} md={4} sm={6} className={`mx-auto ${index===1?'d-none d-sm-block' : index===2? 'd-none d-md-block' : ''}`}>
                    <img
                      className="d-block mx-auto"
                      src= {imageUrl} width= "80%" height= "80%"
                      alt={title}
                      onClick={()=>navigate('/produtos/' + id)}
                    />
                    <h5>{title}</h5>
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

