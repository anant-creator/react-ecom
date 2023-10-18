import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import NavbarMain from './components/NavbarMain';
import Topbar from './components/Topbar';
import BannerSection from './components/BannerSection';
import CategoryRounds from './components/CategoryRounds';
import CategoryBlocks from './components/CategoryBlocks';
import TrendingShirts from './components/TrendingShirts';
import CommonBanner from './components/CommonBanner';
import banner4 from './assets/banners/banner4.png';
import banner5 from './assets/banners/banner5.png';
import NewProducts from './components/NewProducts';
import FeaturedProducts from './components/FeaturedProducts';
import BestSellingProducts from './components/BestSellingProducts';
import CategoryCards from './components/CategoryCards';
import DiscountSection from './components/DiscountSection';
import QualitiesSection from './components/QualitiesSection';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  const bannerLink1 = "https://www.google.com/";
  const bannerLink2 = "https://www.google.com/";
  return (
    <main>
     <Topbar/>
     <NavbarMain/>
     <BannerSection/>
     <CategoryRounds/>
     <CategoryBlocks/>
     <TrendingShirts/>
     <FeaturedProducts/>
     <CommonBanner banner={banner4} link={bannerLink1} />
     <NewProducts/>
     <BestSellingProducts/>
     <CategoryCards/>
     <CommonBanner banner={banner5} link={bannerLink2} />
     <DiscountSection/>
     <QualitiesSection/>
     <Subscribe/>
     <Footer/>
    </main>
  )
}

export default App
