import { motion } from 'framer-motion';

export default function Example() {
    return (
        <section
            className=' mx-auto flex max-w-6xl items-center justify-center py-32 px-4 md:py-36'
            id='home'
        >
            <div className='text-center'>
                <motion.h1
                    whileInView={{
                        opacity: [0, 0.5, 1],
                        scale: [0.9, 1],
                        transition: {
                            duration: 1,
                        },
                    }}
                    className='font-courgette text-7xl tracking-tight text-white md:text-9xl'
                >
                    <span className='block xl:inline'>"Better Than Good</span>{' '}
                    <span className='block text-yellow-500 xl:inline'>
                        Better Than Most"
                    </span>
                </motion.h1>
                <div className='mt-20 flex w-full flex-col items-center justify-center'>
                    <div className='h-1 w-20 bg-white' />

                    <motion.h3
                        whileInView={{
                            opacity: [0, 0.5, 1],
                            y: [0, -10, 0],
                            transition: {
                                duration: 1,
                                delay: 0.5,
                            },
                        }}
                        className='mt-10 font-raleway text-4xl font-semibold uppercase tracking-widest text-white'
                    >
                        Les Brown
                    </motion.h3>
                </div>
            </div>
        </section>
    );
}
