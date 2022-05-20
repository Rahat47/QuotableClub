import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Link } from 'react-scroll';
import { moreBylesbrowns } from '../assets/data/navbar';
import MobileMenu from './MobileMenu';
import logo from '../assets/images/logo-alt-removebg-cropped.png';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    return (
        <Popover className='relative bg-black text-white'>
            <div className='border-b-2 border-yellow-400'>
                <div className='flex items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
                    <div className='flex justify-start lg:w-0 lg:flex-1'>
                        <Link
                            className='cursor-pointer font-raleway text-2xl'
                            to='home'
                            smooth
                            duration={500}
                        >
                            <img src={logo} alt='logo' className='w-52' />
                        </Link>
                    </div>
                    <div className='-my-2 -mr-2 md:hidden'>
                        <Popover.Button className='inline-flex items-center justify-center rounded-md bg-black p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500'>
                            <span className='sr-only'>Open menu</span>
                            <MenuIcon className='h-6 w-6' aria-hidden='true' />
                        </Popover.Button>
                    </div>
                    <Popover.Group
                        as='nav'
                        className='hidden space-x-10 md:flex'
                    >
                        <Link
                            to='quote'
                            smooth
                            duration={500}
                            className='cursor-pointer text-base font-medium text-white transition-colors duration-150 ease-in-out hover:text-yellow-400'
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
                                            'group inline-flex items-center rounded-md text-base font-medium hover:text-yellow-400 focus:outline-none'
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
                                        <Popover.Panel className='absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'>
                                            <div className='overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
                                                <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                                                    {moreBylesbrowns.map(
                                                        item => (
                                                            <Link
                                                                key={item.name}
                                                                to={item.href}
                                                                className='-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50'
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
                            to='stuck'
                            className='cursor-pointer text-base  font-medium text-white transition-colors duration-150 ease-in-out hover:text-yellow-400'
                            smooth
                            duration={500}
                        >
                            How Do We Get Stuck?
                        </Link>
                        <Link
                            to='clothing'
                            className='cursor-pointer  text-base font-medium text-white transition-colors duration-150 ease-in-out hover:text-yellow-400'
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
