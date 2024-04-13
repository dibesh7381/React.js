import Navbar1 from './components/Navbar1'
import React from 'react'
import Navbar2 from './components/Navbar2'
import Home from './components/Home'
import Shop from './components/Shop'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Megamenu from './components/Megamenu'
import Store from './components/Store'
import Pages from './components/Pages'
import Account from './components/Account'
import Dashboard from './components/Dashboard'
import Docs from './components/Docs'
import Home2 from './Home/Home2'
import Home4 from './Home/Home4'
import Home3 from './Home/Home3'
import Home5 from './Home/Home5'
import All from './Home/All'
import Recipe from './Home/Recipe'
import Navbar from './Home/Navbar'


function App() {

  const A = createBrowserRouter([
    {
      path:"/",
      element:<>
      <Navbar1/> <Navbar2/> <Home/> </> 
    },
    {
      path:"/Shop",
      element:<>
       <Navbar1/> <Navbar2/> <Shop/> </> 
    },
    {
      path:"/Megamenu",
      element:<>
       <Navbar1/> <Navbar2/> <Megamenu/> </> 
    },
    {
      path:"/Store",
      element:<>
       <Navbar1/> <Navbar2/> <Store/> </> 
    },
    {
      path:"/Pages",
      element:<>
       <Navbar1/> <Navbar2/> <Pages/> </> 
    },
    {
      path:"/Account",
      element:<>
       <Navbar1/> <Navbar2/> <Account/> </> 
    },
    {
      path:"/Dashboard",
      element:<>
       <Navbar1/> <Navbar2/> <Dashboard/> </> 
    },
    {
      path:"/Docs",
      element:<>
       <Navbar1/> <Navbar2/> <Docs/> </> 
    },
    {
      path:"/Home2",
      element:<>
           <Navbar/>  <Home2/>
      </>
    },
    {
      path:"/Home3",
      element:<><Navbar/> <Home3/> </>
    },
    {
      path:"/Home4",
      element:<> <Navbar2/> <Navbar/>   <Home4/></> 
    },
    {
      path:"/Home5",
      element:<><Navbar/> <Home5/></>
    },
    {
      path:"/All",
      element:<All/>
    },
    {
      path:"/Recipe",
      element:<Recipe/>
    }

  ])

  return (
    <>
    <RouterProvider router={A}/>
    </>
  )
}

export default App
