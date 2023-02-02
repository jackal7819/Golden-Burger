import React, { useState } from 'react';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { BiSearchAlt } from 'react-icons/bi';
import {
    RiShoppingCart2Fill,
    RiWallet3Fill,
    RiPriceTag3Fill,
} from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdFavorite } from 'react-icons/md';
import { GiHelp } from 'react-icons/gi';
import { BsFillSave2Fill } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* Left side */}
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <HiOutlineMenuAlt2 size={30} />
                </div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                    Golden <span className='font-bold'>Burger</span>
                </h1>
                <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                    <p className='bg-black text-white rounded-full p-2'>
                        Delivery
                    </p>
                    <p className='p-2'>Pickup</p>
                </div>
            </div>

            {/* Search Input */}
            <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200] sm:w-[400px] lg:w-[500px]'>
                <BiSearchAlt size={25} />
                <input
                    className='bg-transparent p-2 w-full focus:outline-none'
                    type='text'
                    placeholder='Search foods'
                />
            </div>

            {/* Cart button */}
            <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
                <RiShoppingCart2Fill size={20} className='mr-2' /> Cart
            </button>

            {/* Mobile Menu */}
            {/*Overlay */}
            {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

            {/* Side drawer menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <GrClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className='absolute right-4 top-4 cursor-pointer'
                />
                <h2 className='text-2xl p-4'>
                    Golden <span className='font-bold'>Burger</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-4 flex'>
                            <TbTruckDelivery size={25} className='mr-4' />{' '}
                            Orders
                        </li>
                        <li className='text-xl py-4 flex'>
                            <MdFavorite size={25} className='mr-4' /> Favorites
                        </li>
                        <li className='text-xl py-4 flex'>
                            <RiWallet3Fill size={25} className='mr-4' /> Wallet
                        </li>
                        <li className='text-xl py-4 flex'>
                            <GiHelp size={25} className='mr-4' /> Help
                        </li>
                        <li className='text-xl py-4 flex'>
                            <RiPriceTag3Fill size={25} className='mr-4' />{' '}
                            Promotions
                        </li>
                        <li className='text-xl py-4 flex'>
                            <BsFillSave2Fill size={25} className='mr-4' /> Best
                            Ones
                        </li>
                        <li className='text-xl py-4 flex'>
                            <FaUserFriends size={25} className='mr-4' /> Invite
                            Friends
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
