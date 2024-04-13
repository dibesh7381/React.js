import React from 'react'
import { NavLink } from 'react-router-dom'
const Home5 = () => {
  return (
    <>
      <div className='h-[30px]  flex items-center justify-between'>
           <div className='flex gap-10 ml-32'>
            <b>USD $</b>
            <p>English</p>
           </div>
           <div className='flex gap-5 cursor-pointer opacity-55 text-[14px] mr-32'>
            <p className='hover:text-green-500'>Support</p>
            <p className='hover:text-green-500'>Delivery</p>
            <p className='hover:text-green-500'>Warranty</p>
           </div>
      </div>
      <div  className='h-[100px] w-full  flex items-center justify-evenly'>
        <img src='https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg' alt='logo'></img>
        <div className='flex'>
          <input className='h-[40px] w-[500px] border-t border-b border-l rounded-l-lg px-4 outline-none' type='text' name='name' placeholder='Search for Products'></input>
          <button className='h-[40px] w-[100px] border-t border-b border-r border bg-green-500 text-white font-extrabold rounded-r-lg hover:bg-green-600'>Search</button>
        </div>
        <div className='flex items-center justify-center gap-7'>
        <div className='flex flex-col items-center'>
          <img className='w-[30px] rounded-full hover:scale-125' src='https://t4.ftcdn.net/jpg/01/98/33/63/360_F_198336329_D3JsfuSGm5UBTXR9fwcr2WhKNebr7SiB.jpg' alt='logo'></img>
          <p className='text-[12px] opacity-55'>Notification</p>
        </div>

        <div className='flex flex-col items-center'>
          <img className='w-[30px] rounded-full' src='https://icons.veryicon.com/png/o/miscellaneous/esgcc-basic-icon-library/register-14.png' alt='logo'></img>
          <p className='text-[12px] opacity-55'>Sign up</p>
        </div>

        <div className='flex flex-col items-center'>
          <img className='w-[30px] rounded-full' src='https://cdn-icons-png.freepik.com/512/5404/5404525.png' alt='logo'></img>
          <p className='text-[12px] opacity-55'>My Orders</p>
        </div>

        <div className='flex flex-col items-center'>
          <img className='w-[30px] rounded-full object-contain object-center' src='https://static.thenounproject.com/png/470792-200.png' alt='logo'></img>
          <p className='text-[12px] opacity-55'>Shopping Cart</p>
          </div>
        </div>
      </div>
      <div className='h-[60px]  flex items-center text-black'>
     <div className='h-[40px] w-[200px]  flex items-center justify-center ml-7 hover:bg-green-400'>
      <button className='ml-14'>All Catagories</button>
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

     <div className='h-[800px] flex items-center justify-center'>
      <div className='h-[500px] w-[1200px] border rounded-lg overflow-auto sc'>
              <div className='grid grid-cols-[repeat(3,minmax(1200px,500px))] gap-5'>
                <div className='img-18 h-[500px] flex flex-col justify-center gap-5'>
                  <div className='font-bold text-[50px] text-white font-[poppins] leading-[60px] ml-20'>
                    <p>SuperMarket For</p>
                    <p>Fresh Grocery</p>
                  </div>
                  <div className='text-white opacity-55 ml-20'>
                    <p>Introduced a new model for online grocery shopping</p>
                    <p>and convenient home delivery at any time</p>
                  </div>
                  <div className='ml-20 mt-4'>
                   <NavLink to="/"><button className='px-4 py-2 bg-black text-white rounded-xl'>Shop Now →</button>
                  </NavLink> 
                </div>
              </div>

              <div className='img-19 h-[500px] flex flex-col justify-center gap-5'>
                  <div className='font-bold text-[50px] text-black font-[poppins] leading-[60px] ml-20'>
                    <p>Opening Sale</p>
                    <p>Discount up to 50%</p>
                  </div>
                  <div className='text-black opacity-55 ml-20'>
                    <p>Snack on late night munchies of delicious nuts &</p>
                    <p>you are guaranteed happiness before you doze!</p>
                  </div>
                  <div className='ml-20 mt-4'>
                   <NavLink to="/"><button className='px-4 py-2 bg-black text-white rounded-xl'>Shop Now →</button>
                  </NavLink> 
                </div>
              </div>

              <div className='img-20 h-[500px] flex flex-col justify-center gap-5'>
                  <div className='font-bold text-[50px] text-black font-[poppins] leading-[60px] ml-20'>
                    <p>Midnight Munch</p>
                    <p>Combo</p>
                  </div>
                  <div className='text-black opacity-55 ml-20'>
                    <p>Snack on late night munchies of delicious nuts &</p>
                    <p>you are guaranteed happiness before you doze!</p>
                  </div>
                  <div className='ml-20 mt-4'>
                   <NavLink to="/"><button className='px-4 py-2 bg-black text-white rounded-xl'>Shop Now →</button>
                  </NavLink> 
                </div>
              </div>
              </div>
      </div>
    </div>


        <div className='h-[1200px] flex'>
         <div className='h-full w-[400px]  flex flex-col items-end'>
          
          <p className='mr-[200px] text-[20px] font-bold'>Categories</p>
          
          <div className='grid grid-cols-[repeat(0,minmax(300px,50px))] mt-5'>
            <div className='border h-[50px] w-[300px] flex items-center justify-start gap-3 rounded-t-lg'>
              <img className='w-[40px] ml-3' src='https://static.vecteezy.com/system/resources/thumbnails/021/707/415/small/milk-carton-icon-vector.jpg' alt='logo'></img>
              <p>Dairy Bread & Eggs</p>
            </div>
            <div className='border h-[50px] w-[300px] flex items-center justify-start gap-3'>
              <img className='w-[40px] ml-3' src='https://thumbs.dreamstime.com/b/bag-chips-vector-illustration-cute-cartoon-style-isolated-white-background-268309232.jpg' alt='logo'></img>
              <p>Snack & Munchies</p>
            </div>
            <div className='border h-[50px] w-[300px] flex items-center justify-start gap-3'>
              <img className='w-[40px] ml-3' src='https://i.pinimg.com/736x/86/f4/82/86f482f5c05ebe233676dca547c4747d.jpg' alt='logo'></img>
              <p>Fruits & Vegetables</p>
            </div>
            <div className='border h-[50px] w-[300px] flex items-center justify-start gap-3'>
              <img className='w-[40px] ml-3' src='https://p7.hiclipart.com/preview/857/131/798/coca-cola-fizzy-drinks-coca-cola-thumbnail.jpg' alt='logo'></img>
              <p>Cold drinks & Juices</p>
            </div>
            
            <div className='border h-[50px] w-[300px] flex items-center justify-start gap-3'>
              <img className='w-[40px] ml-3' src='https://www.johnsonsbaby.com/sites/jbaby_us_3/files/product-images/jns_381371177301_400ml_00000_1000wx1000h.jpeg' alt='logo'></img>
              <p>Baby Care</p>
            </div>
           
            <div className='border h-[50px] w-[300px] flex items-center justify-start gap-3'>
              <img className='w-[40px] ml-3' src='https://i.pinimg.com/736x/06/dd/6c/06dd6c7c83fdc8f5ab96db92955f5ae9.jpg' alt='logo'></img>
              <p>Bakery & Biscuits</p>
            </div>
            <div className='border h-[50px] w-[300px] flex items-center justify-start gap-3 rounded-b-lg'>
              <img className='w-[40px] ml-3' src='https://freepngtransparent.com/wp-content/uploads/2023/03/Fish-Png-170.png' alt='logo'></img>
              <p>Chicken Fish & Meats</p>
            </div>
                 
           
                               

            <div className='grid grid-cols-[repeat(0,minmax(300px,100px))] mt-3'>

<div className='border h-[100px] rounded-t-lg flex items-center justify-center gap-5'>
  <img className='w-[20px]' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQFVHMtjntn4nWAIpnJSi2Iv2SUevsswTBjdwO1PWxfytCrt8Xf' alt='logo'></img>
  <div className='text-[12px]'>
    <p>Download the FreshCart App to your</p>
    <p> Phone.</p>
  </div>
</div>

<div className='border h-[100px] rounded-t-lg flex items-center justify-center gap-5'>
  <img className='w-[30px]' src='https://t3.ftcdn.net/jpg/06/05/72/38/360_F_605723896_1Dszs8BoH2Ie6JRe47OjLbT3ARtn6Gfb.jpg' alt='logo'></img>
  <div className='text-[12px]'>
    <p>Return Policy customers can return a </p>
    <p> product and ask for a refund.</p>
  </div>
</div>

<div className='border h-[100px] rounded-t-lg flex items-center justify-center gap-5'>
  <img className='w-[30px]' src='https://www.ipcgifts.com/wp-content/uploads/2018/05/nb-058-1-600x600.jpg' alt='logo'></img>
  <div className='text-[12px] mr-6'>
    <p>Order now so you don't miss the</p>
    <p> opportunities.</p>
  </div>
</div>

<div className='border h-[100px] rounded-t-lg flex items-center justify-center gap-5'>
  <img className='w-[30px]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqr7T0t65SV2bTe5a65hln8OYalqOb8aEF8OV2wCduPtcJrvJ-' alt='logo'></img>
  <div className='text-[12px]'>
    <p>Your order will arrive at your door in</p>
    <p>15 minutes.</p>
  </div>
</div>
             
                    
                    <b className='mt-10 text-[20px]'>Testimonials</b>
                    <div className=' bg-yellow-100  h-[230px] w-[300px] rounded-lg flex flex-col items-center justify-center gap-5 mt-5'>
                         <b>The Best Grocery Store Design</b>
                         <div className='opacity-55'>
                         <p>Lorem ipsum dolor sit amet,</p>
                         <p>consectetur adipis cing elit. Curabitur</p>
                         <p> iaculis maximus purus, a gravida dui</p>
                         <p> tempor eget.</p>
                         </div>
                         <div className='flex items-center gap-3'>
                          <img className='w-[40px] rounded-full object-center' src='https://freshcart.codescandy.com/assets/images/avatar/avatar-1.jpg' alt='logo'></img>
                          <div className='leading-4 text-[14px] mr-32'>
                          <p>Alishia Jones</p>
                          <p>Sales Manager</p>
                          </div>
                         </div>
                    </div>
             </div>
            
          </div>
         </div>
         <div className='h-full overflow-auto w-[940px] sc'>
                    <b className='text-[25px] ml-14'>New Arrivals</b>
                      
                      <div className='h-[400px]  overflow-auto sc'>
                        <div className='grid grid-cols-[repeat(6,minmax(300px,400px))]'>



                             <div className=' h-[400px] flex justify-center flex-col items-center'>
                              <div className='h-[200px] w-[200px] border flex items-center justify-center hover:border-green-600 rounded-xl hover:shadow-2xl'>
                              <img className='' src='https://freshcart.codescandy.com/assets/images/category/category-chicken-meat-fish.jpg' alt='logo'></img>
                              </div>
                              <div className='flex flex-col gap-3 mr-12'>
                              <button className='bg-red-600 text-white h-[20px] w-[40px] rounded-full text-[10px] text-center mt-3'>-45%</button>
                              <div>
                                <b>Chicken Meat & Fish</b>
                              </div>
                              <div>
                                <p>$45</p>
                              </div>
                              </div>
                             </div>

                             <div className=' h-[400px] flex justify-center flex-col items-center'>
                              <div className='h-[200px] w-[200px] border flex items-center justify-center hover:border-green-600 rounded-xl hover:shadow-2xl'>
                              <img className='' src='https://freshcart.codescandy.com/assets/images/category/category-cleaning-essentials.jpg' alt='logo'></img>
                              </div>
                              <div className='flex flex-col gap-3 mr-12'>
                              <button className='bg-red-600 text-white h-[20px] w-[40px] rounded-full text-[10px] text-center mt-3'>-25%</button>
                              <div>
                                <b>Cleaning Essential</b>
                              </div>
                              <div>
                                <p>$120</p>
                              </div>
                              </div>
                             </div>
                            
                             <div className=' h-[400px] flex justify-center flex-col items-center'>
                              <div className='h-[200px] w-[200px] border flex items-center justify-center hover:border-green-600 rounded-xl hover:shadow-2xl'>
                              <img className='' src='https://freshcart.codescandy.com/assets/images/category/category-snack-munchies.jpg' alt='logo'></img>
                              </div>
                              <div className='flex flex-col gap-3 mr-8'>
                              <button className='bg-red-600 text-white h-[20px] w-[40px] rounded-full text-[10px] text-center mt-3'>-45%</button>
                              <div>
                                <b>Salted Instant Popcorn</b>
                              </div>
                              <div>
                                <p>$18</p>
                              </div>
                              </div>
                             </div>

                             <div className=' h-[400px] flex justify-center flex-col items-center'>
                              <div className='h-[200px] w-[200px] border flex items-center justify-center hover:border-green-600 rounded-xl hover:shadow-2xl'>
                              <img className='' src='https://freshcart.codescandy.com/assets/images/category/category-tea-coffee-drinks.jpg' alt='logo'></img>
                              </div>
                              <div className='flex flex-col gap-3 mr-8'>
                              <button className='bg-red-600 text-white h-[20px] w-[40px] rounded-full text-[10px] text-center mt-3'>-45%</button>
                              <div>
                                <b>Tea Coffee & Drinks</b>
                              </div>
                              <div>
                                <p>$45</p>
                              </div>
                              </div>
                             </div>

                             <div className=' h-[400px] flex justify-center flex-col items-center'>
                              <div className='h-[200px] w-[200px] border flex items-center justify-center hover:border-green-600 rounded-xl hover:shadow-2xl'>
                              <img className='' src='https://freshcart.codescandy.com/assets/images/category/category-atta-rice-dal.jpg' alt='logo'></img>
                              </div>
                              <div className='flex flex-col gap-3 mr-8'>
                              <button className='bg-red-600 text-white h-[20px] w-[40px] rounded-full text-[10px] text-center mt-3'>-55%</button>
                              <div>
                                <b>Atta, Rice & Dal</b>
                              </div>
                              <div>
                                <p>$18</p>
                              </div>
                              </div>
                             </div>

                             <div className=' h-[400px] flex justify-center flex-col items-center'>
                              <div className='h-[200px] w-[200px] border flex items-center justify-center hover:border-green-600 rounded-xl hover:shadow-2xl'>
                              <img className='' src='https://freshcart.codescandy.com/assets/images/category/category-dairy-bread-eggs.jpg' alt='logo'></img>
                              </div>
                              <div className='flex flex-col gap-3 mr-20'>
                              <button className='bg-red-600 text-white h-[20px] w-[40px] rounded-full text-[10px] text-center mt-3'>-55%</button>
                              <div>
                                <b>Bread & Milk</b>
                              </div>
                              <div>
                                <p>$18</p>
                              </div>
                              </div>
                             </div>


                        </div>
                      </div>
                    
                    <b className='text-[25px] ml-14'>Deal of the day</b>
                    <p className='text-[14px] ml-14 opacity-55'>Brings to users an array of discounts on a variety</p>
                    <div className='h-[400px] ml-14 w-[850px] rounded-xl border border-red-500 flex items-center justify-center mt-10'>
                           <div className=''>
                            <img src='https://freshcart.codescandy.com/assets/images/products/deal-img.jpg' alt='logo'></img>
                           </div>
                           <div className='flex flex-col gap-7'>
                            <div className=''>
                            <b className='text-[25px]'>Parle Platina Nutricrunch Digestive Cookies</b>
                            <p className='text-[20px] opacity-55'>$100</p>
                            </div>
                            <div className=''>
                              <button className='px-4 py-2 bg-green-500 text-white rounded-lg'>+Add to cart</button>
                            </div>
                            <div className='flex justify-between'>
                              <p>Already Sold: 45</p>
                              <p className='mr-2'>Available: 25</p>
                            </div>
                            <div className='h-[7px] w-[500px] border rounded-full bg-red-200'>
                                    <div className='h-full w-[450px] bg-red-600 rounded-full'></div>
                            </div>
                            <div>
                              <b>Hurry up offer ends soon</b>
                            </div>

                           </div>
                    </div>


                    <div className='h-[70px] bg-red-100 w-[850px] rounded-lg ml-14 mt-5 flex items-center justify-center gap-7'>
                       <b className='text-red-500'>First time here? Get 10% off your first order! Click here</b>
                       <button className='px-4 py-1 border rounded-xl border-dashed border-red-500 text-red-500 '>FIRSTTIME10</button>
                    </div>

                    <div className='h-[100px] mt-12 flex items-center justify-between'>
                      <div className='flex flex-col ml-12'>
                        <b className='text-[25px]'>New Products</b>
                        <p className='opacity-55 text-[16px]'>New products with updated stocks.</p>
                      </div>
                      <div className='mr-7'>
                        <button className='px-4 py-2 bg-slate-200 rounded-lg'>View All</button>
                      </div>
                    </div>

                    <div className='grid grid-cols-[repeat(4,minmax(200px,310px))]'>


                      <div className=' h-[310px]'>
                        <div className='w-[160px] h-[200px] border flex items-center justify-center rounded-lg ml-12 hover:border-green-600'>
                            <img src='https://freshcart.codescandy.com/assets/images/category/category-instant-food.jpg' alt='logo'></img>
                        </div>
                        <div className='flex flex-col gap-3 ml-12'>
                        <button className='h-[20px] w-[40px] bg-red-500 text-white text-[12px] rounded-full mt-4'>$-45</button>
                        <b className='text-[14px]'>Instant Food</b>
                        <b>$18</b>
                        </div>
                      </div>


                      <div className=' h-[310px]'>
                        <div className='w-[160px] h-[200px] border flex items-center justify-center rounded-lg ml-12 hover:border-green-600'>
                            <img src='https://freshcart.codescandy.com/assets/images/category/category-atta-rice-dal.jpg' alt='logo'></img>
                        </div>
                        <div className='flex flex-col gap-3 ml-12'>
                        <button className='h-[20px] w-[40px] bg-red-500 text-white text-[12px] rounded-full mt-4'>$-12</button>
                        <b className='text-[14px]'>Atta Rice & Dal</b>
                        <b>$15</b>
                        </div>
                      </div>

                      <div className=' h-[310px]'>
                        <div className='w-[160px] h-[200px] border flex items-center justify-center rounded-lg ml-12 hover:border-green-600'>
                            <img src='https://freshcart.codescandy.com/assets/images/category/category-baby-care.jpg' alt='logo'></img>
                        </div>
                        <div className='flex flex-col gap-3 ml-12'>
                        <button className='h-[20px] w-[40px] bg-red-500 text-white text-[12px] rounded-full mt-4'>$-55</button>
                        <b className='text-[14px]'>Baby Care</b>
                        <b>$18</b>
                        </div>
                      </div>


                      <div className=' h-[310px]'>
                        <div className='w-[160px] h-[200px] border flex items-center justify-center rounded-lg ml-12 hover:border-green-600'>
                            <img src='https://freshcart.codescandy.com/assets/images/category/category-tea-coffee-drinks.jpg' alt='logo'></img>
                        </div>
                        <div className='flex flex-col gap-3 ml-12'>
                        <button className='h-[20px] w-[40px] bg-red-500 text-white text-[12px] rounded-full mt-4'>$-55</button>
                        <b className='text-[14px]'>Tea & Coffee</b>
                        <b>$18</b>
                        </div>
                      </div>

                      <div className=' h-[310px] mt-8'>
                        <div className='w-[160px] h-[200px] border flex items-center justify-center rounded-lg ml-12 hover:border-green-600'>
                            <img src='https://freshcart.codescandy.com/assets/images/category/category-cleaning-essentials.jpg' alt='logo'></img>
                        </div>
                        <div className='flex flex-col gap-3 ml-12'>
                        <button className='h-[20px] w-[40px] bg-red-500 text-white text-[12px] rounded-full mt-4'>$-25</button>
                        <b className='text-[14px]'>Cleaning Essentials</b>
                        <b>$120</b>
                        </div>
                      </div>

                      <div className=' h-[310px] mt-8'>
                        <div className='w-[160px] h-[200px] border flex items-center justify-center rounded-lg ml-12 hover:border-green-600'>
                            <img src='https://freshcart.codescandy.com/assets/images/category/category-pet-care.jpg' alt='logo'></img>
                        </div>
                        <div className='flex flex-col gap-3 ml-12'>
                        <button className='h-[20px] w-[40px] bg-red-500 text-white text-[12px] rounded-full mt-4'>$-55</button>
                        <b className='text-[14px]'>Pet Cares</b>
                        <b>$18</b>
                        </div>
                      </div>

                      <div className=' h-[310px] mt-8'>
                        <div className='w-[160px] h-[200px] border flex items-center justify-center rounded-lg ml-12 hover:border-green-600'>
                            <img src='https://freshcart.codescandy.com/assets/images/category/category-chicken-meat-fish.jpg' alt='logo'></img>
                        </div>
                        <div className='flex flex-col gap-3 ml-12'>
                        <button className='h-[20px] w-[40px] bg-red-500 text-white text-[12px] rounded-full mt-4'>$-55</button>
                        <b className='text-[14px]'>Chicken Fish & Meat</b>
                        <b>$18</b>
                        </div>
                      </div>

                      <div className=' h-[310px] mt-8'>
                        <div className='w-[160px] h-[200px] border flex items-center justify-center rounded-lg ml-12 hover:border-green-600'>
                            <img src='https://freshcart.codescandy.com/assets/images/category/category-bakery-biscuits.jpg' alt='logo'></img>
                        </div>
                        <div className='flex flex-col gap-3 ml-12'>
                        <button className='h-[20px] w-[40px] bg-red-500 text-white text-[12px] rounded-full mt-4'>$-25</button>
                        <b className='text-[14px]'>Bakery & Biscuits</b>
                        <b>$120</b>
                        </div>
                      </div>

                      <div className=' h-[310px] mt-8'>
                        <div className='w-[160px] h-[200px] border flex items-center justify-center rounded-lg ml-12 hover:border-green-600'>
                            <img src='https://freshcart.codescandy.com/assets/images/category/category-bakery-biscuits.jpg' alt='logo'></img>
                        </div>
                        <div className='flex flex-col gap-3 ml-12'>
                        <button className='h-[20px] w-[40px] bg-red-500 text-white text-[12px] rounded-full mt-4'>$-25</button>
                        <b className='text-[14px]'>Bakery & Biscuits</b>
                        <b>$120</b>
                        </div>
                      </div>

                      <div className=' h-[310px] mt-8'>
                        <div className='w-[160px] h-[200px] border flex items-center justify-center rounded-lg ml-12 hover:border-green-600'>
                            <img src='https://freshcart.codescandy.com/assets/images/category/category-pet-care.jpg' alt='logo'></img>
                        </div>
                        <div className='flex flex-col gap-3 ml-12'>
                        <button className='h-[20px] w-[40px] bg-red-500 text-white text-[12px] rounded-full mt-4'>$-55</button>
                        <b className='text-[14px]'>Pet Cares</b>
                        <b>$18</b>
                        </div>
                      </div>

                      <div className=' h-[310px] mt-8'>
                        <div className='w-[160px] h-[200px] border flex items-center justify-center rounded-lg ml-12 hover:border-green-600'>
                            <img src='https://freshcart.codescandy.com/assets/images/category/category-cleaning-essentials.jpg' alt='logo'></img>
                        </div>
                        <div className='flex flex-col gap-3 ml-12'>
                        <button className='h-[20px] w-[40px] bg-red-500 text-white text-[12px] rounded-full mt-4'>$-25</button>
                        <b className='text-[14px]'>Cleaning Essentials</b>
                        <b>$120</b>
                        </div>
                      </div>

                      <div className=' h-[310px] mt-8'>
                        <div className='w-[160px] h-[200px] border flex items-center justify-center rounded-lg ml-12 hover:border-green-600'>
                            <img src='https://freshcart.codescandy.com/assets/images/category/category-chicken-meat-fish.jpg' alt='logo'></img>
                        </div>
                        <div className='flex flex-col gap-3 ml-12'>
                        <button className='h-[20px] w-[40px] bg-red-500 text-white text-[12px] rounded-full mt-4'>$-55</button>
                        <b className='text-[14px]'>Chicken Fish & Meat</b>
                        <b>$18</b>
                        </div>
                      </div>


                    </div>

         </div>
         </div>


         <div className='h-[500px]  flex items-center justify-center flex-col mt-20'>
           <div className='h-[60px] w-full flex items-center justify-between'>
            <div className='ml-10'>
              <b className='text-[25px]'>Our most popular recipes</b>
              <p className='opacity-55 text-[14px]'>Check out most popular recipes of all time.</p>
            </div>
            <div className='mr-10'>
             <NavLink to="/Recipe">
             <button className='bg-green-500 text-white p-2 rounded-lg font-extrabold text-[12px]'>View All Recipes</button></NavLink> 
            </div>
          </div>

         <div className='grid grid-cols-[repeat(4,minmax(200px,400px))]  '>
          <div className=' h-[400px] flex flex-col justify-center gap-5'>


            <img className='rounded-xl w-[300px] hover:scale-105 transition-all border ml-10' src='https://freshcart.codescandy.com/assets/images/blog/blog-img-1.jpg' alt='logo'></img>

           <b className='text-[17px] ml-10'>Spaghetti with Crispy Zucchini</b>
           <div className='opacity-55 text-[14px] ml-10'>
           <p>Praesent vestibulum magna lacinia augue</p>
           <p>mollisvel aliquet massa posuere. Duis et</p>
           <p>mauris tortor.</p>
           </div>
           <div className='ml-10'>
            15 Min
           </div>
          </div>


          <div className=' h-[400px] flex flex-col justify-center gap-4'>


                  <img className='rounded-xl w-[300px] hover:scale-105 transition-all border mt-6 ml-5' src='https://freshcart.codescandy.com/assets/images/blog/blog-img-2.jpg' alt='logo'></img>
                  <div className='flex flex-col ml-5'>
                  <b className='text-[17px]'>Almond Butter Chocolate Chip</b>
                  <b className='text-[17px]'>Zucchini Bars</b>
                  </div>
                  <div className='opacity-55 text-[14px] ml-5'>
                  <p>Lorem ipsum dolor sit amet, consectetur sit</p>
                  <p>amet tincidunt ellentesque aliquet</p>
                  <p>ligula in ultrices congue.</p>
                  </div>
                  <div className=' mb-2 ml-5'>
                  15 Min
                  </div>
                  </div>


                  <div className=' h-[400px] flex flex-col justify-center gap-4'>


                     <img className='rounded-xl w-[300px] hover:scale-105 transition-all border mt-6 ml-3' src='https://freshcart.codescandy.com/assets/images/blog/blog-img-3.jpg' alt='logo'></img>
                              <div className='flex flex-col ml-3'>
                              <b className='text-[17px]'>Spicy Shrimp Tacos Garlic Cilantro</b>
                              <b className='text-[17px]'>Lime Slaw</b>
                              </div>
                              <div className='opacity-55 text-[14px] ml-3'>
                              <p>Praesent vestibulum magna lacinia augue</p>
                              <p>mollisvel aliquet massa posuere. Duis et</p>
                               <p>mauris tortor.</p>
                              </div>
                              <div className=' mb-2 ml-3'>
                              15 Min
                              </div>
                              </div>

                              <div className=' h-[400px] flex flex-col justify-center gap-5'>


            <img className='rounded-xl w-[300px] h-[145px] hover:scale-105 transition-all border' src='https://img.freepik.com/free-photo/grilled-beef-burger-with-fries-cheese-tomato-generative-ai_188544-8466.jpg' alt='logo'></img>

           <b className='text-[17px]'>Spaghetti with Crispy Zucchini</b>
           <div className='opacity-55 text-[14px]'>
           <p>Praesent vestibulum magna lacinia augue</p>
           <p>mollisvel aliquet massa posuere. Duis et</p>
           <p>mauris tortor.</p>
           </div>
           <div className=''>
            15 Min
           </div>
          </div>
        </div>
        </div>


        <div className='h-[700px] bg-green-900 flex items-center flex-col justify-center'>
              <div className='h-[70px] flex items-center w-full justify-between'>
                    <div className='ml-32'>
                      <img src='https://freshcart.codescandy.com/assets/images/logo/freshcart-white-logo.svg' alt='logo'></img>
                    </div>
                    <div className='flex items-center justify-center gap-5 cursor-pointer mr-32'>
                     <NavLink to="https://www.facebook.com/">
                     <img className=' w-[30px] h-[30px] rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-F6SQ7c9uQle_EBuDp_YYCJBLB9f8iX0pf6X115SuA&s' alt='logo'></img>
                     </NavLink> 
                     <NavLink to="https://twitter.com/"><img className='rounded-full w-[50px] ml-3' src='https://static.vecteezy.com/system/resources/thumbnails/018/930/752/small/twitter-logo-twitter-icon-transparent-free-free-png.png' alt='logo'></img>
                     </NavLink> 
                     <NavLink to="https://www.instagram.com/">
                     <img className='rounded-full w-[50px]' src='https://static.vecteezy.com/system/resources/previews/018/930/413/non_2x/instagram-logo-instagram-icon-transparent-free-png.png' alt='logo'></img>
                     </NavLink> 
                    </div>
              </div>
              <div className='w-[1200px] border border-red-600 mt-10'></div>
              <div className='w-[1200px]  h-[400px] mt-10'>
                  <div className='grid grid-cols-[repeat(6,minmax(200px,400px))]'>
                    <div className=' h-[400px] text-white'>
                      <ul className='flex flex-col gap-3'>
                        <b>Catagories</b>
                        <div className='opacity-55 flex flex-col gap-3 cursor-pointer text-[14px]'>
                        <li className='hover:text-green-600'>Vegetables & Fruits</li>
                        <li className='hover:text-green-600'>Breakfast & instant food</li>
                        <li className='hover:text-green-600'>Bakery & Biscuits</li>
                        <li className='hover:text-green-600'>Atta, rice & dal</li>
                        <li className='hover:text-green-600'>Sauces & spreads</li>
                        <li className='hover:text-green-600'>Organic & gourmet</li>
                        <li className='hover:text-green-600'>Baby care</li>
                        <li className='hover:text-green-600'>Cleaning essentials</li>
                        <li className='hover:text-green-600'>Personal care</li>
                        </div>
                      </ul>
                    </div>

                    <div className=' h-[400px] text-white'>

                      <ul className='flex flex-col gap-3'>
                        <div className='opacity-55 flex flex-col gap-3 mt-[34px] cursor-pointer text-[14px]'>
                        <li className='hover:text-green-600'>Dairy, bread & eggs</li>
                        <li className='hover:text-green-600'>Cold drinks & juices</li>
                        <li className='hover:text-green-600'>Tea, coffee & drinks</li>
                        <li className='hover:text-green-600'>Masala, oil & more</li>
                        <li className='hover:text-green-600'>Chicken, meat & fish</li>
                        <li className='hover:text-green-600'>Paan corner</li>
                        <li className='hover:text-green-600'>Pharma & wellness</li>
                        <li className='hover:text-green-600'>Home & office</li>
                        <li className='hover:text-green-600'>Pet care</li>
                        </div>
                      </ul>
                    </div>

                    <div className=' h-[400px] text-white'>

                      <ul className='flex flex-col gap-3'>
                        <b>Get to know us</b>
                        <div className='opacity-55 flex flex-col gap-3  cursor-pointer text-[14px]'>
                        <li className='hover:text-green-600'>Company</li>
                        <li className='hover:text-green-600'>About</li>
                        <li className='hover:text-green-600'>Blog</li>
                        <li className='hover:text-green-600'>Help Center</li>
                        <li className='hover:text-green-600'>Our Value</li>
                        
                        </div>
                      </ul>
                    </div>

                    <div className=' h-[400px] text-white'>

                           <ul className='flex flex-col gap-3'>
                             <b>For Consumers</b>
                             <div className='opacity-55 flex flex-col gap-3  cursor-pointer text-[14px]'>
                             <li className='hover:text-green-600'>Payments</li>
                             <li className='hover:text-green-600'>Shipping</li>
                             <li className='hover:text-green-600'>Product Returns</li>
                             <li className='hover:text-green-600'>FAQ</li>
                             <li className='hover:text-green-600'>Shop Checkout</li>
  
                             </div>
                           </ul>
                           </div>

                           <div className=' h-[400px] text-white'>

                           <ul className='flex flex-col gap-3'>
                             <b>Become a Shopper</b>
                             <div className='opacity-55 flex flex-col gap-3  cursor-pointer text-[14px]'>
                             <li className='hover:text-green-600'>Shopper opportunity</li>
                             <li className='hover:text-green-600'>Become a Shopper</li>
                             <li className='hover:text-green-600'>Earnings</li>
                             <li className='hover:text-green-600'>Ideas & Guides</li>
                             <li className='hover:text-green-600'>New Retailers</li>
                             </div>
                           </ul>
                           </div>

                           <div className=' h-[400px] text-white'>

                           <ul className='flex flex-col gap-3'>
                             <b>Freshcrt Programs</b>
                             <div className='opacity-55 flex flex-col gap-3  cursor-pointer text-[14px]'>
                             <li className='hover:text-green-600'>Freshcart Programs</li>
                             <li className='hover:text-green-600'>Gift Cards</li>
                             <li className='hover:text-green-600'>Promos & Coupons</li>
                             <li className='hover:text-green-600'>Freshcart Ads</li>
                             <li className='hover:text-green-600'>Careers</li>
                             </div>
                           </ul>
                           </div>
                   
                   
                  </div>
              </div>

              
              <div className='w-[1200px] border mt-10 border-yellow-400'></div>
              <div className='h-[50px] w-full flex items-center text-white justify-between'>
                <p className='text-[12px] ml-32'>© 2022 - 2024 FreshCart eCommerce HTML Template. All rights reserved. Powered by <NavLink to="/"><span className='text-yellow-500 cursor-pointer'>Codescandy .</span></NavLink></p>
                <div className='flex items-center justify-center gap-3 mr-32'>
                  <p>Payment Partners</p>
                 <NavLink to="https://www.amazon.com/"> <img src='https://freshcart.codescandy.com/assets/images/payment/amazonpay.svg' alt='logo'></img></NavLink>
                  <img src='https://freshcart.codescandy.com/assets/images/payment/american-express.svg' alt='logo'></img>
                  <img src='https://freshcart.codescandy.com/assets/images/payment//mastercard.svg' alt='logo'></img>
                  <img src='https://freshcart.codescandy.com/assets/images/payment/paypal.svg' alt='logo'></img>
                  <img src='https://freshcart.codescandy.com/assets/images/payment/visa.svg' alt='logo'></img>
                </div>
              </div>
        </div>
      


          

              

        </>
                            
  )
}

export default Home5
