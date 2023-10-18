import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import facebook from "../assets/fb.svg";
import twitter from "../assets/twitter.svg";
import insta from "../assets/insta.svg";
import linkedin from "../assets/linkedin.svg";
import pinterest from "../assets/pinterest.svg";
import call from "../assets/call.svg";
import location from "../assets/location.svg";
import mail from "../assets/mail.svg";

export default function Footer() {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col s={12} md={6} lg={3} className="mb-3">
              <div className="footer-main">
                <p className="footer-text mb-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                  reprehenderit, saepe libero reiciendis earum quibusdam esse
                  laborum placeat! Est rerum fuga nam quae? Harum.
                </p>
              </div>

              <div className="logos">
                <img src={facebook} alt="fb" />
                <img src={twitter} alt="twitter" />
                <img src={insta} alt="insta" />
                <img src={linkedin} alt="linkedin" />
                <img src={pinterest} alt="pinterest" />
              </div>
            </Col>
            <Col s={12} md={6} lg={3} className="mb-3">
              <div className="footer-col">
                <h4 className="footer-head">ONLINE SHOPPING</h4>
                <ul className="footer-nav">
                  <li>Men’s T-Shirts</li>
                  <li>Women’s Wear</li>
                  <li>Winter Collections</li>
                  <li>Hooded T-Shirts</li>
                  <li>Streetwear Collections</li>
                </ul>
              </div>
            </Col>
            <Col s={12} md={6} lg={3} className="mb-3">
              <div className="footer-col">
                <h4 className="footer-head">CUSTOMER POLICIES</h4>
                <ul className="footer-nav">
                  <li>About Us</li>
                  <li>Terms & Conditions</li>
                  <li>Shipping & Returns Policy</li>
                  <li>Cancellation & Refund Policy</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </Col>
            <Col s={12} md={6} lg={3} className="mb-3">
              <div className="footer-col">
                <h4 className="footer-head">STORE INFORMATION</h4>
                <div className="contact-info">
                  <div className="info">
                    <div>
                      <img src={location} alt="" />
                    </div>
                    <div>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                  <div className="info">
                    <div>
                      <img src={call} alt="" />
                    </div>
                    <div>
                      <p>Call Us: 1234567890</p>
                    </div>
                  </div>
                  <div className="info">
                    <div>
                      <img src={mail} alt="" />
                    </div>
                    <div>
                      <p>Email Us: info@yourmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="footer-bar">
        <Container className="copyright">
          <p>©2022-23 Powered By dummy team</p>
        </Container>
      </div>
    </div>
  );
}
