import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link } from 'react-scroll';
import { moreBylesbrowns } from '../assets/data/navbar';
import MobileMenu from './MobileMenu';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    return (
        <Popover className='relative bg-black text-white'>
            <div className='border-b-2 border-yellow-400'>
                <div className='flex justify-between items-center px-4 sm:px-6 py-6 md:justify-start md:space-x-10'>
                    <div className='flex justify-start lg:w-0 lg:flex-1'>
                        <Link
                            className='text-2xl font-raleway cursor-pointer'
                            to='home'
                            smooth
                            duration={500}
                        >
                            Quotable Club
                        </Link>
                    </div>
                    <div className='-mr-2 -my-2 md:hidden'>
                        <Popover.Button className='bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500'>
                            <span className='sr-only'>Open menu</span>
                            <MenuIcon className='h-6 w-6' aria-hidden='true' />
                        </Popover.Button>
                    </div>
                    <Popover.Group
                        as='nav'
                        className='hidden md:flex space-x-10'
                    >
                        <Link
                            to='quote'
                            smooth
                            duration={500}
                            className='text-base cursor-pointer font-medium text-white hover:text-yellow-400 transition-colors duration-150 ease-in-out'
                        >
                            LES BROWN QUOTE
                        </Link>
                        <Popover className='relative'>
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={classNames(
                                            open
                                                ? 'text-yellow-400'
                                                : 'text-white',
                                            'group rounded-md inline-flex items-center text-base font-medium hover:text-yellow-400 focus:outline-none'
                                        )}
                                    >
                                        <span>More By Les Brown</span>
                                        <ChevronDownIcon
                                            className={classNames(
                                                open
                                                    ? 'text-yellow-400'
                                                    : 'text-white',
                                                'ml-2 h-5 w-5 group-hover:text-yellow-400'
                                            )}
                                            aria-hidden='true'
                                        />
                                    </Popover.Button>

                                    <Transition
                                        as={Fragment}
                                        enter='transition ease-out duration-200'
                                        enterFrom='opacity-0 translate-y-1'
                                        enterTo='opacity-100 translate-y-0'
                                        leave='transition ease-in duration-150'
                                        leaveFrom='opacity-100 translate-y-0'
                                        leaveTo='opacity-0 translate-y-1'
                                    >
                                        <Popover.Panel className='absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
                                            <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                                                <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                                                    {moreBylesbrowns.map(
                                                        item => (
                                                            <Link
                                                                key={item.name}
                                                                to={item.href}
                                                                className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                                                                smooth
                                                                duration={500}
                                                            >
                                                                <div className='ml-4'>
                                                                    <p className='text-base font-medium text-gray-900'>
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </Link>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                        <Link
                            to='#'
                            className='text-base cursor-pointer  font-medium text-white hover:text-yellow-400 transition-colors duration-150 ease-in-out'
                            smooth
                            duration={500}
                        >
                            How Do We Get Stuck?
                        </Link>
                        <Link
                            to='#'
                            className='text-base  cursor-pointer font-medium text-white hover:text-yellow-400 transition-colors duration-150 ease-in-out'
                            smooth
                            duration={500}
                        >
                            Quotable Clothing
                        </Link>
                    </Popover.Group>
                </div>
            </div>

            <MobileMenu />
        </Popover>
    );
}
