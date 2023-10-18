import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Quality from "./Quality";
import returnIcon from '../assets/quality-images/return.svg';
import helpline from '../assets/quality-images/helpline.svg';
import quality from '../assets/quality-images/quality.svg';
import safety from '../assets/quality-images/safety.svg';
import circleLeft from '../assets/quality-images/circle-left.svg';
import circleRight from '../assets/quality-images/circle-right.svg';


export default function QualitiesSection() {
    const heading1 = "7 Days Return";
    const heading2 = "Quality Products";
    const heading3 = "Safe Payment";
    const heading4 = "24x7 Helpline";
  return (
    <div className="section bg-grey relate m-resp">
        <img className="circle-left" src={circleLeft} alt="left circle" />
        <img className="circle-right" src={circleRight} alt="right circle" />
      <Container>
        <Row>
            <Quality icon={returnIcon} heading={heading1} />
            <Quality icon={quality} heading={heading2} />
            <Quality icon={safety} heading={heading3} />
            <Quality icon={helpline} heading={heading4} />
        </Row>
      </Container>
    </div>
  )
}
