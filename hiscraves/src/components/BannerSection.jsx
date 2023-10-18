// import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import bannerMain from '../assets/banners/banner-main.png';
// import banner2 from '../assets/banners/banner2.jpg';
// import banner3 from '../assets/banners/banner3.jpg';

export default function BannerSection() {
    const options = {
      items: 1,
      autoplay: true,
      dots: false,
      autoplayTimeout: 3000,
    };
  return (
    <div className="banner-main mb-3p">
      <OwlCarousel className="owl-theme" loop margin={10} {...options} nav>
        <div className="item">
          <img src={bannerMain} alt="" />
        </div>
        <div className="item">
            <img src={bannerMain} alt="" />
        </div>
        <div className="item">
            <img src={bannerMain} alt="" />
        </div>
      </OwlCarousel>
    </div>
  );
}
