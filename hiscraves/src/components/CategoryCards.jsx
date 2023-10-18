import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CategoryCard from "./CategoryCard";
import cardImg1 from '../assets/category-cards/img1.png';
import cardImg2 from '../assets/category-cards/img2.png';
import cardImg3 from '../assets/category-cards/img3.png';
import cardImg4 from '../assets/category-cards/img4.png';
import cardImg5 from '../assets/category-cards/img5.png';
import cardImg6 from '../assets/category-cards/img6.png';
import cardData from '../cardData'; 
const images = [cardImg1, cardImg2, cardImg3, cardImg4, cardImg5, cardImg6];
import AOS from 'aos';


export default function CategoryCards() {
     AOS.init({disable: 'phone', startEvent: 'DOMContentLoaded'});
  return (
    <div className="section">
        <Container>
            <Row data-aos="fade-down">
              {cardData.map((card, index) => {
                const {link, background, heading} = card;
                return <CategoryCard key={index} cardImg={`${images[index]}`} link={link} heading={heading} background={background} />
              })}
                {/* <CategoryCard cardImg={cardImg2} />
                <CategoryCard cardImg={cardImg3} />
                <CategoryCard cardImg={cardImg4} />
                <CategoryCard cardImg={cardImg5} />
                <CategoryCard cardImg={cardImg6} /> */}
            </Row>
        </Container>
    </div>
  )
}
