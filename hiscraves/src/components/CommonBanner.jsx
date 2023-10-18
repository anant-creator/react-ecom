import Container from "react-bootstrap/Container";
import AOS from 'aos';


export default function CommonBanner(data) {
  const {banner, link} = data;
     AOS.init({disable: 'phone', startEvent: 'DOMContentLoaded'});
  return (
    <div data-aos="zoom-in">
        <Container fluid className="p-0">
          <a href={link}>
           <img className="img-fluid w-100" src={banner} alt="Banner" />
          </a>
        </Container>
    </div>
  )
}
