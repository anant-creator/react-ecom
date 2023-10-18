import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import share from '../assets/share.svg';
import addFav from '../assets/add-fav.svg';
import addCart from '../assets/add-cart.svg';

export default function SizeCard(image) {
  const {cardImg} = image;
  return (
    <Col className="mb-3" sm={6} lg={3}>
      <div className="card size-card">
        <div className="backdrop">
          <div className="card-options">
            <img src={share} alt="" />
            <img src={addFav} alt="" />
            <img src={addCart} alt="" />
          </div>
          <img className="card-img-top" src={cardImg} alt="Title" />
        </div>
        <div className="card-body">
          <h4 className="card-title">Men Henley Neck Full Sleeve Red Wine</h4>
          <p className="card-price">₹399<s>₹1299</s></p>
          <Row className="space-between">
            <Col className="size">S</Col>
            <Col className="size">M</Col>
            <Col className="size">L</Col>
            <Col className="size">XL</Col>
            <Col className="size">XXL</Col>
          </Row>
        </div>
      </div>
    </Col>
  );
}
