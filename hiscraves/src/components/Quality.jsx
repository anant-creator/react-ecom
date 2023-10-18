import Col from "react-bootstrap/Col";
import AOS from 'aos';


export default function Quality(data) {
     AOS.init({disable: 'phone', startEvent: 'DOMContentLoaded'});
  const {icon, heading} = data;
  return (
    <Col data-aos="fade-right" s={12} md={6} lg={3} className="my-3">
      <div className="quality-column">
        <img src={icon} alt="icon" />
        <h4 className="quality-title">
            {heading}
        </h4>
      </div>
    </Col>
  )
}
