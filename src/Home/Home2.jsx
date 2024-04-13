import React from 'react'
import { NavLink } from 'react-router-dom'

const Home2 = () => {
  return (
    <>
     <div className='h-[100px] bg-white flex items-center '>
           <div>
            <img className='w-[200px] ml-10' src='https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg' alt='logo'></img>
            </div>
            <div className='w-[250px] h-[50px] bg-white border rounded-l-lg flex items-center justify-evenly gap-20 ml-10'>
            <button>All Catagories</button>
            <span>&gt;</span>
            </div>
            <div>
            <input className='h-[50px] border px-4 outline-none w-[500px]' type='text' name='name' placeholder='Search For Products'></input>
            </div>
            <div className='h-[50px] w-[50px] border flex items-center justify-center cursor-pointer rounded-r-lg'>
              <NavLink to="/" > <img className='w-[30px]' src='https://static.vecteezy.com/system/resources/thumbnails/009/652/218/small/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg' alt='logo'></img>
 </NavLink> </div>
            <div className='h-[50px] w-[200px] rounded-lg border flex items-center justify-center hover:bg-gray-200 ml-5'>
                 <button>Pick Location</button>
            </div>
            
          
     </div>
     
     <div className='h-[60px] bg-green-600 flex items-center text-white'>
     <div className='h-[40px] w-[200px]  flex items-center justify-center ml-7 hover:bg-green-400'>
      <button className=''>All Catagories</button>
     </div>

     <ul className='flex gap-10 ml-10 '>
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

      <div className='flex items-center justify-center mt-10'>
     <div className='h-[150px] bg-gray-200 w-[1200px] rounded-lg flex items-center justify-between'>
      <div  className='flex items-center ml-10 gap-5'>
           <div>
            <img src='https://freshcart.codescandy.com/assets/images/about/about-icons-1.svg' alt='logo'></img>
           </div>

           <div>
            <b className='text-[30px]'>Welcome to FreshCart</b>
            <p>Download the app get free food & <span className='text-green-400'>$30</span> off on your first order.</p>
           </div>
           </div>

           <div className='h-[40px] w-[220px] bg-black text-white rounded-lg flex items-center justify-center mr-10'>
            <button>Download Freshcart App</button>
           </div>

     </div>
     </div>

     <div className='h-[400px] mt-10'>
      <div className='grid grid-cols-[repeat(3,minmax(300px,380px))] justify-center gap-7 '>



        <div className='border h-[250px] w-[380px] img-6 flex flex-col justify-center gap-6'>
             <div className='flex flex-col text-[25px] leading-8 ml-5'>
              <b>10% cashback on</b>
              <b>personal care</b>
             </div>

             <div className='ml-5'>
              <p className='opacity-50'>Max cashback: $12</p>
              <span className='flex gap-1'>
              <p className='opacity-50'>Code:</p> 
              <b className='font-extrabold'>CARE12</b>
              </span>
              </div>


              <div className='h-[50px] w-[100px] bg-black text-white rounded-lg flex items-center justify-center ml-5'>
                <button>Shop Now</button>
              </div>
            
        </div>

        <div className='border h-[250px] w-[380px] img-7 flex flex-col justify-center gap-6'>
             <div className='flex flex-col text-[25px] leading-8 ml-5'>
              <b>Say yes to</b>
              <b>season’s fresh</b>
             </div>

             <div className='ml-5'>
              <p className='opacity-50'>Refresh your day</p>
              <p className='opacity-50'>the fruity way</p> 
              </div>


              <div className='h-[50px] w-[100px] bg-black text-white rounded-lg flex items-center justify-center ml-5'>
                <button>Shop Now</button>
              </div>
            
        </div>


        <div className='border h-[250px] w-[380px] img-8 flex flex-col justify-center gap-6'>
             <div className='flex flex-col text-[25px] leading-8 ml-5'>
              <b>When in doubt,</b>
              <b>eat ice cream</b>
             </div>

             <div className='ml-5'>
              <p className='opacity-50'>Enjoy a scoop of</p>
              <p className='opacity-50'>summer today</p> 
              </div>


              <div className='h-[50px] w-[100px] bg-black text-white rounded-lg flex items-center justify-center ml-5'>
                <button>Shop Now</button>
              </div>
            
        </div>


        
       
      </div>
     </div>


     <div className='h-[500px]'>
     <b className='ml-32 text-[30px]'>Shop by Category</b>
     <div className='grid grid-cols-[repeat(6,minmax(200px,200px))] gap-2 gap-y-5 items-center justify-center mt-8'>
     <div className='border flex flex-col items-center justify-center h-[200px] gap-5 rounded-xl hover:shadow-xl'>

              <img src='https://freshcart.codescandy.com/assets/images/category/category-dairy-bread-eggs.jpg' alt='logo'></img>
              <p>Dairy,Bread & Eggs</p>
            </div>

            <div className='border flex flex-col items-center justify-center h-[200px] gap-5 rounded-xl hover:shadow-xl'>
              <img src='https://freshcart.codescandy.com/assets/images/category/category-snack-munchies.jpg' alt='logo'></img>
              <p>Snacks & Munchies</p>
            </div>

            <div className='border flex flex-col items-center justify-center h-[200px] gap-5 rounded-xl hover:shadow-xl'>
              <img src='https://freshcart.codescandy.com/assets/images/category/category-bakery-biscuits.jpg' alt='logo'></img>
              <p>Bakery & Biscuits</p>
            </div>

            <div className='border flex flex-col items-center justify-center h-[200px] gap-5 rounded-xl hover:shadow-xl'>
              <img src='https://freshcart.codescandy.com/assets/images/category/category-instant-food.jpg' alt='logo'></img>
              <p>Instant Food</p>
            </div>

            <div className='border flex flex-col items-center justify-center h-[200px] gap-5 rounded-xl hover:shadow-xl'>
              <img src='https://freshcart.codescandy.com/assets/images/category/category-tea-coffee-drinks.jpg' alt='logo'></img>
              <p>Tea,Coffee & Drinks</p>
            </div>

            <div className='hover:border-green-500 border flex flex-col items-center justify-center h-[200px] gap-5 rounded-xl hover:shadow-xl'>
              <img src='https://freshcart.codescandy.com/assets/images/category/category-fruits-vegetables.jpg' alt='logo'></img>
              <p>Fruits and Vegetables</p>
            </div>

            <div className='hover:border-green-500 border flex flex-col items-center justify-center h-[200px] gap-5 rounded-xl hover:shadow-xl'>
              <img src='https://freshcart.codescandy.com/assets/images/category/category-cold-drinks-juices.jpg' alt='logo'></img>
              <p>Cold drinks & Juices</p>
            </div>

            <div className='border flex flex-col items-center justify-center h-[200px] gap-5 rounded-xl hover:shadow-xl'>
              <img src='https://freshcart.codescandy.com/assets/images/category/category-chicken-meat-fish.jpg' alt='logo'></img>
              <p>Chicken,Meat & Fish</p>
            </div>

            <div className='hover:border-green-500 border flex flex-col items-center justify-center h-[200px] gap-5 rounded-xl hover:shadow-xl'>
              <img src='https://freshcart.codescandy.com/assets/images/category/category-baby-care.jpg' alt='logo'></img>
              <p>Baby Care</p>
            </div>

            <div className='border flex flex-col items-center justify-center h-[200px] gap-5 rounded-xl hover:shadow-xl'>
              <img src='https://freshcart.codescandy.com/assets/images/category/category-cleaning-essentials.jpg' alt='logo'></img>
              <p>Cleaning Essential</p>
            </div>

            <div className='border flex flex-col items-center justify-center h-[200px] gap-5 rounded-xl hover:shadow-xl'>
              <img src='https://freshcart.codescandy.com/assets/images/category/category-pet-care.jpg' alt='logo'></img>
              <p>Pet Care</p>
            </div>

            <div className='border flex flex-col items-center justify-center h-[200px] gap-5 rounded-xl hover:shadow-xl'>
              <img src='https://freshcart.codescandy.com/assets/images/category/category-atta-rice-dal.jpg' alt='logo'></img>
              <p>Atta,Rice & Dal</p>
            </div>
     </div>
     </div>


     <div className='h-[500px] mt-10'>
    
      <b className='text-[30px] ml-28'>Fruits & vegetables</b>
      <p className='opacity-55 ml-28'>eat fresh, stay healthy</p>
      <div className='flex items-center justify-center'>
      
      <div className='w-[1200px] h-[420px]  flex items-center overflow-auto sc mr-20'>

      <div className='grid grid-cols-[repeat(5,minmax(250px,100px))] gap-5  justify-center ml-5'>


      <div className='border h-[380px]  rounded-lg flex flex-col justify-center'>
   <button className='h-[18px] w-[40px] bg-red-500 text-white rounded-xl text-[10px] text-center ml-5 mt-5'>Sale</button>
   <div className='flex items-center justify-center'>
   <img src='https://freshcart.codescandy.com/assets/images/products/product-img-15.jpg' alt='logo'></img>
   </div>
  
   <div className='ml-5 mb-5'>
    <p className='text-[12px] opacity-55'>Fruit & Vegetables</p>
    <p className='text-[14px]'>Fresh Apple</p>
   </div>
   <div className='flex items-center justify-between ml-5 mb-5'>
    <p className='font-bold'>$18</p>
    <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
   </div>
</div>


          <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               
               <button className='h-[18px] w-[40px] bg-green-500 text-white rounded-xl text-[10px] text-center ml-5 mt-5'>14%</button>
               <div className='flex items-center justify-center'>
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-16.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Fruits & Vegetables</p>
                <p className='text-[14px]'>Golden Pineapple</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$24</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>
            </div>


            <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-17.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Fruits & Vegetables</p>
                <p className='text-[14px]'>Fresh Kiwi</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$32</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>

              
            </div>
            <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               
               <button className='h-[18px] w-[40px] bg-red-500 text-white rounded-xl text-[10px] text-center ml-5 mt-5'>Hot</button>
               <div className='flex items-center justify-center'>
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-18.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Fruits & Vegetables</p>
                <p className='text-[14px]'>Fresh Banana</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$3</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>

               </div>
               <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-19.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Fruits & Vegetables</p>
                <p className='text-[14px]'>Fresh Beetroot</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$13</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>
            </div>
           </div>
      </div>
      </div>
      </div>


      
      <div className='h-[500px] mt-10'>
      
      
      <b className='text-[30px] ml-28'>Breakfast & dairy</b>
      <p className='opacity-55 ml-28'>butter, cheese, milk, curd and more</p>
      
      <div className='flex items-center justify-center'>
      <div className='w-[1200px] h-[420px]  flex items-center overflow-auto sc mr-20'>

      <div className='grid grid-cols-[repeat(10,minmax(250px,100px))] gap-5  justify-center ml-5'>


      <div className='border h-[380px]  rounded-lg flex flex-col justify-center'>
   <button className='h-[18px] w-[40px] bg-red-500 text-white rounded-xl text-[10px] text-center ml-5 mt-5'>Sale</button>
   <div className='flex items-center justify-center'>
   <img src='https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg' alt='logo'></img>
   </div>
  
   <div className='ml-5 mb-5'>
    <p className='text-[12px] opacity-55'>Snack & Munchies</p>
    <p className='text-[14px]'>Haldiram's Sev Bhujia</p>
   </div>
   <div className='flex items-center justify-between ml-5 mb-5'>
    <p className='font-bold'>$18</p>
    <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
   </div>
</div>


          <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               
               <button className='h-[18px] w-[40px] bg-green-500 text-white rounded-xl text-[10px] text-center ml-5 mt-5'>14%</button>
               <div className='flex items-center justify-center'>
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-2.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Bakery & Biscuits</p>
                <p className='text-[14px]'>NutriChoice Digestive</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$24</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>
            </div>


            <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-3.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Bakery & Biscuits</p>
                <p className='text-[14px]'>Cadbury 5 Star Chocolate</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$32</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>

              
            </div>
            <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               
               <button className='h-[18px] w-[40px] bg-red-500 text-white rounded-xl text-[10px] text-center ml-5 mt-5'>Hot</button>
               <div className='flex items-center justify-center'>
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-4.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Snack & Munchies</p>
                <p className='text-[14px]'>Onion Flavour Potato</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$3</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>

               </div>
               <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-5.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Instant Food</p>
                <p className='text-[14px]'>Salted Instant Popcorn</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$13</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>
            </div>
            <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               
               <button className='h-[18px] w-[40px] bg-red-500 text-white rounded-xl text-[10px] text-center ml-5 mt-5'>Sale</button>
               <div className='flex items-center justify-center'>
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-6.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Dairy, Bread & Eggs</p>
                <p className='text-[14px]'>Blueberry Greek Yogurt</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$18</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>
            </div>
               

            <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-7.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Dairy, Bread & Eggs</p>
                <p className='text-[14px]'>Britannia Cheese Slices</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$24</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>
            </div>

            <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-8.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Instant Food</p>
                <p className='text-[14px]'>Kellogg's Original Cereals</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$32</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>
            </div>

            <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-9.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Snack & Munchies</p>
                <p className='text-[14px]'>Slurrp Millet Chocolate</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$3</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>
            </div>

            <div className='border h-[380px] rounded-lg flex flex-col justify-center mr-5'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-10.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Dairy, Bread & Eggs</p>
                <p className='text-[14px]'>Amul Butter - 500 g</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$13</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>
            </div>

            </div>
      </div>
      </div>
 </div>

      
      
        <div className='h-[500px] mt-10'>
      
      
      <b className='text-[30px] ml-28'>Biscuits, snacks & chocolates</b>
      <p className='opacity-55 ml-28'>discover a wide variety of munchies</p>
      
      <div className='flex items-center justify-center'>
      <div className='w-[1200px] h-[420px]  flex items-center overflow-auto sc mr-20'>

      <div className='grid grid-cols-[repeat(10,minmax(250px,100px))] gap-5  justify-center ml-5'>


      <div className='border h-[380px]  rounded-lg flex flex-col justify-center'>
   <button className='h-[18px] w-[40px] bg-red-500 text-white rounded-xl text-[10px] text-center ml-5 mt-5'>Sale</button>
   <div className='flex items-center justify-center'>
   <img src='https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg' alt='logo'></img>
   </div>
  
   <div className='ml-5 mb-5'>
    <p className='text-[12px] opacity-55'>Snack & Munchies</p>
    <p className='text-[14px]'>Haldiram's Sev Bhujia</p>
   </div>
   <div className='flex items-center justify-between ml-5 mb-5'>
    <p className='font-bold'>$18</p>
    <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
   </div>
</div>


          <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               
               <button className='h-[18px] w-[40px] bg-green-500 text-white rounded-xl text-[10px] text-center ml-5 mt-5'>14%</button>
               <div className='flex items-center justify-center'>
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-2.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Bakery & Biscuits</p>
                <p className='text-[14px]'>NutriChoice Digestive</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$24</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>
            </div>


            <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-3.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Bakery & Biscuits</p>
                <p className='text-[14px]'>Cadbury 5 Star Chocolate</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$32</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>

              
            </div>
            <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               
               <button className='h-[18px] w-[40px] bg-red-500 text-white rounded-xl text-[10px] text-center ml-5 mt-5'>Hot</button>
               <div className='flex items-center justify-center'>
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-4.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Snack & Munchies</p>
                <p className='text-[14px]'>Onion Flavour Potato</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$3</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>

               </div>
               <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-5.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Instant Food</p>
                <p className='text-[14px]'>Salted Instant Popcorn</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$13</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>
            </div>
            <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               
               <button className='h-[18px] w-[40px] bg-red-500 text-white rounded-xl text-[10px] text-center ml-5 mt-5'>Sale</button>
               <div className='flex items-center justify-center'>
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-6.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Dairy, Bread & Eggs</p>
                <p className='text-[14px]'>Blueberry Greek Yogurt</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$18</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>
            </div>
               

            <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-7.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Dairy, Bread & Eggs</p>
                <p className='text-[14px]'>Britannia Cheese Slices</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$24</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>
            </div>

            <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-8.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Instant Food</p>
                <p className='text-[14px]'>Kellogg's Original Cereals</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$32</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>
            </div>

            <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-9.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Snack & Munchies</p>
                <p className='text-[14px]'>Slurrp Millet Chocolate</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$3</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>
            </div>

            <div className='border h-[380px] rounded-lg flex flex-col justify-center mr-5'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-10.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Dairy, Bread & Eggs</p>
                <p className='text-[14px]'>Amul Butter - 500 g</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$13</p>
                <span className='inline mr-5'><button className='h-[30px] w-[70px] bg-green-600 rounded-lg text-white flex items-center justify-center'><span className='text-[25px] mb-1'>+</span>Add</button></span>
               </div>
            </div>

            </div>
      </div>
      </div>
 </div>


 <div className='h-[800px] flex items-center justify-center'>
  <div className='h-[700px] w-[1200px] border-t-2 border-b-2 border-black flex items-center justify-center'>

    <img src='https://freshcart.codescandy.com/assets/images/png/iphone-2.png'alt='logo'></img>
    <div className='flex flex-col ml-40 gap-10'>
    <div>
      <b className='text-[30px]'>Get the FreshCart app</b>
      <p>We will send you a link, open it on your phone to download the app.</p>
    </div>

    <div className='flex flex-col gap-3'>
    <div className='flex  items-center  gap-5'>

      <div>
      <input type='radio'></input>
      <span>Email</span>
      </div>


      <div>
      <input type='radio'></input>
      <span>Phone</span>
      </div>
    </div>


    <div className='flex gap-5'>
      <input className='w-[300px] px-4 outline-none border rounded-lg' type='text' name='text' placeholder='Phone'></input>
      <span className='h-[50px] w-[200px] bg-green-600 text-white flex items-center justify-center rounded-lg'>
        <button>Share App Link</button>
      </span>
    </div>


    </div>



    
    
    <div className='flex flex-col gap-6'>
      <p className='text-[12px] opacity-65'>Download app from</p>
      <div className='flex gap-5'>
      <NavLink to="https://www.apple.com/in/app-store/"><img src='https://freshcart.codescandy.com/assets/images/appbutton/appstore-btn.svg' alt='logo'></img></NavLink>
      <img src='https://freshcart.codescandy.com/assets/images/appbutton/googleplay-btn.svg' alt='logo'></img>
      </div>
    </div>

  </div>
 </div>
 </div>

 <div className='h-[400px] mt-24'>
           <div className='grid grid-cols-[repeat(4,minmax(300px,400px))]'>
            <div className='h-[300px]  flex flex-col gap-5 ml-14'>
              <img className='w-[50px]' src='https://freshcart.codescandy.com/assets/images/icons/clock.svg' alt='logo'></img>
              <b className='text-[20px]'>10 minute grocery now</b>
              <div className='opacity-55 text-[14px]'>
              <p>Get your order delivered to your doorstep at</p>
              <p>the earliest from FreshCart pickup stores</p>
              <p>near you.</p>
              </div>
              
            </div>


            <div className='h-[300px]  flex flex-col gap-5  ml-7'>
              <img className='w-[50px]' src='https://freshcart.codescandy.com/assets/images/icons/gift.svg' alt='logo'></img>
              <b className='text-[20px]'>Best Prices & Offers</b>
              <div className='opacity-55 text-[14px]'>
              <p>Cheaper prices than your local supermarket,</p>
              <p> great cashback offers to top it off. Get best</p>
              <p>pricess & offers.</p>
              </div>
              
            </div>
           

            <div className='h-[300px]  flex flex-col gap-5'>
              <img className='w-[50px]' src='https://freshcart.codescandy.com/assets/images/icons/package.svg' alt='logo'></img>
              <b className='text-[20px]'>Wide Assortment</b>
              <div className='opacity-55 text-[14px]'>
              <p>Choose from 5000+ products across food,</p>
              <p> personal care, household, bakery, veg and</p>
              <p>non-veg & other categories.</p>
              </div>
              
            </div>


            <div className='h-[300px] flex flex-col gap-5 '>
              <img className='w-[50px]' src='https://freshcart.codescandy.com/assets/images/icons/refresh-cw.svg' alt='logo'></img>
              <b className='text-[20px]'>Easy Returns</b>
              <div className='opacity-55 text-[14px]'>
              <p>Not satisfied with a product? Return it at the</p>
              <p>  doorstep & get a refund within hours. No </p>
              <p>questions asked policy.</p>
              </div>
              
            </div>
           </div>
        </div>

        <div className='h-[500px] bg-gray-100 flex flex-col items-center justify-end'>

             <div className='grid grid-cols-[repeat(6,minmax(200px,200px))] gap-8'>

              <div className=' flex flex-col'>
                <b className='mb-5'>Categories</b>
                <ul className='flex flex-col gap-3 opacity-55'>
                  <li className='hover:text-green-400 cursor-pointer'>Vegetables & Fruits</li>
                  <li className='hover:text-green-400 cursor-pointer'>Breakfast & instant food</li>
                  <li className='hover:text-green-400 cursor-pointer'>Bakery & Biscuits</li>
                  <li className='hover:text-green-400 cursor-pointer'>Atta, rice & dal</li>
                  <li className='hover:text-green-400 cursor-pointer'>Sauces & spreads</li>
                  <li className='hover:text-green-400 cursor-pointer'>Organic & gourmet</li>
                  <li className='hover:text-green-400 cursor-pointer'>Baby care</li>
                  <li className='hover:text-green-400 cursor-pointer'>Cleaning essentials</li>
                  <li className='hover:text-green-400 cursor-pointer'>Personal care</li>
                </ul>
              </div>


              <div className=' flex flex-col'>
                
                <ul className='flex flex-col gap-3 mt-11 opacity-55'>
                  <li className='hover:text-green-400 cursor-pointer'>Dairy, bread & eggs</li>
                  <li className='hover:text-green-400 cursor-pointer'>Cold drinks & juices</li>
                  <li className='hover:text-green-400 cursor-pointer'>Tea, coffee & drinks</li>
                  <li className='hover:text-green-400 cursor-pointer'>Masala, oil & more</li>
                  <li className='hover:text-green-400 cursor-pointer'>Chicken, meat & fish</li>
                  <li className='hover:text-green-400 cursor-pointer'>Paan corner</li>
                  <li className='hover:text-green-400 cursor-pointer'>Pharma & wellness</li>
                  <li className='hover:text-green-400 cursor-pointer'>Home & office</li>
                  <li className='hover:text-green-400 cursor-pointer'>Pet care</li>
                </ul>
              </div>


              <div className=' flex flex-col'>
                <b className='mb-5'>Get to know us</b>
                <ul className='flex flex-col gap-3 opacity-55'>
                  <li className='hover:text-green-400 cursor-pointer'>Company</li>
                  <li className='hover:text-green-400 cursor-pointer'>About</li>
                  <li className='hover:text-green-400 cursor-pointer'>Blog</li>
                  <li className='hover:text-green-400 cursor-pointer'>Help Center</li>
                  <li className='hover:text-green-400 cursor-pointer'>Our Value</li>
                 
                </ul>
              </div>

              <div className=' flex flex-col'>
                <b className='mb-5'>For Consumers</b>
                <ul className='flex flex-col gap-3 opacity-55'>
                  <li className='hover:text-green-400 cursor-pointer'>Payments</li>
                  <li className='hover:text-green-400 cursor-pointer'>Shipping</li>
                  <li className='hover:text-green-400 cursor-pointer'>Product Returns</li>
                  <li className='hover:text-green-400 cursor-pointer'>FAQ</li>
                  <li className='hover:text-green-400 cursor-pointer'>Shop Checkout</li>
                 
                </ul>
              </div>

              <div className=' flex flex-col'>
                <b className='mb-5'>Become a Shopper</b>
                <ul className='flex flex-col gap-3 opacity-55'>
                  <li className='hover:text-green-400 cursor-pointer'>Shopper Opportunities</li>
                  <li className='hover:text-green-400 cursor-pointer'>Become a Shopper</li>
                  <li className='hover:text-green-400 cursor-pointer'>Earnings</li>
                  <li className='hover:text-green-400 cursor-pointer'>Ideas & Guides</li>
                  <li className='hover:text-green-400 cursor-pointer'>New Retailers</li>
                 
                </ul>
              </div>
             
              <div className=' flex flex-col'>
                <b className='mb-5'>Freshcart programs</b>
                <ul className='flex flex-col gap-3 opacity-55'>
                  <li className='hover:text-green-400 cursor-pointer'>Freshcart programs</li>
                  <li className='hover:text-green-400 cursor-pointer'>Gift Cards</li>
                  <li className='hover:text-green-400 cursor-pointer'>Promos & Coupons</li>
                  <li className='hover:text-green-400 cursor-pointer'>Freshcart Ads</li>
                  <li className='hover:text-green-400 cursor-pointer'>Careers</li>
                 
                </ul>
              </div>
             </div>
         </div>
         <div className='h-[100px] bg-gray-100 flex items-center justify-center'>
              <div className='h-[80px] border-t border-b border-black w-[1400px] flex items-center justify-between mt-8'>
                <div className='flex flex-row gap-3'>
                   <b>Payment Partners</b>
                   <span><img src='https://freshcart.codescandy.com/assets/images/payment/amazonpay.svg' alt='logo'></img></span>
                   <span><img src='https://freshcart.codescandy.com/assets/images/payment/american-express.svg' alt='logo'></img></span>
                   <span><img src='https://freshcart.codescandy.com/assets/images/payment//mastercard.svg' alt='logo'></img></span>
                   <span><img src='https://freshcart.codescandy.com/assets/images/payment/paypal.svg' alt='logo'></img></span>
                   <span><img src='https://freshcart.codescandy.com/assets/images/payment/visa.svg' alt='logo'></img></span>
                   </div>
                   <div className='flex items-center gap-5'>
                <b>Get deliveries with FreshCart</b>
                <img className='w-[130px]' src='https://freshcart.codescandy.com/assets/images/appbutton/appstore-btn.svg' alt='logo'></img>
                <img className='w-[130px]' src='https://freshcart.codescandy.com/assets/images/appbutton/googleplay-btn.svg' alt='logo'></img>
              </div>
              </div>
         </div>
         <div className='bg-gray-100 flex justify-start items-start h-[200px]'>
          <p className='ml-10 text-[12px] mt-5'>© 2022 - 2024 FreshCart eCommerce HTML Template. All rights reserved. Powered by <span className='text-green-400 cursor-pointer'>Codescandy.</span></p>
         </div>
        
         

 
 </>


    
  
   


    
 
   
    
  )
}

export default Home2
