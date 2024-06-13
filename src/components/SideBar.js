import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className='p-4 pr-24 bg-white'>
      <ul className='p-2'>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'><Link to="/">Home</Link></li>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>Shorts</li>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>Subscriptions</li>
      </ul>
      <hr/>
      <h1 className='pt-2 cursor-pointer'>You</h1>
      <ul className='p-2 cursor-pointer'>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>Your Channel</li>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>History</li>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>Playlist</li>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>Your Videos</li>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>Watch Later</li>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>Liked Videos</li>
      </ul>
      <hr />
      <h1 className='pt-2 cursor-pointer'>Explore</h1>
      <ul className='p-2 cursor-pointer'>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>Trending</li>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>Shopping</li>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>Music</li>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>Movies</li>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>Live</li>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>Gaming</li>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>News</li>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>Sports</li>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>Course</li>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>Fashion and Beauty</li>
        <li className='my-1 hover:bg-gray-400 rounded-lg p-2'>Podcasts</li>
      </ul>
    </div>
  )
}

export default SideBar