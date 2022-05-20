import Divider from './components/Divider';
import Navbar from './components/Navbar';
import Banner from './sections/Banner';
import Featured from './sections/Featured';
import FeaturedTwo from './sections/FeaturedTwo';
import Footer from './sections/Footer';
import MoreFeatured from './sections/MoreFeatured';
import StoreCTA from './sections/StoreCTA';
import bannerImg from './assets/images/banner.png';

function App() {
    return (
        <main className='bg-black pt-36'>
            <img
                src={bannerImg}
                alt='banner img'
                className='fixed inset-x-0 top-0 z-50 w-full md:h-36'
            />
            <Navbar />
            <Banner />
            <Featured />
            <MoreFeatured />
            <FeaturedTwo />
            <Divider />
            <StoreCTA />
            <Footer />
        </main>
    );
}

export default App;
