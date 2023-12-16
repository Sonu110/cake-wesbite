import React, { useEffect, useState } from "react";
import Menus from "./Menus";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { restorent } from "../../utils/data";

export default function Restorent() {

const [scrolling,setScrolling]= useState(true)
const location = useLocation();


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


  const {name}= useParams();

  const data = restorent.find((item)=> item.name === name)






    return (
    
<section className="p-3 sm:p-11">    
<div className="Resturent-conatiner  mt-12">


<p className="text-2xl font-semibold text-center ">
      Our Top Resturents {data.name}
      </p>
<div class="p-4 mt-5">
    <div>
        <img class=" h-[400px] w-full rounded-lg" src={data.imageSrc} alt=""/>
    </div>
    <div class="flex gap-2 overflow-x-scroll mt-5" id="scrolling">
        {data.subimage.map((i)=> 
        
        <div>
          <img src={i} alt=""  className=" max-h-[100px]"/>
        </div>
        
        )}
        
    </div>
</div>
</div>

<ul class={`flex border-b  bg-white justify-center overflow-x-scroll w-full   ${scrolling ? " fixed  top-16  left-0 right-0  z-10 py-5 shadow-sm" : ""}` }   id="scrolling">
{['oder', 'review', 'photo', 'overview'].map((item) => (
          <li class="-mb-px mr-1 " key={item}>
            <Link
              to={item}
              class={`bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold capitalize   ${
                location.pathname.includes(item) ? 'text-red-500' : ''
              }`}
            >
              {item}
            </Link>
          </li>
        ))}
  </ul>
<Outlet></Outlet>



</section>
    );
}
