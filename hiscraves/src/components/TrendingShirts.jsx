import SectionHeading from "./SectionHeading";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SizeCard from "./SizeCard";
import cardImg1 from "../assets/card-images/card-img1.png";
import cardImg2 from "../assets/card-images/card-img2.png";
import cardImg3 from "../assets/card-images/card-img3.png";
import cardImg4 from "../assets/card-images/card-img4.png";
import AOS from 'aos';


export default function TrendingShirts() {
  const heading = "Trending T-Shirts";
     AOS.init({disable: 'phone', startEvent: 'DOMContentLoaded'});
  return (
    <div className="section">
        <Container>
           <SectionHeading heading={heading} />
           <Row data-aos="fade-down">
             <SizeCard cardImg={cardImg1} />
             <SizeCard cardImg={cardImg2} />
             <SizeCard cardImg={cardImg3} />
             <SizeCard cardImg={cardImg4} />
           </Row>
           <Row data-aos="fade-down">
           <SizeCard cardImg={cardImg1} />
           <SizeCard cardImg={cardImg2} />
           <SizeCard cardImg={cardImg3} />
           <SizeCard cardImg={cardImg4} />
           </Row>

           <div className="text-center">
             <button type="button" className="btn btn-view">VIEW ALL</button>
           </div>
        </Container>
    </div>
  )
}
