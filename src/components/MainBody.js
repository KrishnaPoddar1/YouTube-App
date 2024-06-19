import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const MainBody = () => {
  return (
    <div className='flex mt-20'>
        <SideBar />
        <Outlet />
    </div>
  )
}

export default MainBody