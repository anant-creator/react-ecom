import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from '../assets/category-blocks/image1.png';
import image2 from '../assets/category-blocks/image2.png';
import image3 from '../assets/category-blocks/image3.png';
import image4 from '../assets/category-blocks/image4.png';
import image5 from '../assets/category-blocks/image5.png';
import AOS from 'aos';


export default function CategoryBlocks() {
     AOS.init({disable: 'phone', startEvent: 'DOMContentLoaded'});
  return (
    <div className="section cat-blocks">
        <Container>
            <Row className="mb-2">
                <Col md={6} className="mb-3" data-aos="fade-right">
                  <img className="img-fluid w-100" src={image1} alt="" />
                </Col>
                <Col md={6} data-aos="fade-left">
                  <img className="img-fluid w-100" src={image2} alt="" />
                </Col>
            </Row>
            <Row>
                <Col md={4} className="mb-3" data-aos="fade-down">
                  <img className="img-fluid" src={image3} alt="" />
                </Col>
                <Col md={4} className="mb-3" data-aos="fade-down">
                  <img className="img-fluid" src={image4} alt="" />
                </Col>
                <Col md={4} data-aos="fade-down">
                  <img className="img-fluid" src={image5} alt="" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}
