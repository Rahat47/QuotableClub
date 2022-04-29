import { moreFeatured } from '../assets/data/moreFeatured';
import FeaturedCard from '../components/FeaturedCard';
import { motion } from 'framer-motion';

const MoreFeatured = () => {
    return (
        <section className='text-white' id='more'>
            <div className='flex w-full flex-col text-center'>
                <motion.h1
                    whileInView={{
                        opacity: [0, 0.5, 1],
                        y: [0, -10, 0],
                    }}
                    className='title-font mb-4 font-raleway text-2xl font-medium text-yellow-400 sm:text-4xl'
                >
                    More By Les Brown
                </motion.h1>
            </div>

            <div className='container mx-auto max-w-6xl px-5 py-24'>
                <div className='-m-4 flex flex-wrap'>
                    {moreFeatured.map(item => (
                        <FeaturedCard
                            key={item.id}
                            title={item.title}
                            image={item.image}
                            link={item.link}
                            id={item.id}
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
