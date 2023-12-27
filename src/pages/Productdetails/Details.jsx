import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import RowContainer from '../../components/RowContainer';

import Loader from '../../components/Loader';
import { Mycontext } from '../../Context/Context';

function Details() {
  const { cart, setcart ,users } = useContext(Mycontext);
  const { name ,id } = useParams();
  const [productdata] = useState(users);
  const data = productdata.find((item) => item[2].toLowerCase().includes(name.toLowerCase()) && item[0] == Number(id)+1);
  const restData = productdata.filter(
    (item) => item[2].toLowerCase().includes(name.toLowerCase()) && item !== data
  );
  const   isProductInCart = cart.find((item) => item[1].toLowerCase()===data[1].toLowerCase())
  console.log("the cartt is ture nad flase",isProductInCart);
    

  const addcart =()=>{

    if(!isProductInCart)
    {
      setcart([...cart,data])
    }


  }



   // If data is undefined, render Loader
   if (data === undefined || data.length === 0) {
    return <Loader />;
  }


  return (
    <>
    
    <section className="overflow-hidden py-5">
      <div className="mx-auto max-w-5xl px-5 py-24   ">
        <div className="mx-auto flex flex-wrap items-center sm:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover sm:h-96 sm:w-1/2"
            src={data?.imageSrc || (data[4] ? `data:image/jpg;base64,${data[4]}` : "")}

          />
          <div className="mt-6 w-full sm:mt-0 sm:w-1/2 sm:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">{name || data?.[1]}</h2>
            <h1 className="my-4 text-3xl font-semibold text-black">{data?.name || data[2]}</h1>
            
            <p className="leading-relaxed">
              {data?.description || data[3]}
            </p>
          

            <div className="flex items-center justify-between mt-8">
              <span className="title-font text-xl font-bold text-gray-900">₹{data?.price || data[5]}</span>
            
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={addcart}
              >
              {isProductInCart ? 'Cart is added' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-sm before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 ml-4">
        Our fresh & healthy Products related
      </p>

      {
        restData.length ===0 || restData === undefined || restData === null ?
        <RowContainer data={restData} flag={true}  cat={restData[2]} />
        :
        <RowContainer data={restData} flag={true}  cat={restData[0][2]} />
        
      }



    </>
    
  )
}

export default Details