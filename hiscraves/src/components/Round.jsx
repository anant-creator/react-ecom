import Col from "react-bootstrap/Col";
import AOS from 'aos';

export default function Round(data) {
    const {heading, link, background, img} = data;
       AOS.init({disable: 'phone', startEvent: 'DOMContentLoaded'});
      return (
    <Col data-aos="fade-left">
        <a href={link}>
            <div  className="round" style={{backgroundColor: background}}>
              <img className="cat-img" src={img} alt="" />
            </div>
          <h4 className="cat-head">{heading}</h4>
        </a>
    </Col>
  )
}
