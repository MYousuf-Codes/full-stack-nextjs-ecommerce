import HeroSection from '../components/HeroSection';
import BrandSection from '../components/BrandSection';
import NewArrivals from '../components/NewArrivals';
import SaleBanner from '../components/SalesBanner';
import FavoritesSection from '../components/FavoritesSection';
import AppPromo from '@/components/AppPromo';
import NewsLetter from '@/components/NewsLetter';

const Home = () => {
  return (
    <div>
      <main className="pt-16">
        <HeroSection />
        <BrandSection />
        <NewArrivals />
        <SaleBanner />
        <FavoritesSection />
        <AppPromo/>
        <NewsLetter/>
      </main>
    </div>
  );
};

export default Home;
