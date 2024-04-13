import React from 'react'
import { NavLink } from 'react-router-dom'

const Home4 = () => {
  return (
    <>
     <div className='h-[500px] border img-14 flex  justify-center flex-col gap-4'>
          <div className='h-[200px] w-[400px] rounded-lg bg-white ml-32 flex flex-col gap-3 justify-center'>
            <div className='ml-6'>
              <img className='w-[40px]' src='https://media.istockphoto.com/id/1493681761/vector/orange-colored-map-location-pin.jpg?s=612x612&w=0&k=20&c=pzksh7tO6k6mXns2YUUuDxA6cVFfE1mQPoNHqSHPbfI=' alt='logo'></img>
              </div>
              <div className='ml-8'>
              <p className='text-[20px] font-bold'>Check what's in your local store</p>
              <p className='text-[12px]'>See delivery and collection options</p>
              </div>
              <div className='flex gap-4 justify-center'>
                <input className='h-[40px] w-[250px] rounded-md border px-4 outline-none focus:outline-green-500 focus:shadow-2xl' type='text' name='name' placeholder='Enter Postcode'></input>
                <button className='h-[40px] w-[70px] rounded-md bg-green-500 text-white'>Check</button>
              </div>
          </div>
          <div className='text-[14px] text-white ml-32'>
            <p>Hello, Sign in for the best experience. New to Freshcart? Register</p>
          </div>
     </div>
     <div className='h-[300px]  flex flex-col justify-center items-center gap-5'>
      <b className='text-[20px] mr-[900px]'>Shop by Categories</b>
      <div className='h-[200px] w-[1200px]  overflow-auto sc'>
           <div className='grid grid-cols-[repeat(10,minmax(170px,200px))] gap-10 '>
            <div className='border w-[170px] h-[200px] flex items-center flex-col justify-center rounded-lg hover:shadow-2xl'>
              <img className='w-[150px]' src='https://www.bigbasket.com/media/uploads/p/l/30005118_17-pedigree-wet-dog-food-chicken-liver-chunks-in-gravy-for-adult-dogs.jpg' alt='logo'></img>
              <p>Pet Food</p>
            </div>

            <div className='border w-[170px] h-[200px] flex items-center flex-col justify-center rounded-lg hover:text-red-600 hover:shadow-2xl'>
              <img className='w-[150px]' src='https://cdn.vectorstock.com/i/preview-1x/50/34/milk-packet-vector-46675034.jpg' alt='logo'></img>
              <p className=''>Dairy</p>
            </div>
           
            <div className='border w-[170px] h-[200px] flex items-center flex-col justify-center rounded-lg hover:text-red-600 hover:shadow-2xl'>
              <img className='w-[150px] ' src='https://cdn-icons-png.flaticon.com/256/3014/3014502.png' alt='logo'></img>
              <p className=''>Bakary</p>
            </div>

            <div className='border w-[170px] h-[200px] flex items-center flex-col justify-center rounded-lg hover:text-red-600 hover:shadow-2xl'>
              <img className='w-[150px] ' src='https://static.vecteezy.com/system/resources/previews/022/825/544/original/orange-fruit-orange-on-transparent-background-free-png.png' alt='logo'></img>
              <p className=''>Fruits</p>
            </div>

            <div className='border w-[170px] h-[200px] flex items-center flex-col justify-center rounded-lg hover:text-red-600 hover:shadow-2xl'>
              <img className='w-[150px] ' src='https://icons.veryicon.com/png/o/object/common-icons-of-community-supermarket/red-wine-6.png' alt='logo'></img>
              <p className=''>Wine</p>
            </div>

            <div className='border w-[170px] h-[200px] flex items-center flex-col justify-center rounded-lg hover:text-red-600 hover:shadow-2xl'>
              <img className='w-[150px] ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDhvw_nY8_ZbsUEb4hILlKcb0J8GfZz8Qm9Rp0N__TPWY6ep4AFBvaGWofplJD7TqP8aI&usqp=CAU' alt='logo'></img>
              <p className=''>Vegetables</p>
            </div>
           

            <div className='border w-[170px] h-[200px] flex items-center flex-col justify-center rounded-lg hover:text-red-600 hover:shadow-2xl'>
              <img className='w-[150px] ' src='https://img.freepik.com/free-photo/prepared-unhealthy-pile-delicious-food_1339-25.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais' alt='logo'></img>
              <p className='mt-12'>Snaks</p>
            </div>
           

            <div className='border w-[170px] h-[200px] flex items-center flex-col justify-center rounded-lg hover:text-red-600 hover:shadow-2xl'>
              <img className='w-[150px] ' src='https://img.freepik.com/premium-vector/fish-icon-transparent-background_929446-145.jpg?w=360' alt='logo'></img>
              <p className=''>Fish</p>
            </div>
           

            <div className='border w-[170px] h-[200px] flex items-center flex-col justify-center rounded-lg hover:text-red-600 hover:shadow-2xl'>
              <img className='w-[150px] ' src='https://media.istockphoto.com/id/1299974844/vector/feeding-bottle-icon-design-vector-template-illustration.jpg?s=612x612&w=0&k=20&c=97wrwut0N4khHcO15nRmCaZwGAaX5iit7uWNium0Lso=' alt='logo'></img>
              <p className=''>Baby Care</p>
            </div>

            <div className='border w-[170px] h-[200px] flex items-center flex-col justify-center rounded-lg hover:text-red-600 hover:shadow-2xl'>
              <img className='w-[150px] ' src='https://media.istockphoto.com/vectors/outlined-coffee-cup-icon-simple-vector-on-transparent-background-vector-id1194488855?k=20&m=1194488855&s=170667a&w=0&h=yiYDkJxricImIDVRNyh6nMBlpvC4i-l__vuhEfRkhes=' alt='logo'></img>
              <p className=''>Coffee & Tea</p>
            </div>
           
           </div>
      </div>
     </div>

     <div className='h-[500px] mt-20'>
    
      <b className='text-[30px] ml-32'>Freshcart popular products</b>
      
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


      <div className='h-[400px] border flex items-center justify-center'>
        <div className='grid grid-cols-[repeat(3,minmax(400px,200px))] gap-5 '>
          <div className='border h-[200px] img-15 flex flex-col justify-end rounded-md'>
            <div className='h-[50px] bg-blue-800 flex items-center cursor-pointer rounded-b-md '>
            <NavLink to="/Home4" ><p className='text-white ml-4'>Offer <span className='hover:ml-2'>&gt;</span></p></NavLink> 
            </div>
          </div>
          
          <div className='border h-[200px] img-16 flex flex-col justify-end rounded-md'>
            <div className='h-[50px] bg-yellow-800 flex items-center cursor-pointer rounded-b-md'>
             <NavLink to="/Home4"><p className='text-white ml-4'>Fresh Food & Bakary <span className='hover:ml-2'>&gt;</span></p></NavLink> 
            </div>
          </div>

          <div className='border h-[200px] img-17 flex flex-col justify-end rounded-md'>
            <div className='h-[50px] bg-red-800 flex items-center cursor-pointer rounded-b-md'>
             <NavLink to="/Home4"><p className='text-white ml-4'>Mixed and Assorted Fruits <span className='hover:ml-2'>&gt;</span></p></NavLink> 
            </div>
          </div>
          
          

        </div>
      </div>

      <div className='h-[600px] w-full flex items-center flex-col justify-center gap-5'>
               <div className='text-black mr-[880px]'>
                  <p className='text-[30px] font-extrabold'>Best Selling Products</p>
                  <p className='opacity-40 text-[14px]'>Find the bestseller products in your area with discount.</p>
                  </div>
           <div className='h-[450px] w-[1200px]  overflow-auto sc'>
            <div className='grid grid-cols-[repeat(8,minmax(250px,450px))]'>


              <div className='border h-[430px] hover:border-green-400 rounded-lg hover:shadow-2xl'>


                <div className='flex items-center justify-center mt-10'>
                    <img src='https://freshcart.codescandy.com/assets/images/products/product-img-4.jpg' alt='logo'></img>
                    </div>


                    <div className='flex flex-col gap-3'>
                    <b className='text-[15px] mt-10 ml-6'>Onion Flavour Potato</b>

                    <div className='flex justify-between'>
                      <p className='text-red-500 ml-6'>$12</p>
                      <span className='mr-6'>In Stock</span>
                    </div>
                    <div className=' flex items-center justify-center'>
                      <button className='h-[40px] w-[200px] rounded-md bg-green-500 text-white hover:bg-green-700'>Add to Cart</button>
                    </div>
                    </div>

              </div>


              <div className='border h-[430px] hover:border-green-400 rounded-lg hover:shadow-2xl'>
                
              <div>
                    <button className='h-[20px] w-[40px] bg-yellow-400 text-white text-[12px] rounded-md ml-6 mt-5'>14%</button>
                  </div>

                <div className='flex items-center justify-center'>
                    <img className='' src='https://freshcart.codescandy.com/assets/images/products/product-img-5.jpg' alt='logo'></img>
                    </div>
                   

                    <div className='flex flex-col gap-3'>
                    <b className='text-[15px] mt-10 ml-6'>Salted Instant Popcorn</b>

                    <div className='flex justify-between'>
                      <p className='text-red-500 ml-6'>$40</p>
                      <span className='mr-6'>In Stock</span>
                    </div>
                    <div className=' flex items-center justify-center'>
                      <button className='h-[40px] w-[200px] rounded-md bg-green-500 text-white hover:bg-green-700'>Add to Cart</button>
                    </div>
                    </div>

              </div>

              <div className='border h-[450px] hover:border-green-400 rounded-lg hover:shadow-2xl'>
                  <div className='flex items-center justify-center mt-10'>
                      <img src='https://freshcart.codescandy.com/assets/images/products/product-img-6.jpg' alt='logo'></img>
                      </div>
                      <div className='flex flex-col gap-3'>
                        <div className='flex flex-col leading-5'>
                         <b className='text-[15px] mt-10 ml-6'>Epigamia Blueberry Greek</b>
                         <b className='ml-6 text-[15px]'>yogurt,90g</b>
                        </div>
                      <div className='flex justify-between'>
                        <p className='text-red-500 ml-6'>$17</p>
                        <span className='mr-6'>In Stock</span>
                      </div>
                      <div className=' flex items-center justify-center'>
                        <button className='h-[40px] w-[200px] rounded-md bg-green-500 text-white hover:bg-green-700'>Add to Cart</button>
                      </div>
                      </div>
                </div>

                <div className='border h-[450px] hover:border-green-400 rounded-lg hover:shadow-2xl'>
                  <div className='flex items-center justify-center mt-10'>
                      <img src='https://freshcart.codescandy.com/assets/images/products/product-img-8.jpg' alt='logo'></img>
                      </div>
                      <div className='flex flex-col gap-3'>
                        <div className='flex flex-col'>
                      <b className='text-[15px] mt-10 ml-6'>Kellogg's Special K Original</b>
                      <b className='text-[14px] ml-6'>Cereal</b>
                      </div>
                      <div className='flex justify-between'>
                        <p className='text-red-500 ml-6'>$25</p>
                        <span className='mr-6'>In Stock</span>
                      </div>
                      <div className=' flex items-center justify-center'>
                        <button className='h-[40px] w-[200px] rounded-md bg-green-500 text-white hover:bg-green-700'>Add to Cart</button>
                      </div>
                      </div>
                </div>

                <div className='border h-[450px] hover:border-green-400 rounded-lg hover:shadow-2xl'>
                  <div className='flex items-center justify-center mt-10'>
                      <img src='https://freshcart.codescandy.com/assets/images/products/product-img-9.jpg' alt='logo'></img>
                      </div>
                      <div className='flex flex-col gap-3'>
                        <div className='flex flex-col'>
                      <b className='text-[14px] mt-10 ml-6'>Slurrp Farm No Maida Millet</b>
                      <b className='text-[14px] ml-6'>Pancake Mix</b>
                      </div>
                      <div className='flex justify-between'>
                        <p className='text-red-500 ml-6'>$34</p>
                        <span className='mr-6'>In Stock</span>
                      </div>
                      <div className=' flex items-center justify-center'>
                        <button className='h-[40px] w-[200px] rounded-md bg-green-500 text-white hover:bg-green-700'>Add to Cart</button>
                      </div>
                      </div>
                </div>

                <div className='border h-[450px] hover:border-green-400 rounded-lg hover:shadow-2xl'>
                  <div className='flex items-center justify-center mt-10'>
                      <img src='https://freshcart.codescandy.com/assets/images/products/product-img-2.jpg' alt='logo'></img>
                      </div>
                      <div className='flex flex-col gap-3'>
                        <div className='flex flex-col'>
                      <b className='text-[15px] mt-10 ml-6'>Britannia Nutrichoice Digestive</b>
                      <b className='text-[15px] ml-6'>Biscuits</b>
                      </div>
  
                      <div className='flex justify-between'>
                        <p className='text-red-500 ml-6'>$15</p>
                        <span className='mr-6'>In Stock</span>
                      </div>
                      <div className=' flex items-center justify-center'>
                        <button className='h-[40px] w-[200px] rounded-md bg-green-500 text-white hover:bg-green-700'>Add to Cart</button>
                      </div>
                      </div>
                </div>

                <div className='border h-[430px] hover:border-green-400 rounded-lg hover:shadow-2xl'>
                  <div className='flex items-center justify-center mt-10'>
                      <img src='https://freshcart.codescandy.com/assets/images/products/product-img-3.jpg' alt='logo'></img>
                      </div>
                      <div className='flex flex-col gap-3'>
                      <b className='text-[15px] mt-10 ml-6'>Cadbury 5 Star Chocolate</b>
  
                      <div className='flex justify-between'>
                        <p className='text-red-500 ml-6'>$32</p>
                        <span className='mr-6'>In Stock</span>
                      </div>
                      <div className=' flex items-center justify-center'>
                        <button className='h-[40px] w-[200px] rounded-md bg-green-500 text-white hover:bg-green-700'>Add to Cart</button>
                      </div>
                      </div>
                </div>

                <div className='border h-[430px] hover:border-green-400 rounded-lg hover:shadow-2xl'>
                  <div className='mt-4 ml-6'>
                    <button className='h-[20px] w-[40px] rounded-md bg-red-600 text-white text-[12px]'>Sale</button>
                  </div>
                  <div className='flex items-center justify-center'>
                      <img src='https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg' alt='logo'></img>
                      </div>
                      <div className='flex flex-col gap-3'>
                      <b className='text-[15px] mt-10 ml-6'>Haldiram Sev Bhujia's</b>
  
                      <div className='flex justify-between'>
                        <p className='text-red-500 ml-6'>$18</p>
                        <span className='mr-6'>In Stock</span>
                      </div>
                      <div className=' flex items-center justify-center'>
                        <button className='h-[40px] w-[200px] rounded-md bg-green-500 text-white hover:bg-green-700'>Add to Cart</button>
                      </div>
                      </div>
                </div>

             
            </div>

           </div>
     </div>
      <div className='h-[100px]  flex items-center justify-center'>
        <div className='h-[60px] w-[1200px] border bg-yellow-50 hover:bg-yellow-400 hover:text-black rounded-full flex items-center justify-center'>
         
             <p className='text-bold text-[20px]'>SAVE AN EXTRA 15% ON AUTHORSHIP ORDER</p>
             
        </div>
      </div>

      <div className='h-[500px] mt-32'>
        <div className='h-[80px]  flex items-center justify-between'>
          <div className='ml-28 leading-7'>
            <b className='text-[25px]'>Best stores in Locations</b>
            <p className='text-[14px] opacity-55'>Find the best store products in your area with discount.</p>
          </div>
          <div className='mr-20'>
            <NavLink to="/All"><button className='text-green-400'>All Stores &gt;</button></NavLink>
          </div>
        </div>
        <div className='h-[300px] flex items-center justify-center mt-10'>
        <div className='grid grid-cols-[repeat(3,minmax(400px,250px))] gap-5'>
          <div className='border rounded-md hover:border-green-400 hover:shadow-xl h-[250px] flex flex-col justify-center gap-5'>
            <div className='ml-10'>
              <img className='rounded-full w-[50px]' src='https://freshcart.codescandy.com/assets/images/stores-logo/stores-logo-1.svg' alt='logo'></img>
            </div>
            <div className='ml-10'>
              <b className='text-[20px]'>E-Grocery Super Market</b>
              <p className='text-[12px] opacity-55 flex gap-5'>Organic <span> Groceries </span>  <span>Butcher Shop</span> </p>
            </div>
            <div className='text-[12px] opacity-55 ml-10'>
              <p>Delivery</p>
              <p>Pickup available</p>
            </div>
            <div className='flex gap-2 ml-10'>
              <p className='border px-2 py-1 bg-slate-400 text-[10px] rounded-md font-extrabold'>7.5 mi away</p>
              <p className='border px-2 py-1 bg-slate-400 text-[10px] rounded-md font-extrabold'>In-store Prices</p>
            </div>
          </div>

          <div className='border rounded-md hover:border-green-400 hover:shadow-xl h-[250px] flex flex-col justify-center gap-5'>
            <div className='ml-10'>
              <img className='rounded-full w-[50px]' src='https://freshcart.codescandy.com/assets/images/stores-logo/stores-logo-2.svg' alt='logo'></img>
            </div>
            <div className='ml-10'>
              <b className='text-[20px]'>DealShare Mart</b>
              <p className='text-[12px] opacity-55 flex gap-5'>Alcohol <span> Groceries </span> </p>
            </div>
            <div className='text-[12px] opacity-55 ml-10'>
              <p>Delivery</p>
              <p>Pickup available</p>
            </div>
            <div className='flex gap-5 ml-10'>
              <p className='border px-2 py-1 bg-slate-400 text-[10px] rounded-md font-extrabold'>7.5 mi away</p>
            </div>
          </div>

          <div className=' rounded-md border hover:border-green-400 hover:shadow-xl h-[250px] flex flex-col justify-center gap-5'>
            <div className=''>
              <img className='rounded-full w-[50px] ml-10' src='https://freshcart.codescandy.com/assets/images/stores-logo/stores-logo-3.svg' alt='logo'></img>
            </div>
            <div className='ml-10'>
              <b className='text-[20px]'>DMart</b>
              <p className='text-[12px] opacity-55 flex gap-5'>Groceries  <span>  Bakery </span> <span>Deli</span> </p>
            </div>
            <div className='text-[12px] opacity-55 ml-10'>
              <p className='text-green-500'>Delivery by 10:30pm</p>
              <p>Pickup available</p>
            </div>
            <div className='flex ml-10'>
              <p className='border px-2 py-1 bg-slate-400 text-[10px] rounded-md font-extrabold'>7.5 mi away</p>
            </div>
          </div>
          </div>
          
        </div>
      </div>

      <div className='h-[500px]  flex items-center justify-center flex-col'>
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

        <div className='grid grid-cols-[repeat(4,minmax(200px,400px))] '>
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


      <div className='h-[250px] flex items-center justify-center'>
        <div className='grid grid-cols-[repeat(3,minmax(400px,300px))]'>
          <div className=' h-[300px] flex flex-col items-center justify-center gap-5'>
            <div className='border-r w-[350px] h-[200px] flex flex-col items-center justify-center gap-5'>
          <img className='w-[30px]' src='https://cpahispano.com/private/wp-content/uploads/2016/10/green-icon-present-1.png' alt='logo'></img>
            <b className='text-[20px]'>Best Prices & Offers</b>
            <div className='text-center opacity-55'>
            <p>Cheaper prices than your local</p>
            <p> supermarket, great cashback offers to</p>
            <p>top it off.</p>
            </div>
            </div>
          </div>

          <div className=' h-[300px] flex flex-col items-center justify-center gap-5'>
            <div className='border-r w-[350px] h-[200px] flex flex-col items-center justify-center gap-5'>
          <img className='w-[30px] mr-7' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaK0WAnmw9xvI9UmwNYZAwKUC7939mzVMsBQTOHwouhgi0SVH4MWEAvkTVFG-ZoPIlsQI&usqp=CAU' alt='logo'></img>
            <b className='text-[20px] mr-7'>Cheapest basket 25 years running</b>
            <div className='text-center opacity-55 mr-7'>
            <p>Get your order delivered to your doorstep </p>
            <p>at the earliest from FreshCart pickup</p>
            <p>stores near you.</p>
            </div>
            </div>
          </div>


          <div className=' h-[300px] flex flex-col items-center justify-center gap-5'>
            <div className=' w-[350px] h-[200px] flex flex-col items-center justify-center gap-5'>
          <img className='w-[30px]' src='https://scontent.fccu7-1.fna.fbcdn.net/v/t39.30808-6/306282223_448839747286608_944530477707647920_n.png?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cgX8GtvQLksAb4rJufN&_nc_ht=scontent.fccu7-1.fna&oh=00_AfDfzpz3lBWA4irAqLm4d04tTKCJmXWM2kL056P075T9dw&oe=661844D8' alt='logo'></img>
            <b className='text-[20px]'>Wide Assortment</b>
            <div className='text-center opacity-55'>
            <p>Choose from 5000+ products across </p>
            <p>food, personal care, household & other</p>
            <p>categories</p>
            </div>
            </div>
          </div>
          </div>
          </div>

          <div className=' w-full flex items-center justify-center mt-10 '>
            <div className='border-2  w-[1200px] border-black'></div>
          </div>

          <div className='h-[250px]  flex items-center justify-center mt-10'>
              <div className='grid grid-cols-[repeat(3,minmax(400px,300px))]'>
              <div className=' h-[300px] flex flex-col items-center justify-center gap-5'>
            <div className='border-r w-[350px] h-[200px] flex flex-col items-center justify-center gap-5'>
          <img className='w-[50px]' src='https://images.squarespace-cdn.com/content/v1/5d0d612a6b4ad5000175827c/1561365588200-N0G6STR840QBAPPIYXE5/Mobile%402x.png?format=500w' alt='logo'></img>
            <b className='text-[20px]'>Shop with our app</b>
            <div className='text-center opacity-55'>
            <p>Shop on the go with our app for tablet </p>
            <p>and mobile . Get live order tracking.</p>
            <p>Get latest feature updates</p>
            </div>
            </div>
          </div>

          <div className=' h-[300px] flex flex-col items-center justify-center gap-5'>
            <div className='border-r w-[350px] h-[200px] flex flex-col items-center justify-center gap-5'>
          <img className='w-[50px] mr-7' src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS-Hf-EFgw3eKiYS1RsdNtuGlgb6ZoajjrB99gRh7HISWPfv7OA' alt='logo'></img>
            <b className='text-[20px] mr-7'>Want your shopping today?</b>
            <div className='text-center opacity-55 mb-5 mr-7'>
            <p>Choose from our award winning</p>
            <p>Express delivery or collection options.</p>
            </div>
            </div>
          </div>

          <div className=' h-[300px] flex flex-col items-center justify-center gap-5'>
            <div className=' w-[350px] h-[200px] flex flex-col items-center justify-center gap-5'>
          <img className='w-[50px]' src='https://st4.depositphotos.com/9046386/28149/v/450/depositphotos_281491994-stock-illustration-recycle-recycle-sign-recycle-green.jpg' alt='logo'></img>
            <b className='text-[20px]'>Easy Returns/Refund</b>
            <div className='text-center opacity-55'>
            <p>Not satisfied with a product? Return it at</p>
            <p>the doorstep & get a refund within hours.</p>
            <p>No questions asked policy .</p>
            </div>
            </div>
          </div>

              </div>
          </div>


          <div className='h-[700px] bg-gray-100 flex flex-col items-center'>
            <div className='h-[70px] w-full flex items-center justify-between mt-20'>
                 <div className='flex flex-col ml-14'>
                  <b className='text-[25px]'>Areas we deliver to</b>
                  <p className='opacity-55'>Find the best store products in your area with discount.</p>
                 </div>
                 <div className='mr-14'>
                  <button className='bg-green-500 px-4 py-2 text-white font-extrabold rounded-xl text-[14px]'>View All City</button>
                 </div>
            </div>

          <div className='w-[1300px] mt-10'>
            <div className='grid grid-cols-[repeat(5,minmax(200px,400px))] gap-5'>

                <div className=' h-[400px] flex items-center justify-center'>
                  <ul className='flex flex-col gap-3'>
                    <li className='hover:text-green-500 cursor-pointer'> → Adlaj</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Ambawadi</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Ambli</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Amraiwadi</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Asarwa</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Badarkha</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Bapunagar</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Barejadi</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Bhat</li>
                  </ul>
                </div>

                <div className=' h-[400px] flex items-center justify-center'>
                  <ul className='flex flex-col gap-3'>
                    <li className='hover:text-green-500 cursor-pointer'> → Chanakyapuri</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Chandkheda</li>
                    <li className='hover:text-green-500 cursor-pointer'> →  Chandlodiya</li>
                    <li className='hover:text-green-500 cursor-pointer'> →  Changodar</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Chharodi</li>
                    <li className='hover:text-green-500 cursor-pointer'> →  Dabhoda</li>
                    <li className='hover:text-green-500 cursor-pointer'> →  Dahegam</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Dariapur</li>
                    <li className='hover:text-green-500 cursor-pointer'> →  Dholera</li>
                  </ul>
                </div>

                <div className=' h-[400px] flex items-center justify-center'>
                  <ul className='flex flex-col gap-3'>
                    <li className='hover:text-green-500 cursor-pointer'> → Ellis Bridger</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Gandhi Ashram</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Gandhinagar</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Ghatlodiya</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Ghodasar</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Ghuma</li>
                    <li className='hover:text-green-500 cursor-pointer'> →  Gift City</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Girdhar Nagar</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Gita Mandi</li>
                  </ul>
                </div>

                <div className=' h-[400px] flex items-center justify-center'>
                  <ul className='flex flex-col gap-3'>
                    <li className='hover:text-green-500 cursor-pointer'> → Gota</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Gurukul</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Hansol</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Hathijan</li>
                    <li className='hover:text-green-500 cursor-pointer'> →  Hatkeshwar</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Janta Nagar</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Jagatpur</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Janta Nagar</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Jashoda Nagar</li>
                  </ul>
                </div>

                <div className=' h-[400px] flex items-center justify-center'>
                  <ul className='flex flex-col gap-3'>
                    <li className='hover:text-green-500 cursor-pointer'> → Jetalpur</li>
                    <li className='hover:text-green-500 cursor-pointer'> →  Jivraj Park</li>
                    <li className='hover:text-green-500 cursor-pointer'> →  Juna Wadaj</li>
                    <li className='hover:text-green-500 cursor-pointer'> → Kalapi Nagar</li>
                    <li className='hover:text-green-500 cursor-pointer'> →  Kalol</li>
                    <li className='hover:text-green-500 cursor-pointer'> →  Madhupura</li>
                    <li className='hover:text-green-500 cursor-pointer'> →  Manek Chowk</li>
                    <li className='hover:text-green-500 cursor-pointer'> →  Meghani Nagar</li>
                    <li className='hover:text-green-500 cursor-pointer'> →  Motera</li>
                  </ul>
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

export default Home4
