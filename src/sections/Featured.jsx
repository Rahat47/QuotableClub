const Featured = () => {
    return (
        <section className='text-white' id='quote'>
            <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                    <h1 className='font-raleway sm:text-4xl text-3xl mb-4 font-medium text-yellow-400'>
                        Better Than Good, Better Than Most
                    </h1>
                    <p className='mb-8 leading-relaxed font-inter'>
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
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 aspect-video'>
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
            </div>
        </section>
    );
};

export default Featured;
