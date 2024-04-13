import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar2 = () => {
  return (
    <>
    <div className='h-[100px] bg-white flex flex-row  items-center'>
        <div className='ml-32'>
      <img className='w-[200px]' src='https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg' alt='logo'></img>
      </div>
      <div className='ml-20 flex gap-3'>
      <input className=" border  px-6 py-2 w-[500px] rounded-lg  active: outline-4 outline-green-500" type='text' name='name' placeholder='Search for products'></input>
      <button className='px-8 py-2 border opacity-90 rounded-lg  hover:bg-gray-200'>Location</button>
      </div>
    </div>
    <div className='h-[70px] bg-white flex items-center gap-5 border-b'>
        <span className='flex items-center w-[220px] border rounded-lg justify-center ml-32'>
             <div>
            <img className='w-[40px] bg-green-500' src='https://media.istockphoto.com/vectors/four-squares-logo-design-grid-vector-can-be-used-for-admin-panels-vector-id1205437933?k=20&m=1205437933&s=612x612&w=0&h=lE4GLKl8J7j_jtD44HHrkmet2nJsFvuUrfy71Ra6ZvI=' alt='logo'></img>
            </div>
         <p className='mr-6'>All Departments</p>
         </span>
        <ul className='flex gap-10 '>
         <NavLink className={(e)=>{return e.isActive?"text-red-600":""}} to='/'>Home</NavLink>
         <NavLink className={(e)=>{return e.isActive?"text-green-400":""}} to='/shop'>Shop</NavLink>
         <NavLink className={(e)=>{return e.isActive?"text-yellow-400":""}} to='/store'>Stores</NavLink>
         <NavLink className={(e)=>{return e.isActive?"text-purple-400":""}} to='/Megamenu'>Megamenu</NavLink>
         <NavLink className={(e)=>{return e.isActive?"text-orange-400":""}} to='/Pages'>Pages</NavLink>
         <NavLink className={(e)=>{return e.isActive?"text-gray-400":""}} to='/Account'>Account</NavLink>
         <NavLink className={(e)=>{return e.isActive?"text-pink-400":""}} to='/Dashboard'>Dashboards</NavLink>
         <NavLink className={(e)=>{return e.isActive?"text-green-800":""}} to='/Docs'>Docs</NavLink>
        </ul>
       
    </div>
    </>
  )
}

export default Navbar2
