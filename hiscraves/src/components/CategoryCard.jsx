import Col from "react-bootstrap/Col";

export default function CategoryCard(data) {
    const {cardImg, link, heading, background} = data;
  return (
    <Col className="mb-4" s={12} md={6} lg={4}>
      <a href={link}>
      <div className="card card-category" style={{backgroundColor: background}}>
        <img className="card-img-top" src={cardImg} alt="Title"/>
        <div className="card-body">
          <h4 className="card-title">{heading}</h4>
        </div>
      </div>
      </a>
    </Col>
  )
}
