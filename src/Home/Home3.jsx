import React from 'react'
import { NavLink } from 'react-router-dom'

const Home3 = () => {
  return (
    <>

    <div>
    <div>
    <div className='h-[100px] border flex items-center '>
       <img className='w-[200px] ml-10' src='https://freshcart.codescandy.com/assets/images/logo/freshcart-logo.svg' alt='logo'></img>
       <div className='flex'>
       <input className='pl-4 w-[600px] h-[40px] rounded-l-lg border-t border-b border-l outline-none ml-20' type='text' name='name'placeholder='Search For Products'></input>
       <span className='h-[40px] w-[40px] flex items-center border-t border-b border-r rounded-r-lg justify-center cursor-pointer'><img className='w-[15px]' src='https://cdn-icons-png.freepik.com/256/54/54481.png' alt='logo'></img></span>
       </div>
       
    </div>

   
      <div className='h-[700px] border flex items-center justify-center gap-5'>
        <div className='w-[900px] h-[600px] border overflow-auto flex items-center sc'>
          <div className='grid grid-cols-[repeat(3,minmax(900px,600px))] gap-5'>
            <div className='h-[600px] img-9 w-[900px] border flex-col flex justify-center gap-5'>
                
              <div className='flex items-center gap-5 ml-10'>
              <p className='opacity-55'>Exclusive Offer</p>
              <span className=''><button className='text-[10px] h-[20px] w-[30px] flex items-center justify-center text-white bg-red-500 rounded-sm ju'>20%</button></span>
              </div>
              <div className='ml-10'>
                <p className='text-[45px]'><b>Chocozay wafer-</b></p>
                <p className='text-[45px]'><b>rolls Deals</b></p>
              </div>
              <div>
                <p className='ml-10'>Only on this week... don't miss out!</p>
              </div>
              <div className='flex items-center ml-10'>
                <p>start from <span className='text-red-600 text-[20px]'>$34.99</span></p>
              </div>
              <div className='ml-10'>
              <button className='h-[50px] w-[200px] text-[18px] bg-green-500 text-white rounded-lg'>Shop Deals Now →</button>
              </div>
            </div>


            <div className='h-[600px] img-10 w-[900px] border flex flex-col justify-center gap-5'>

            <div className='flex items-center gap-5 ml-10'>
              <p className='opacity-55'>Exclusive Offer</p>
              <span className=''><button className='text-[10px] h-[20px] w-[30px] flex items-center justify-center text-white bg-red-500 rounded-sm ju'>20%</button></span>
              </div>
              <div className='ml-10'>
                <p className='text-[45px]'><b>Best Online</b></p>
                <p className='text-[45px]'><b>Deals,Free Stuff</b></p>
              </div>
              <div>
                <p className='ml-10'>Only on this week... don't miss out!</p>
              </div>
              <div className='flex items-center ml-10'>
                <p>start from <span className='text-red-600 text-[20px]'>$5.99</span></p>
              </div>
              <div className='ml-10'>
              <button className='h-[50px] w-[200px] text-[18px] bg-green-500 text-white rounded-lg'>Get Best Deal →</button>
              </div>
            </div>


            <div className='h-[600px] img-11 w-[900px] border flex flex-col justify-center gap-5'>
            <div className='flex items-center gap-5 ml-10'>
              <p className='opacity-55'>Exclusive Offer</p>
              <span className=''><button className='text-[10px] h-[20px] w-[30px] flex items-center justify-center text-white bg-red-500 rounded-sm ju'>20%</button></span>
              </div>
              <div className='ml-10'>
                <p className='text-[45px]'><b>Cokoladni Kolutici</b></p>
                <p className='text-[45px]'><b>Lasta</b></p>
              </div>
              <div>
                <p className='ml-10'>Only on this week... don't miss out!</p>
              </div>
              <div className='flex items-center ml-10'>
                <p>start from <span className='text-green-600 text-[20px]'>$5.99</span></p>
              </div>
              <div className='ml-10'>
              <button className='h-[50px] w-[250px] text-[18px] bg-green-500 text-white rounded-lg'>Shop This week Offer →</button>
              </div>
            </div>
            </div>
        </div>

        <div className='h-[600px] w-[400px]  flex gap-5 flex-col'>
              <div className='w-full h-1/2 border img-12 flex flex-col justify-center gap-5'>
                   <div className='flex flex-col text-[30px] leading-8 ml-9'>
                    <b>10% cashback on</b>
                    <b>personal care</b>
                   </div>
                   <div className='ml-9'>
                    <p className='opacity-55'>Max cashback: $12</p>
                    <div className='flex gap-2'>
                    <p className='opacity-55'>Code:</p>
                    <b>CARE12</b>
                    </div>
                   </div>
                   <div className='ml-9'>
                    <button className='h-[50px] w-[100px] bg-black text-white rounded-lg'>Shop Now</button>
                   </div>
              </div>


              <div className='w-full h-1/2 border img-13 flex justify-center gap-5 flex-col'>
              <div className='flex flex-col text-[30px] leading-8 ml-9 '>
                    <b>Say yes to</b>
                    <b>season’s fresh</b>
                   </div>
                   <div className='ml-9 opacity-55'>
                    <p>Refresh your day</p>
                    <p>the fruity way</p>
                    </div>

                 
                   <div className='ml-9'>
                    <button className='h-[50px] w-[100px] bg-black text-white rounded-lg'>Shop Now</button>
                   </div>
              </div>
        </div>
</div>
      </div>

      <div className='h-[700px] border'>
        <b className='ml-16 text-[25px]'>Shop Popular Categories</b>
        <div className='grid grid-cols-[repeat(6,minmax(200px,250px))] '>

          <div className=' h-[250px] w-[200px] flex flex-col items-center justify-center gap-5'>
            <img src='https://freshcart.codescandy.com/assets/images/category/dairy-bread-eggs.png' alt='logo'></img>
            <p>Dairy, Bread & Eggs</p>
          </div>

          <div className=' h-[250px] w-[200px]  flex flex-col items-center justify-center gap-5'>
             <img src='https://freshcart.codescandy.com/assets/images/category/fruits-vegetables.png' alt='logo'></img>
             <p>Fruits & Vegetables</p>
          </div>


          <div className=' h-[250px] w-[200px]  flex flex-col items-center justify-center gap-5'>
             <img src='https://freshcart.codescandy.com/assets/images/category/snack-munchies.png' alt='logo'></img>
             <p>Snack & Munchies</p>
          </div>

          <div className=' h-[250px] w-[200px]  flex flex-col items-center justify-center gap-5'>
             <img src='https://freshcart.codescandy.com/assets/images/category/bakery-biscuits.png' alt='logo'></img>
             <p>Bakery & Biscuits</p>
          </div>
              

          <div className=' h-[250px] w-[200px]  flex flex-col items-center justify-center gap-5'>
             <img src='https://freshcart.codescandy.com/assets/images/category/instant-food.png' alt='logo'></img>
             <p>Instant Food</p>
          </div>

          <div className=' h-[250px] w-[200px]  flex flex-col items-center justify-center gap-5'>
             <img src='https://freshcart.codescandy.com/assets/images/category/tea-coffee-drinks.png' alt='logo'></img>
             <p>Tea, Coffee & Drinks</p>
          </div>

          <div className=' h-[250px] w-[200px]  flex flex-col items-center justify-center gap-5'>
             <img src='https://freshcart.codescandy.com/assets/images/category/cold-drinks-juices.png' alt='logo'></img>
             <p>Cold Drinks & Juices</p>
          </div>

          <div className=' h-[250px] w-[200px]  flex flex-col items-center justify-center gap-5'>
             <img src='https://freshcart.codescandy.com/assets/images/category/chicken-meat-fish.png' alt='logo'></img>
             <p>Chicken, Meat & Fish</p>
          </div>

          <div className=' h-[250px] w-[200px]  flex flex-col items-center justify-center gap-5'>
             <img src='https://freshcart.codescandy.com/assets/images/category/baby-care.png' alt='logo'></img>
             <p>Baby Care</p>
          </div>

          <div className=' h-[250px] w-[200px]  flex flex-col items-center justify-center gap-5'>
             <img src='https://freshcart.codescandy.com/assets/images/category/cleaning-essentials.png' alt='logo'></img>
             <p>Cleaning Essentials</p>
          </div>

          <div className=' h-[250px] w-[200px]  flex flex-col items-center justify-center gap-5'>
             <img src='https://freshcart.codescandy.com/assets/images/category/pet-care.png' alt='logo'></img>
             <p>Pet Care</p>
          </div>

          <div className=' h-[250px] w-[200px]  flex flex-col items-center justify-center gap-5'>
             <img src='https://freshcart.codescandy.com/assets/images/category/atta-rice-dal.png' alt='logo'></img>
             <p>Atta, Rice & Dal</p>
          </div>
        </div>
      </div>

      <div className='h-[1100px]'>
        <div className='h-[100px] flex items-center justify-evenly gap-10'>
          <div className='flex flex-col'>
          <b className='text-[25px]'>New Products</b>
          <p>New products with updated stocks</p>
          </div>
        <ul className='flex gap-5'>
          <li>
            <button className='h-[40px] w-[150px] bg-green-600 text-white'>Fruit & Vegetables</button>
          </li>
          <li>
            <button className='h-[40px] w-[150px]'>Snack & Munchies</button>
          </li>
          <li>
            <button className='h-[40px] w-[150px] '>Bakery & Biscuits</button>
          </li>
          <li>
            <button className='h-[40px] w-[150px] '>Tea Coffee & Drinks</button>
          </li>
          <li>
            <button className='h-[40px] w-[150px] '>Cold Drinks & Juices</button>
          </li>
        </ul>
        </div>


        <div>
            <div className='grid grid-cols-[repeat(5,minmax(250px,100px))] gap-5  justify-center mt-10 '>

              <div className='border h-[440px] rounded-lg flex flex-col justify-center hover:shadow-2xl hover:border-red-500'>
               
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
                  <span className='inline mr-5 text-green-500'>In Stock</span>
                 </div>
                 <div className='flex items-center justify-center'>
                  <button className='h-[50px] w-[200px] bg-green-600 text-white rounded-xl'>Add to Cart</button>
                 </div>
              </div>
             
              
              <div className='border h-[440px] rounded-lg flex flex-col justify-center hover:shadow-2xl hover:border-red-500'>
               
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
                <span className='inline mr-5 text-green-500'>In Stock</span>
               </div>
               <div className='flex items-center justify-center'>
                  <button className='h-[50px] w-[200px] bg-green-600 text-white rounded-xl'>Add to Cart</button>
                 </div>
            </div>


            <div className='border h-[440px] rounded-lg flex flex-col justify-center hover:shadow-2xl hover:border-red-500'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-3.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Bakery & Biscuits</p>
                <p className='text-[14px]'>Cadbury 5 Star Chocolate</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$32</p>
                <span className='inline mr-5 text-green-500'>In Stock</span>
               </div>
               <div className='flex items-center justify-center'>
                  <button className='h-[50px] w-[200px] bg-green-600 text-white rounded-xl'>Add to Cart</button>
                 </div>
            </div>
              
            <div className='border h-[440px] rounded-lg flex flex-col justify-center hover:shadow-2xl hover:border-red-500'>
               
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
                <span className='inline mr-5 text-green-500'>In Stock</span>
               </div>
               <div className='flex items-center justify-center'>
                  <button className='h-[50px] w-[200px] bg-green-600 text-white rounded-xl'>Add to Cart</button>
                 </div>
            </div>


            <div className='border h-[440px] rounded-lg flex flex-col justify-center hover:shadow-2xl hover:border-red-500'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-5.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Instant Food</p>
                <p className='text-[14px]'>Salted Instant Popcorn</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$13</p>
                <span className='inline mr-5 text-green-500'>In Stock</span>
               </div>
               <div className='flex items-center justify-center'>
                  <button className='h-[50px] w-[200px] bg-green-600 text-white rounded-xl'>Add to Cart</button>
                 </div>
            </div>


            <div className='border h-[440px] rounded-lg flex flex-col justify-center hover:shadow-2xl hover:border-red-500'>
               
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
                <span className='inline mr-5 text-green-500'>In Stock</span>
               </div>
               <div className='flex items-center justify-center'>
                  <button className='h-[50px] w-[200px] bg-green-600 text-white rounded-xl'>Add to Cart</button>
                 </div>
            </div>


            <div className='border h-[440px] rounded-lg flex flex-col justify-center hover:shadow-2xl hover:border-red-500'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-7.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Dairy, Bread & Eggs</p>
                <p className='text-[14px]'>Britannia Cheese Slices</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$24</p>
                <span className='inline mr-5 text-green-500'>In Stock</span>
               </div>
               <div className='flex items-center justify-center'>
                  <button className='h-[50px] w-[200px] bg-green-600 text-white rounded-xl'>Add to Cart</button>
                 </div>
            </div>




            <div className='border h-[440px] rounded-lg flex flex-col justify-center hover:shadow-2xl hover:border-red-500'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-8.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Instant Food</p>
                <p className='text-[14px]'>Kellogg's Original Cereals</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$32</p>
                <span className='inline mr-5 text-green-500'>In Stock</span>
               </div>
               <div className='flex items-center justify-center'>
                  <button className='h-[50px] w-[200px] bg-green-600 text-white rounded-xl'>Add to Cart</button>
                 </div>
            </div>

               
            <div className='border h-[440px] rounded-lg flex flex-col justify-center hover:shadow-2xl hover:border-red-500'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-9.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Snack & Munchies</p>
                <p className='text-[14px]'>Slurrp Millet Chocolate</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$3</p>
                <span className='inline mr-5 text-green-500'>In Stock</span>
               </div>
               <div className='flex items-center justify-center'>
                  <button className='h-[50px] w-[200px] bg-green-600 text-white rounded-xl'>Add to Cart</button>
                 </div>
            </div>

              
            <div className='border h-[440px] rounded-lg flex flex-col justify-center hover:shadow-2xl hover:border-red-500'>
               <div className='flex items-center justify-center mt-[38px]'> 
               <img src='https://freshcart.codescandy.com/assets/images/products/product-img-10.jpg' alt='logo'></img>
               </div>
              
               <div className='ml-5 mb-5'>
                <p className='text-[12px] opacity-55'>Dairy, Bread & Eggs</p>
                <p className='text-[14px]'>Amul Butter - 500 g</p>
               </div>
               <div className='flex items-center justify-between ml-5 mb-5'>
                <p className='font-bold'>$13</p>
                <span className='inline mr-5 text-green-500'>In Stock</span>
               </div>
               <div className='flex items-center justify-center'>
                  <button className='h-[50px] w-[200px] bg-green-600 text-white rounded-xl'>Add to Cart</button>
                 </div>
            </div>

            </div>
          </div>
       
          </div>
       
        <div className='h-[400px] flex items-center justify-center'>
       <div className='h-[250px] w-[1200px] border rounded-xl bg-slate-100 flex justify-between  items-center'>
             <div className='flex flex-col ml-10 gap-5'>
              <b>One Stop Grocery Shop</b>
              <div>
              <p>Shopping for your furry friend? Find food,</p>
              <p>treats, and more in one easy spot.</p>
              </div>
              <div>
              <button className='h-[50px] w-[200px] bg-black text-white rounded-xl'>Get Discount on Share</button>
             </div>
             </div>
            
             <div className='mr-10'>
              <img src='https://freshcart.codescandy.com/assets/images/svg-graphics/store-graphics.svg' alt='logo'></img>
             </div>
       </div>
       </div>

       <div className='h-[800px]  flex flex-col items-center'>
        <div className='h-[100px] w-[1200px] flex items-center justify-between'>
          <div className='flex-flex-col'>
          <b className='text-[30px]'>Special Offers of the View All Week!</b>
          <p>Get exclusive ongoing offers, deals, and discount codes of shopping</p>
          </div>
          <div className='text-green-500 cursor-pointer'>
           <NavLink to="/"><p>View All &gt;</p></NavLink> 
          </div>
        </div>
        <div className='h-[503px] border-2 w-[1200px] mt-10 border-red-500'>
            <div className='grid grid-cols-[repeat(5,minmax(200px,500px))]'>


              <div className='border-2 rounded-lg h-[500px] flex flex-col items-center justify-center hover:shadow-2xl hover:border-green-500'>
                <div className='mr-48'>
                  <button className='h-[20px] w-[30px] bg-blue-500 text-white text-[10px] rounded-md'>25%</button>
                </div>
                <div className='mb-10'>
                  <img className='w-[200px]' src='https://freshcart.codescandy.com/assets/images/products/product-img-2.jpg' alt='logo'></img>
                </div>
                <div className='flex flex-col items-center gap-3'>
                <div className=''>
                  <p>$15</p>
                </div>
                <div className='flex items-center text-[14px] justify-center text-center'>
                <p>Britannia NutriChoice Digestive Biscuits</p>
                </div>
                <div>
                  <p>IN STOCK</p>
                </div>
                </div>
                <div className=' mt-5'>
                <div className='h-[10px] w-[180px] border rounded-xl'>
                <div className='h-full w-[140px] rounded-xl bg-green-500'>

                </div>
                </div>
                </div>
                <div className='mt-5'>
                  <p>the available product is : 12 </p>
                </div>
                </div>


                <div className='border-2 rounded-lg h-[500px] flex flex-col items-center justify-center hover:shadow-2xl hover:border-green-500'>
                <div className='mr-20 text-red-500'>
                 <p>Buy one get $4 off</p>
                </div>
                <div className='mb-10'>
                  <img className='w-[200px]' src='https://freshcart.codescandy.com/assets/images/products/product-img-3.jpg' alt='logo'></img>
                </div>
                <div className='flex flex-col items-center gap-3'>
                <div className=''>
                  <p>$32</p>
                </div>
                <div className='flex items-center text-[14px] justify-center text-center'>
                <p>Cadbury 5 star chocolate</p>
                </div>
                <div>
                  <p>IN STOCK</p>
                </div>
                </div>
                <div className=' mt-5'>
                <div className='h-[10px] w-[180px] border rounded-xl'>
                <div className='h-full w-[110px] rounded-xl bg-green-500'>

                </div>
                </div>
                </div>
                <div className='mt-5 mb-6'>
                  <p>the available product is : 34 </p>
                </div>
                </div>

                <div className='border-2 rounded-lg h-[500px] flex flex-col items-center justify-center hover:shadow-2xl hover:border-green-500'>
                <div className='mr-48'>
                  <button className='h-[20px] w-[30px] bg-blue-500 text-white text-[10px] rounded-md'>22%</button>
                </div>
                <div className='mb-10'>
                  <img className='w-[200px]' src='https://freshcart.codescandy.com/assets/images/products/product-img-8.jpg' alt='logo'></img>
                </div>
                <div className='flex flex-col items-center gap-3'>
                <div className=''>
                  <p>$25</p>
                </div>
                <div className='flex items-center text-[14px] justify-center text-center'>
                <p>Kellogg's Special K Original Cereal</p>
                </div>
                <div>
                  <p>IN STOCK</p>
                </div>
                </div>
                <div className=' mt-5'>
                <div className='h-[10px] w-[180px] border rounded-xl'>
                <div className='h-full w-[170px] rounded-xl bg-green-500'>

                </div>
                </div>
                </div>
                <div className='mt-5'>
                  <p>the available product is : 8 </p>
                </div>
                </div>


                <div className='border-2 rounded-lg h-[500px] flex flex-col items-center justify-center hover:shadow-2xl hover:border-green-500'>
                <div className='mr-48'>
                  <button className='h-[20px] w-[30px] bg-blue-500 text-white text-[10px] rounded-md'>16%</button>
                </div>
                <div className='mb-5'>
                  <img className='w-[200px]' src='https://freshcart.codescandy.com/assets/images/products/product-img-9.jpg' alt='logo'></img>
                </div>
                <div className='flex flex-col items-center gap-3'>
                <div className='mt-5'>
                  <p>$34</p>
                </div>
                <div className='flex flex-col items-center text-[14px] justify-center text-center'>
                <p>Slurrp Farm No Maida Millet</p>
                <p>Pancake Mix</p>
                </div>
                <div>
                  <p>IN STOCK</p>
                </div>
                </div>
                <div className=' mt-5'>
                <div className='h-[10px] w-[180px] border rounded-xl'>
                <div className='h-full w-[130px] rounded-xl bg-green-500'>

                </div>
                </div>
                </div>
                <div className='mt-5'>
                  <p>the available product is : 67 </p>
                </div>
                </div>

                <div className='border-2 rounded-lg h-[500px] flex flex-col items-center justify-center hover:shadow-2xl hover:border-green-500'>
               
                <div className='mt-5'>
                  <img className='w-[200px]' src='https://freshcart.codescandy.com/assets/images/products/product-img-10.jpg' alt='logo'></img>
                </div>
                <div className='flex flex-col items-center gap-3'>
                <div className='mt-12'>
                  <p>$32</p>
                </div>
                <div className='flex items-center text-[14px] justify-center text-center'>
                <p>Cadbury 5 star chocolate</p>
                </div>
                <div>
                  <p>IN STOCK</p>
                </div>
                </div>
                <div className=' mt-5'>
                <div className='h-[10px] w-[180px] border rounded-xl'>
                <div className='h-full w-[70px] rounded-xl bg-green-500'>

                </div>
                </div>
                </div>
                <div className='mt-5 mb-6'>
                  <p>the available product is : 44 </p>
                </div>
                </div>
              
            </div>
       </div>
        </div>
     
  </div>

     <div className='h-[500px] w-full flex items-center justify-center'>
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
       

       <div className='h-[500px] bg-blue-950 flex w-full mt-16'>
          <div className='h-full w-1/2  flex flex-col justify-center items-end gap-8'>
            <div className='text-white'>
              <p>$30 discount for your first order</p>
              <b className='text-[30px]'>Get top deals, latest trends, and more.</b>
              </div>
              <div className=''>
                <p className='opacity-55 text-white'>Join our email subscription now to get updates on promotions and coupons.</p>
              </div>
              <div className='flex gap-5'>
                <input className='h-[50px] w-[300px] rounded-xl px-4 outline-none' type='text' name='name' placeholder='Enter Email Address'></input>
                <button className='h-[50px] w-[100px] bg-green-500 text-white rounded-xl mr-[120px]'>Sign Up</button>
              </div>
          </div>
          <div className='h-full w-1/2  flex items-end justify-start'>
               <img className='ml-24' src='https://freshcart.codescandy.com/assets/images/png/girl-email.png' alt='logo'></img>
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

export default Home3
