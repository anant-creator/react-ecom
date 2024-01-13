import {useState} from 'react';
import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cart from "../assets/cart.svg";
import fav from "../assets/fav.svg";
import search from "../assets/search.svg";
import user from "../assets/user.svg";
import Logo from '../assets/hiscraves.png';
import menuToggle from '../assets/menu.svg';
import close from '../assets/close.svg';

export default function NavbarMain() {
  const [isActive, setActive] = useState(false);
  const showSidebar = () => {
    if (!isActive) {
      setActive(true);
    }
  }

  return (
    <div className='sticky-top'>
      <div className={!isActive? 'd-none': null} id="filters">
            <div className="head">
                <div>Filters</div>
                <div className="close" onClick={() => setActive(false)}><img src={close} /></div>
            </div>

            <div className="all-filters">
                <div className="filter-category">
                    <h6 className="filter-type">Categories</h6>

                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Collections
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="filter-option selected-option">Mens T Shirts </p>
                                    <p className="filter-option">Womens Wear</p>
                                    <p className="filter-option">Winter Collections</p>
                                    <p className="filter-option">Hooded T-Shirt</p>
                                    <p className="filter-option">Polo Neck T-shirt</p>
                                    <p className="filter-option">Full Sleeves T-shirt</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Clothing & accessories
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p className="filter-option">Shirt</p>
                                    <p className="filter-option">T-shirt</p>
                                    <p className="filter-option">Jeans</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="filter-sizes">
                    <h6 className="filter-type">Sizes</h6>

                    <div className="options">
                        <p className="filter-option">XS</p>
                        <p className="filter-option">S</p>
                        <p className="filter-option">M</p>
                        <p className="filter-option">L</p>
                        <p className="filter-option">XL</p>
                        <p className="filter-option">XXL</p>
                    </div>
                </div>

                <hr />

                <div className="filter-price">
                    <h6 className="filter-type">Price</h6>

                    <div className="options">
                        <p className="filter-option">Under 1000</p>
                        <p className="filter-option">Under 1500</p>
                        <p className="filter-option">Under 2000</p>
                        <p className="filter-option">Under 3000</p>
                        <p className="filter-option">Under 5000</p>
                    </div>
                </div>

                <hr/>

                <div className="filter-color">
                    <h6 className="filter-type">Sizes</h6>

                    <div className="options">
                        <span className="color-option green selected"></span>
                        <span className="color-option orange"></span>
                        <span className="color-option purple"></span>
                        <span className="color-option pink"></span>
                    </div>
                </div>
            </div>
        </div>
    <Navbar expand="xxxl" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle className='toggle' onClick={showSidebar} aria-controls="navbarScroll">
            <img src={menuToggle} alt="" />
        </Navbar.Toggle>
        <Navbar.Brand href="/">
            <img className='logo' src={Logo} alt="" />
        </Navbar.Brand>
        <div className="d-flex">
          <ul className="nav-options">
            <li className='relate search'>
                <input type="text" 
                  className="form-control abs-field" name="" id="" aria-describedby="helpId" placeholder=""/>
              <img src={search} alt="" />
            </li>
            <li>
              <img src={fav} alt="" />
            </li>
            <li>
              <img src={cart} alt="" />
            </li>
            <li>
              <img src={user} alt="" />
            </li>
          </ul>
          </div>
        {/* <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action3">Products</Nav.Link>
          </Nav>
          </Navbar.Collapse> */}
      </Container>
    </Navbar>
    </div>
  )
}
