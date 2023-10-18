// import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Phone from '../assets/phone.svg';


export default function Topbar() {
  return (
    <div className="blackbar">
      <Container>
        <Row>
        <Col>
          <p>Welcome to Our Store in Hiscraves</p>
        </Col>
        <Col>
        <div className="col-contact">
            <img src={Phone} alt="" />
            <p>Call Us: 1234567890</p>
        </div>
        </Col>
        </Row>
      </Container>
    </div>
  );
}
