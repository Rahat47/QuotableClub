import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/solid';
import { Link } from 'react-scroll';
import { moreBylesbrowns } from '../assets/data/navbar';
const MobileMenu = () => {
    return (
        <Transition
            as={Fragment}
            enter='duration-200 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
        >
            <Popover.Panel
                focus
                className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
            >
                <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
                    <div className='pt-5 pb-6 px-5'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <Link
                                    className='text-2xl font-raleway cursor-pointer text-black font-semibold'
                                    to='home'
                                    smooth
                                    duration={500}
                                >
                                    Quotable Club
                                </Link>
                            </div>
                            <div className='-mr-2'>
                                <Popover.Button className='rounded-md p-2 inline-flex items-center justify-center text-black hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400'>
                                    <span className='sr-only'>Close menu</span>
                                    <XIcon
                                        className='h-6 w-6'
                                        aria-hidden='true'
                                    />
                                </Popover.Button>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <nav className='grid gap-y-8'>
                                {moreBylesbrowns.map(item => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className='-m-3 p-3 flex items-center cursor-pointer rounded-md hover:bg-gray-50'
                                        smooth
                                        duration={500}
                                    >
                                        <span className='ml-3 text-base font-medium text-gray-900'>
                                            {item.name}
                                        </span>
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                    <div className='py-6 px-5 space-y-6'>
                        <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                            <Link
                                to='#'
                                className='text-base cursor-pointer  font-medium text-black hover:text-yellow-400 transition-colors duration-150 ease-in-out'
                                smooth
                                duration={500}
                            >
                                How Do We Get Stuck?
                            </Link>
                            <Link
                                to='#'
                                className='text-base  cursor-pointer font-medium text-black hover:text-yellow-400 transition-colors duration-150 ease-in-out'
                                smooth
                                duration={500}
                            >
                                Quotable Clothing
                            </Link>
                        </div>
                    </div>
                </div>
            </Popover.Panel>
        </Transition>
    );
};

export default MobileMenu;
