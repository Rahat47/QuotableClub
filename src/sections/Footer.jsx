const navigation = {
    main: [
        {
            name: 'DaVicci Family Creed',
            href: 'https://www.facebook.com/groups/671163734219065/',
        },
        { name: 'Check Out FNB', href: 'https://direct.me/fnbooster' },
        {
            name: 'Latest Vinni Divine',
            href: 'https://solo.to/vinnidavicci',
        },
    ],
};

const Footer = () => {
    return (
        <footer className='bg-slate-900'>
            <div className='mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8'>
                <nav
                    className='-mx-5 my-2 mb-8 flex flex-wrap justify-center'
                    aria-label='Footer'
                >
                    {navigation.main.map(item => (
                        <div key={item.name} className='px-5 py-4'>
                            <a
                                href={item.href}
                                className='group relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3 font-bold text-white shadow-2xl'
                            >
                                <span className='absolute inset-0 h-full w-full bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 opacity-0 transition duration-300 ease-out group-hover:opacity-100' />
                                {/* Top glass gradient */}
                                <span className='absolute top-0 left-0 h-1/3 w-full bg-gradient-to-b from-white to-transparent opacity-5' />
                                {/* Bottom gradient */}
                                <span className='absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-white to-transparent opacity-5' />
                                {/* Left gradient */}
                                <span className='absolute bottom-0 left-0 h-full w-4 bg-gradient-to-r from-white to-transparent opacity-5' />
                                {/* Right gradient */}
                                <span className='absolute bottom-0 right-0 h-full w-4 bg-gradient-to-l from-white to-transparent opacity-5' />
                                <span className='absolute inset-0 h-full w-full rounded-md border border-white opacity-10' />
                                <span className='absolute h-0 w-0 rounded-full bg-white opacity-5 transition-all duration-300 ease-out group-hover:h-56 group-hover:w-56' />
                                <span className='relative'>{item.name}</span>
                            </a>
                        </div>
                    ))}
                </nav>

                <p className='text-center text-xs text-gray-400'>
                    Idea Created By Divine C Williams d/b/a DIVINE C WILLIAMS,
                    CEO Of QUOTABLE CLOTHING, Jan 2021
                </p>
                <p className='text-center text-xs text-gray-400'>
                    Concept Developed By Divine C Williams d/b/a DIVINE C
                    WILLIAMS, CEO Of QUOTABLE CLOTHING, Jan 2022
                </p>
                <p className='text-center text-xs text-gray-400'>
                    Concept Executed By Divine C Williams d/b/a DIVINE C
                    WILLIAMS, CEO Of QUOTABLE CLOTHING, Mar 2022
                </p>
            </div>
        </footer>
    );
};

export default Footer;
