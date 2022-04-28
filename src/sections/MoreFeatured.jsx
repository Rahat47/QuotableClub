import { moreFeatured } from '../assets/data/moreFeatured';
import FeaturedCard from '../components/FeaturedCard';

const MoreFeatured = () => {
    return (
        <section className='text-white' id='more'>
            <div className='flex flex-col text-center w-full'>
                <h1 className='sm:text-4xl text-2xl font-medium font-raleway title-font mb-4 text-yellow-400'>
                    More By Les Brown
                </h1>
            </div>

            <div className='container px-5 py-24 mx-auto'>
                <div className='flex flex-wrap -m-4'>
                    {moreFeatured.map(item => (
                        <FeaturedCard
                            key={item.id}
                            title={item.title}
                            image={item.image}
                            link={item.link}
                        >
                            {item.children()}
                        </FeaturedCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MoreFeatured;
