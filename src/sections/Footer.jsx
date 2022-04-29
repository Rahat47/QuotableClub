const navigation = {
    main: [
        {
            name: 'Join The DaVicci Family Creed',
            href: 'https://www.facebook.com/groups/671163734219065/',
        },
        { name: 'Check Out FNB', href: 'https://direct.me/fnbooster' },
        {
            name: 'See The Latest Vinni Divine',
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
                                className='rounded-xl border border-red-700 bg-red-500 p-4 text-lg text-white transition-colors hover:bg-red-600 hover:text-black md:p-6'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {item.name}
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
