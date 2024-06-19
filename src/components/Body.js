import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
import Head from './Head'
import MainBody from './MainBody'

const Body = () => {
  return (
    <div>
      <Head />
      <MainBody />
    </div>
    // <div className='flex mt-20'>
    //     <SideBar />
    //     <Outlet />
    // </div>
  )
}

export default Body