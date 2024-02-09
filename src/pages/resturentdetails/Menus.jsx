import React from 'react'
function Menus({data}) {
  return (


<section className='menu-container'>
    

{
  [1,2,3,4,5].map((value , index)=>
  

<div class="flex flex-col justify-center mt-4" key={index}>
  <div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-full mx-auto border border-white bg-white md:h-225">

    <div class="w-full md:w-1/4 bg-white grid place-items-center overflow-hidden">
      <img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="tailwind logo" class="rounded-xl" />
    </div>

    <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3 md:flex-col md:w-full">
      <div class="flex justify-between item-center">
        <p class="text-gray-500 font-medium hidden md:block">Vacations</p>
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          <p class="text-gray-600 font-bold text-sm ml-1">
            4.96
            <span class="text-gray-500 font-normal">(76 reviews)</span>
          </p>
        </div>
      </div>
      <h3 class="font-black text-gray-800 md:text-xl text-lg">The Majestic and Wonderful Bahamas</h3>
      <p class="md:text-sm text-gray-500 text-base">The best kept secret of The Bahamas is the country’s sheer size and diversity. With 16 major islands, The Bahamas is an unmatched destination</p>
      <p class="text-xl font-black text-gray-800">
        $110
        <span class="font-normal text-gray-600 text-base">/night</span>
      </p>
    </div>
  </div>
</div>

  
  )
}







</section>


  )
}

export default Menus