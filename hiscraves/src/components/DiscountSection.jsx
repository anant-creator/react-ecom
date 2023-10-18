import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import diamond from '../assets/diamond.png';
import discount from '../assets/discount.png';
import AOS from 'aos';

export default function DiscountSection() {
     AOS.init({disable: 'phone', startEvent: 'DOMContentLoaded'});
  return (
    <div className="section discount-section">
      <Container>
        <Row>
            <Col data-aos="fade-left" md={12} lg={6} className="mb-3">
             <div className="discount-column dis-column1">
                <img className="discount-img" src={diamond} alt="diamond" />
                <h4 className="discount-head-sm">
                  Hurry Up!
                </h4>
                <h1 className="discount-head-main">
                  85% OFF
                </h1>
                <h4 className="discount-head-sm">
                  Sale
                </h4>
                <div className="shop-now">
                  <button className="btn btn-shop" href="#">
                    shop now
                  </button>
                </div>
             </div>
            </Col>
            <Col data-aos="fade-right" md={12} lg={6} className="mb-3">
              <div className="discount-column dis-column2">
                <img className="discount-img" src={discount} alt="diamond" />
                <h4 className="discount-head-sm">
                  Hurry Up!
                </h4>
                <h1 className="discount-head-main">
                  75% OFF
                </h1>
                <h4 className="discount-head-sm">
                  Sale
                </h4>
                <div className="shop-now">
                  <button className="btn btn-shop" href="#">
                    shop now
                  </button>
                </div>
              </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}
