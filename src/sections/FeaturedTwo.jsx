import { motion } from 'framer-motion';

const FeaturedTwo = () => {
    return (
        <section id='stuck'>
            <div className='container mx-auto flex flex-col items-center px-5 py-20'>
                <motion.h1
                    whileInView={{
                        opacity: [0, 0.5, 1],
                        y: [0, -10, 0],
                    }}
                    className='title-font mb-8 font-raleway text-2xl font-medium text-yellow-400 sm:text-4xl'
                >
                    How Do We Get Stuck?
                </motion.h1>
                <motion.div
                    whileHover={{
                        scale: [1, 1.02, 1],
                    }}
                    className='aspect-video rounded-lg border border-yellow-300'
                >
                    <iframe
                        width='560'
                        height='315'
                        src='https://www.youtube.com/embed/pKkITw1bPX4'
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                        className='rounded-lg'
                    ></iframe>
                </motion.div>
                <div className='mt-20 flex flex-col items-center text-center md:w-1/2 lg:flex-grow'>
                    <motion.a
                        className='mb-4 font-raleway text-3xl font-medium text-yellow-400'
                        href='https://www.youtube.com/results?search_query=davicci+family+creed'
                        target='_blank'
                        rel='noopener noreferrer'
                        whileInView={{
                            opacity: [0, 0.5, 1],
                            x: [0, -10, 0],
                        }}
                    >
                        Check Out More Inspiration On Our Youtube Page
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default FeaturedTwo;
