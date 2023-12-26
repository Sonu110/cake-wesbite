import React, { useEffect, useRef } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../img/NotFound.svg";
import { Link } from "react-router-dom";

const RowContainer = ({ flag, data ,scrollValue, cat ,res}) => {
  const rowContainer = useRef();
  console.log(scrollValue);
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);


  return (
    <div
    ref={rowContainer}
      className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
     id="scrolling"
    >
      {data && data.length > 0 ? (
        data.map((item) => (


          <Link to={ res ?  `/restorent/${item?.name}` : `/details/${cat}/${item?.id || item[0]-1}`   }   >
          <div
            key={item[0]}
            className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
          >
            <div className="w-full flex items-center justify-between">
              <motion.div
                className="w-40 h-40 -mt-8 drop-shadow-2xl"
                whileHover={{ scale: 1.2 }}
                
              >
                <img
                src={`data:image/jpg;base64,${item[4]}`}
                  alt=""
                  className="w-full  h-full object-contain"
                />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
               
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>

            <div className="w-full flex flex-col items-end justify-end -mt-8">
              <p className="text-textColor font-semibold text-base md:text-lg">
                {item[2]}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {item?.decp || item?.address}  
              </p>
              <div className="flex items-center gap-8">
              <p className="text-lg text-headingColor font-semibold">
    {item?.price && (
      <span className="text-sm text-red-500">$ {item.price}</span>
    )}
    {item?.price && item?.rate && (
      <span className="text-sm text-red-500">/</span>
    )}
    {item?.rate && (
      <span className="text-sm text-red-500 flex gap-2 items-center">
         {Array.from({ length: item.rate }, (_, index) => <span key={index} className=" text-2xl">*</span>)} {item.rate}/10
      </span>
    )}
  </p>
              </div>
            </div>
          </div>

          </Link>
        ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className=" max-h-60" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
