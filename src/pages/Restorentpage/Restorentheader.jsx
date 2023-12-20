import React, { useEffect, useState } from 'react'

function Restorentheader() {

const [open ,setopen]= useState(true)
const [scrolling,setScrolling]= useState(false)
useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Set scrolling state based on scroll position
      setScrolling(scrollTop >  window.innerHeight);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (


    <>
<div className={`flex p-8 gap-5   bg-white w-full ${scrolling ? "fixed  top-[4rem] right-0 left-0 z-50 ":""}`}>

<button class="bg-transparent hover:bg-slate-500  text-gray-800 font-semibold hover:text-white py-1 px-4 border border-gray-300 hover:border-transparent rounded" onClick={()=> setopen(!open)}>
  Filters
</button>


<button class="bg-transparent hover:bg-slate-500  text-gray-800 font-semibold hover:text-white py-1 px-4 border border-gray-300 hover:border-transparent rounded">
Pure Vag
</button>







   </div>

<div className={`fixed top-0 left-0 right-0 z-50 bg-opacity-75  bg-black bottom-0 flex items-center justify-center  ${open ? "hidden" :""}`}>


   <div class="m-10 max-w-md w-screen overflow-hidden rounded-lg border border-gray-200 open:shadow-lg text-gray-700 bg-white  ">
    <summary class="flex cursor-pointer select-none items-center justify-between bg-gray-100 px-5 py-3 ">
      <span class="text-sm font-medium">  Filters </span>

      <span className='  font-bold  p-1 px-5 rounded-md border-solid border-2 border-black-600 text-gray-700 hover:bg-gray-600 hover:text-white ' onClick={()=> setopen(!open)}>X</span>
    </summary>

    <form action="" class=" max-[400px]:flex-wrap flex border-t border-gray-200 lg:border-t-0  ">
      <fieldset class="w-full">
        <legend class="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Type</legend>

        <div class="space-y-2 px-5 py-6">
          <div class="flex items-center">
            <input id="New" type="checkbox" name="type[New]" class="h-5 w-5 rounded border-gray-300" checked />

            <label for="New" class="ml-3 text-sm font-medium"> New </label>
          </div>

          <div class="flex items-center">
            <input id="Used" type="checkbox" name="type[Used]" class="h-5 w-5 rounded border-gray-300" />

            <label for="Used" class="ml-3 text-sm font-medium"> Used </label>
          </div>

          <div class="flex items-center">
            <input id="Branded" type="checkbox" name="type[Branded]" class="h-5 w-5 rounded border-gray-300" />

            <label for="Branded" class="ml-3 text-sm font-medium"> Branded </label>
          </div>

          <div class="pt-2">
            <button type="button" class="text-xs text-gray-500 underline">Reset Type</button>
          </div>
        </div>
      </fieldset>

      <fieldset class="w-full">
        <legend class="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Price</legend>

        <div class="space-y-2 px-5 py-6">
          <div class="flex items-center">
            <input id="300+" type="radio" name="Price" value="300+" class="h-5 w-5 rounded border-gray-300" />

            <label for="300+" class="ml-3 text-sm font-medium"> 300+ </label>
          </div>

          <div class="flex items-center">
            <input id="600+" type="radio" name="Price" value="600+" class="h-5 w-5 rounded border-gray-300" />

            <label for="600+" class="ml-3 text-sm font-medium"> 600+ </label>
          </div>

          <div class="flex items-center">
            <input id="1500+" type="radio" name="Price" value="1500+" class="h-5 w-5 rounded border-gray-300" checked />

            <label for="1500+" class="ml-3 text-sm font-medium"> 1500+ </label>
          </div>

          <div class="pt-2">
            <button type="button" class="text-xs text-gray-500 underline">Reset Price</button>
          </div>
        </div>
      </fieldset>
    </form>
    <div class="">
      <div class="flex justify-between border-t border-gray-200 px-5 py-3 flex-wrap gap-6">
        <button name="reset" type="button" class="rounded text-xs font-medium text-gray-600 underline">Reset All</button>

        <button name="commit" type="button" class="rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white active:scale-95">Apply Filters</button>
      </div>
    </div>
  </div>
</div>

    </>


  )
}

export default Restorentheader