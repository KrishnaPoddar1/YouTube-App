import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className='grid grid-flow-col p-4 fixed w-full top-0 bg-white'>
      <div className='flex col-span-1'>
        <img alt='menu' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256' className='h-10 cursor-pointer' onClick={handleToggleMenu} />
        <img alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png' className='h-10 mx-2  cursor-pointer' />
      </div>
      <div className='col-span-10 px-12'>
        <input type='text' className='w-1/2 border border-gray-400 p-2 rounded-l-full'/>
        <button className='p-2 border border-gray-400 rounded-r-full hover:bg-red-600 hover:text-white'>Search</button>
      </div>
      <div className='col-span-1'>
      <img alt='user-icon' className='h-10 cursor-pointer' src='https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg' />
      </div>
    </div>
  )
}

export default Head