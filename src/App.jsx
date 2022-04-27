import Navbar from './components/Navbar';
import Banner from './sections/Banner';
import Featured from './sections/Featured';
import Footer from './sections/Footer';
import MoreFeatured from './sections/MoreFeatured';
import StoreCTA from './sections/StoreCTA';

function App() {
    return (
        <main className='bg-black'>
            <Navbar />
            <Banner />
            <Featured />
            <MoreFeatured />
            <StoreCTA />
            <Footer />
        </main>
    );
}

export default App;
