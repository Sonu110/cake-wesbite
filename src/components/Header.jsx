import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { Mycontext } from "../Context/Context";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {cart} = useContext(Mycontext)

  useEffect(() => {
    const handleScroll = () => {
     
        const scrollTop = window.scrollY;
        setScrolling(scrollTop > 10);
      }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };




  return (
    <>
    <nav class="fixed z-10 w-full md:absolute md:bg-transparent transition duration-300" style={{position:"fixed",left:"0px",right:"0px",  backgroundColor: scrolling ? "#fff" : "transparent",}}>
        <div class="container m-auto px-2 md:px-12 lg:px-7">
          <div class="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
            <div class="w-full px-6 flex justify-between lg:w-max md:px-0">
             
                
                <span class="text-2xl font-bold text-yellow-500">Apni.<span class="text-yellow-800">Dunkan</span></span>
             
             <button
                aria-label="hamburger"
                id="hamburger"
                className="relative w-10 h-10 -mr-2 lg:hidden"
                onClick={toggleMobileMenu}
              >
                <div aria-hidden="true" id="line" class="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"></div>
                <div aria-hidden="true" id="line2" class="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"></div>
              </button>
            </div>

            <div
              className={`${
                isMobileMenuOpen ? "block" : "hidden"
              } w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-slate-900 md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12`}
            
            >
              <div class={`lg:pr-4  ${scrolling ? "text-black" :  " text-yellow-500"}`} >
                <ul class="space-y-6  tracking-wide font-medium text-sm md:flex md:space-y-0">
                  <li>
                      {[
                        {path:'/', name:"Home"},
                        // {path:'/restorents', name:"Restorents"},
                        {path:'/menu', name:"Menu"},
                          
                        {path:'/login', name:"Contact"},
                        
                      ].map((item,i)=>
                    <a  key={i} href={`${item.path}`} class="  md:px-4 transition hover:text-yellow-700 ">
                      <span>{item.name}</span>
                      
                    </a>
                      )}
                  </li>
                  
                </ul>
              </div>

              <div class="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l ">
              
                <Link to={'/signup'}>
                <button type="button" title="Start buying" class="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max">
                  <span class="block text-yellow-800 font-semibold text-sm">
                    Sign up
                  </span>
                </button>
                </Link>
                
                <Link to={'/login'}>
                <button type="button" title="Start buying" class="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max">
                  <span class="block text-yellow-900 font-semibold text-sm">
                    Login
                  </span>
                </button>
                </Link>
              </div>
              <Link to={'/cart'}>
             <div className="flex justify-center items-center "> 
            <FaCartShopping  className=" text-[2.5rem] ml-5 " style={{ color: scrolling ? "black" : "orange",}}/>
            <span className="-mt-7 rounded-full transition  bg-black w-6 flex  text-white justify-center items-center">{cart.length}</span>
            </div>
            </Link>
            </div>


          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
