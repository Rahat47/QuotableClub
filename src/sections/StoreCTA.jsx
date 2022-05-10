import clothingimg from '../assets/images/clothing.jpg';
import { motion } from 'framer-motion';
import ClothingSlider from './ClothingSlider';

const StoreCTA = () => {
    return (
        <section id='clothing'>
            <div className='container mx-auto flex flex-col items-center px-5 py-20'>
                <motion.h1
                    whileInView={{
                        opacity: [0, 0.5, 1],
                        y: [0, -10, 0],
                    }}
                    className='title-font mb-8 font-raleway text-2xl font-medium text-yellow-400 sm:text-4xl'
                >
                    Quotable Clothing
                </motion.h1>
                {/* <a
                    href='https://www.bonfire.com/store/quotable-clothing/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='max-w-md rounded-lg border border-yellow-300'
                >
                    <img src={clothingimg} alt='clothing img' />
                </a> */}
                <ClothingSlider />
                <div className='mt-20 flex flex-col items-center text-center md:w-1/2 lg:flex-grow'>
                    <a
                        className='mb-4 font-raleway text-3xl font-medium text-yellow-400'
                        href='https://www.bonfire.com/store/quotable-clothing/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Check Out More Clothing At Bonfire
                    </a>
                </div>
            </div>
        </section>
    );
};

export default StoreCTA;
