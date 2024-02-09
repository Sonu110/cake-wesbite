import React, { useContext } from 'react'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

import video1 from '../../img/video/video2.mp4';
import Menus from '../resturentdetails/Menus';
import Restorentheader from './Restorentheader';
import { Mycontext } from '../../Context/Context';
function RestorentHome() {

  const {restorents} = useContext(Mycontext)




    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["at your place", "search your location"], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);



  return (

    <>
<div className="relative w-full  ">
    <div className="relative">
    <video autoPlay muted loop className="w-full h-screen object-cover">
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
     <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7  w-full  absolute top-0 left-0 right-0 bottom-0  flex items-center">
  <div className="flex flex-col lg:w-6/12">
    <h1 className="font-bold text-4xl text-white md:text-5xl lg:w-10/12">
      Your favorite dishes, <br /><span ref={el}></span>
    </h1>
    <form action="" className="w-full mt-10">
      <div className="relative flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2 max-h-min">
        <input
          placeholder="Your favorite food"
          className="w-full p-4 rounded-full"
          type="text"
        />
        <button
          type="button"
          title="Start buying"
          className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12 flex"
        >
          <span className="hidden text-yellow-900 font-semibold sm:block">
            Search
          </span>
        </button>
      </div>
    </form>
    <p className="mt-8 text-white lg:w-10/12 text-sm md:text-base">
      At your location just have it {" "}
      <a href="#" className="text-yellow-700">
        connection
      </a>{" "}
      Build the turst
    </p>
  </div>
</div>
</div>
</div>


<Restorentheader></Restorentheader>

<div className='flex items-center justify-center '>

<p className="text-3xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-80 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100  px-5 ">
      Our Top Resturents 
</p>
</div>

<div className='p-10'>
<Menus ></Menus>

</div>
</>


  )
}

export default RestorentHome