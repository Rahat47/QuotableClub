export default function Example() {
    return (
        <section
            className='h-screen flex justify-center items-center max-w-6xl mx-auto px-4'
            id='home'
        >
            <div className='text-center'>
                <h1 className='text-5xl tracking-tight font-courgette text-white sm:text-5xl md:text-9xl'>
                    <span className='block xl:inline'>"Better Than Good</span>{' '}
                    <span className='block text-yellow-500 xl:inline'>
                        Better Than Most"
                    </span>
                </h1>
                <div className='mt-20 w-full justify-center flex flex-col items-center'>
                    <div className='w-20 h-1 bg-white' />

                    <h3 className='text-white font-raleway mt-10 font-semibold uppercase text-4xl tracking-widest'>
                        Les Brown
                    </h3>
                </div>
            </div>
        </section>
    );
}
