import Round from "./Round";
import data from "../data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import img1 from "../assets/category-rounds/1.svg";
import img2 from "../assets/category-rounds/2.svg";
import img3 from "../assets/category-rounds/3.svg";
import img4 from "../assets/category-rounds/4.svg";
import img5 from "../assets/category-rounds/5.svg";
import img6 from "../assets/category-rounds/6.svg";
const catImages = [img1, img2, img3, img4, img5, img6];


export default function CategoryRounds() {
  return (
    <div className="section">
      <Container>
        <Row>
          {data.map((cat, index) => {
            const { heading, link, background } = cat;
            return (
              <Round
                data-aos="fade-left"
                key={index}
                heading={heading}
                link={link}
                background={background}
                img={`${catImages[index]}`}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
