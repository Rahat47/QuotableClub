const FeaturedCard = ({ link, image, title, children }) => {
    return (
        <a
            className='p-4 md:w-1/2'
            href={link}
            target='_blank'
            rel='noopener noreferrer'
        >
            <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <img
                    className='w-full object-cover object-center'
                    src={image}
                    alt='blog'
                />
                <div className='p-6'>
                    <h1 className='title-font text-3xl font-raleway font-medium text-yellow-400 mb-4'>
                        {title}
                    </h1>
                    <p className='leading-relaxed mb-3 font-inter'>
                        {children}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default FeaturedCard;
