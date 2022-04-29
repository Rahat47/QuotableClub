import { motion } from 'framer-motion';

const Featured = () => {
    return (
        <section className='text-white' id='quote'>
            <div className='container mx-auto flex flex-col items-center px-5 py-20'>
                <motion.h1
                    whileInView={{
                        opacity: [0, 0.5, 1],
                        y: [0, -10, 0],
                    }}
                    className='title-font mb-8 font-raleway text-2xl font-medium text-yellow-400 sm:text-4xl'
                >
                    LES BROWN QUOTE
                </motion.h1>
                <div className='aspect-video'>
                    <iframe
                        width='560'
                        height='315'
                        src='https://www.youtube.com/embed/m2QbRgB_NAs'
                        title='YouTube video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    ></iframe>
                </div>
                <div className='mt-20 flex flex-col items-center text-center md:w-1/2 lg:flex-grow'>
                    <motion.h1
                        whileInView={{
                            opacity: [0, 0.5, 1],
                            x: [0, -10, 0],
                        }}
                        className='mb-4 font-raleway text-3xl font-medium text-yellow-400 sm:text-4xl'
                    >
                        Better Than Good, Better Than Most
                    </motion.h1>
                    <p className='mb-8 font-inter leading-relaxed'>
                        A quote from the Famous Les Brown in "Getting Unstuck"
                        <br />
                        <br />
                        This is an amazing Introduction for those that find it
                        hard to get out of situations they feel stuck in. Just
                        because you are going through something today doesn't
                        mean that your tomorrow has to be messed up! A lot of
                        people quit because they feel like it's just not worth
                        it,
                        <br />
                        but I'd like to say "If you quit, YOU wasn't worth it!"
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Featured;
