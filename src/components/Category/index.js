import { Row, Col, Image } from 'react-bootstrap';
import eletronicos from '../../assets/categorias/eletronicos.jpg';
import eletrodomesticos from '../../assets/categorias/eletrodomesticos.jpg';
import ferramentas from '../../assets/categorias/ferramentas.jpg';
import construcao from '../../assets/categorias/construcao.jpg';
import moveis from '../../assets/categorias';
import './style.scss';
import { useNavigate } from 'react-router-dom';


const Category = () => {

    const navigate = useNavigate();
    return (
        <>
            <section id="categorias">
                <h2> categorias:</h2>

                    <Row className="justify-content-md-center">
                        <Col >
                            <Image src={eletronicos} roundedCircle style={{objectFit:"cover"}} onClick={()=>navigate('/')}/>
                            <p>Eletronicos</p>
                        </Col>
                        <Col >
                            <Image src={eletrodomesticos} roundedCircle style={{objectFit:"cover"}} onClick={()=>navigate('/')}/>
                            <p>Eletrodomesticos</p>
                        </Col>
                        <Col >
                            <Image src={ferramentas} roundedCircle style={{objectFit:"cover"}} onClick={()=>navigate('/')}/>
                            <p>Ferramentas</p>
                        </Col>
                        <Col >
                            <Image src={construcao} roundedCircle style={{objectFit:"cover"}} onClick={()=>navigate('/')}/>
                            <p>Construção</p>
                        </Col>
                        <Col >
                            <Image src={moveis} roundedCircle style={{objectFit:"cover"}}onClick={()=>navigate('/')}/>
                            <p>Moveis</p>
                        </Col>
                    </Row>
                
            </section>
        </>

    )

}

export default Category;