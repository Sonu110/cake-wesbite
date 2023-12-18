import React from 'react'
import DashbordHeader from '../../components/DashbordHeader'
import { Outlet } from 'react-router-dom'

function DashbordHome() {
  return (
    <>
    <DashbordHeader></DashbordHeader>
    <div id="main-content" class="  min-h-screen relative overflow-y-auto lg:ml-64">
    <Outlet></Outlet>
   </div>
    </>
  )
}

export default DashbordHome