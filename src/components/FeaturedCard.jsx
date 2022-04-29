import { motion } from 'framer-motion';

const FeaturedCard = ({ link, image, title, children, id }) => {
    return (
        <motion.a
            className='w-full p-4 md:w-1/2'
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            id={id}
            whileInView={{
                opacity: [0, 0.5, 1],
                scale: [0.9, 1, 1],
            }}
        >
            <div className='h-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60'>
                <img
                    className='h-96 w-full object-cover object-center'
                    src={image}
                    alt='blog'
                />
                <div className='p-6'>
                    <h1 className='title-font mb-4 font-raleway text-3xl font-medium text-yellow-400'>
                        {title}
                    </h1>
                    <p className='mb-3 font-inter leading-relaxed'>
                        {children}
                    </p>
                </div>
            </div>
        </motion.a>
    );
};

export default FeaturedCard;
