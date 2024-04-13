import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../Home/Navbar'


const Home = () => {
  let [change,Setchange] = useState("blue")
  return (
    <>
    <Navbar/>
      <div className='flex items-center justify-center mt-10 border-none'>
         <div className='h-[518px] w-[1300px]  sc gap-5 flex flex-wrap flex-col overflow-auto justify-center items-center rounded-md'style={{backgroundColor : change}}>
         <div className='img h-full w-full'>
          <div className='flex flex-col justify-center h-full ml-20 gap-5'>
         <div className='h-[20px] w-[160px] bg-yellow-500 text-black flex items-center justify-center rounded-md'>
          <b className='text-[10px]'>Free Shipping-order over $100</b>
         </div>
         <div className='leading-[60px] font-bold'>
          <p className='text-[50px]'>Free Shipping on</p>
          <p className='text-[50px]'> order over <span className='text-green-600'>$100</span></p>
         </div>
         <div className='opacity-55'>
          <p>Free Shipping to First Time Customer Only, After</p>
          <p>promotions and discount are applied.</p>
         </div>
         
         <button onClick={()=>{Setchange(change="yellow")}} className='px-4 py-2 w-[150px] bg-black text-white rounded-lg flex items-center justify-center gap-2'><a href='#'>Shop now</a> <span className='text-[20px]'>→</span></button>
         </div>
         </div>
        
         <div className='img-2 h-full w-full'>
         <div className='flex flex-col justify-center h-full ml-20 gap-5'>
         <div className='h-[20px] w-[160px] bg-yellow-500 text-black flex items-center justify-center rounded-md'>
          <b className='text-[10px]'>Opening Sale Discount 50%</b>
         </div>
         <div className='leading-[60px] font-bold'>
          <p className='text-[50px]'>SuperMarket For</p>
          <p className='text-[50px]'> Fresh Grocery</p>
         </div>
         <div className='opacity-55'>
          <p>introduced for a new model for online grocery shopping</p>
          <p>and convenient home delivery</p>
         </div>
         
         <button onClick={()=>{Setchange(change="yellow")}} className='px-4 py-2 w-[150px] bg-black text-white rounded-lg flex items-center justify-center gap-2'><a href='#'>Shop now</a> <span className='text-[20px]'>→</span></button>
         </div>
         </div>
         </div>
        
         </div>
         <div className='h-[400px]  flex flex-col items-center justify-center'>
          <b className='text-[25px] mr-[1070px]'>Featured Categories</b>
         <div className='flex overflow-auto h-[250px] w-[1300px]  flex-col flex-wrap items-center  justify-center sc'>
          <div className='grid grid-cols-[repeat(10,minmax(200px,200px))] gap-2 items-center justify-center'>
          <NavLink to="/Shop"> <div className='hover:border-green-500 border flex flex-col items-center justify-center h-[200px] gap-5 rounded-xl hover:shadow-xl'>
              <img src='https://freshcart.codescandy.com/assets/images/category/category-baby-care.jpg' alt='logo'></img>
              <p>Baby Care</p>
            </div></NavLink>
            <div className='border flex flex-col items-center justify-center h-[200px] gap-5 rounded-xl hover:shadow-xl'>
              <img src='https://freshcart.codescandy.com/assets/images/category/category-chicken-meat-fish.jpg' alt='logo'></img>
              <p>Chicken,Meat & Fish</p>
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
            <div className='border flex flex-col items-center justify-center h-[200px] gap-5 rounded-xl hover:shadow-xl'>
              <img src='https://freshcart.codescandy.com/assets/images/category/category-atta-rice-dal.jpg' alt='logo'></img>
              <p>Atta,Rice & Dal</p>
            </div>
          </div>
          </div>
         </div>

         <div className='h-[300px]  w-full flex  justify-end gap-8'>


          <div className='h-full w-1/2  flex  justify-end'>
            <div className='img-3 h-[220px] w-[650px] ml-20'>
              <div className='flex flex-col justify-center h-full ml-8'>
              <b className='text-[25px]'>Fruits & Vegetables</b>
              <p className='opacity-55'>Get Upto 30% Off</p>
              <button className='px-4 py-2 bg-black text-white rounded-lg mt-4 w-[120px]'>Shop Now</button>
              </div>
             </div>  
             </div>

            <div className=' h-full w-1/2  flex justify-start'>
            <div className='img-4 h-[220px] w-[650px]'>
            <div className='flex flex-col justify-center h-full ml-8'>
              <b className='text-[25px]'>Freshly Baked Buns</b>
              <p className='opacity-55'>Get Upto 25% Off</p>
              <button className='px-4 py-2 bg-black text-white rounded-lg mt-4 w-[120px]'>Shop Now</button>
              </div>
            </div>
          </div>
          </div>

          <div className='h-[900px]'>
            <p className='font-semibold text-[25px] ml-20'>Popular Products</p>
            <div className='grid grid-cols-[repeat(5,minmax(250px,100px))] gap-5  justify-center mt-10 '>

              <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
               
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

              
            <div className='border h-[380px] rounded-lg flex flex-col justify-center'>
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
       

       <div className='h-[700px] mt-10'>
        <b className='text-[25px] font-semibold ml-20'>Daily Best Sells</b>
        <div className='grid grid-cols-[repeat(4,minmax(300px,320px))] gap-5 items-center justify-center mt-10'>
          <div className='border h-[500px] w-[320px] rounded-xl img-5 flex flex-col items-center gap-3 '>
            <div className='text-white font-extrabold text-[25px] leading-8 mt-6'>
            <p>100% Organic Coffee</p>
            <p>Beans.</p>
            </div>
            <div className='mr-10'>
              <p className='text-white'>Get the best deal before close.</p>
            </div>
            <div className="mr-32">
            <button className='px-4 py-2 w-[135px] bg-green-500 text-white rounded-lg flex items-center justify-center gap-2'><a href='#'>Shop Now</a> <span className='text-[20px]'>→</span></button>
            </div>
          </div>
             
          <div className='border h-[500px] w-[320px] rounded-xl hover:border-green-600 hover:shadow-2xl '>
            <div className='flex flex-col items-center mt-10'>
              <img src='https://freshcart.codescandy.com/assets/images/products/product-img-11.jpg' alt='logo'></img>
            </div>
            <div className='mt-5 ml-4'>
              <p className='opacity-55 text-[12px]'>Tea, Coffee & Drinks</p>
              <p>Roast Ground Coffee</p>
            </div>
            <div className='ml-4 mt-4'>
              <b>$13</b>
              </div>
              <div className='text-center mt-4'>
              <button className='px-24 py-2 bg-green-500 rounded-xl'><span>+</span>Add to cart</button>
              </div>
           
          </div>


          <div className='border h-[500px] w-[320px] rounded-xl hover:border-green-600 hover:shadow-2xl '>
            <div className='flex flex-col items-center mt-10'>
              <img src='https://freshcart.codescandy.com/assets/images/products/product-img-12.jpg' alt='logo'></img>
            </div>
            <div className='mt-5 ml-4'>
              <p className='opacity-55 text-[12px]'>Fruits & Vegetables</p>
              <p>Crushed Tomatoes</p>
            </div>
            <div className='ml-4 mt-4'>
              <b>$13</b>
              </div>
              <div className='text-center mt-4'>
              <button className='px-24 py-2 bg-green-500 rounded-xl'><span>+</span>Add to cart</button>
              </div>
           
          </div>


          <div className='border h-[500px] w-[320px] rounded-xl hover:border-green-600 hover:shadow-2xl '>
            <div className='flex flex-col items-center mt-10'>
              <img src='https://freshcart.codescandy.com/assets/images/products/product-img-13.jpg' alt='logo'></img>
            </div>
            <div className='mt-5 ml-4'>
              <p className='opacity-55 text-[12px]'>Fruits & Vegetables</p>
              <p>Golden Pineapple</p>
            </div>
            <div className='ml-4 mt-4'>
              <b>$13</b>
              </div>
              <div className='text-center mt-4'>
              <button className='px-24 py-2 bg-green-500 rounded-xl'><span>+</span>Add to cart</button>
              </div>
           
          </div>


        </div>
       </div>
        

        <div className='h-[400px] '>
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

export default Home
