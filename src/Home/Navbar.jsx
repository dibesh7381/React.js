import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='h-[50px]'>
        <ul className='flex gap-5 ml-32 mt-8 '>
           <NavLink className={(e)=>{return e.isActive?"text-pink-400 underline underline-offset-8 decoration-blue-500":""}} to="/Home2"><li>Home-2</li></NavLink> 
           <NavLink className={(e)=>{return e.isActive?"text-green-400 underline underline-offset-8 decoration-orange-500":""}} to="/Home3"><li>Home-3</li></NavLink> 
           <NavLink className={(e)=>{return e.isActive?"text-red-400 underline underline-offset-8 decoration-green-500":""}} to="/Home4"><li>Home-4</li></NavLink> 
           <NavLink className={(e)=>{return e.isActive?"text-purple-400 underline underline-offset-8 decoration-yellow-500":""}} to="/Home5"><li>Home-5</li></NavLink> 
        </ul>
      </div>
    </>
  )
}

export default Navbar
