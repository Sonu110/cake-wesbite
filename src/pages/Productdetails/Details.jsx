import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import  {Menu }from '../../utils/Products'
import RowContainer from '../../components/RowContainer';
import { categories } from '../../utils/data';
import Loader from '../../components/Loader';
import { Mycontext } from '../../Context/Context';
      

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Details() {
  const { cart, setcart } = useContext(Mycontext);


  const { name, id } = useParams();
  const [productdata] = useState(Menu);
  const [categoriedata] = useState(categories);

  const data = productdata[name].find((product) => product.id === Number(id));
  const constdata = productdata[name].filter((id) => id.id !== data.id);

  if (!data) {
    return <Loader></Loader>;
  }

  const isProductInCart = cart.some((item) => item.id === data.id);

  const carts = () => {
    if (!isProductInCart) {
      setcart((prevCart) => [...prevCart, data]);
      toast.success("Success Notification !", {
        position: toast.POSITION.BOTTOM_CENTER,
      });

     
    }
  };
  ;
  
  
  return (
    <>
     <ToastContainer />
    
    <section className="overflow-hidden py-5">
      <div className="mx-auto max-w-5xl px-5 py-24   ">
        <div className="mx-auto flex flex-wrap items-center sm:w-4/5">
          <img
            alt="Nike Air Max 21A"
            className="h-64 w-full rounded object-cover sm:h-96 sm:w-1/2"
            src={data?.imageSrc}
          />
          <div className="mt-6 w-full sm:mt-0 sm:w-1/2 sm:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">{name}</h2>
            <h1 className="my-4 text-3xl font-semibold text-black">{data?.name}</h1>
            
            <p className="leading-relaxed">
              {data?.description}
            </p>
          

            <div className="flex items-center justify-between mt-8">
              <span className="title-font text-xl font-bold text-gray-900">₹{data?.price}</span>
              <Link to={'/cart'}>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"

                onClick={carts }
              >
              {isProductInCart ? 'Cart is added' : 'Add to Cart'}
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-sm before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 ml-4">
        Our fresh & healthy Products related
      </p>

      {categoriedata
  .filter(category => category.urlParamName === name) // Filter to include only the selected category
  .map(selectedCategory => (
    <RowContainer key={selectedCategory.urlParamName} data={constdata} flag={true} cat={selectedCategory.urlParamName} />
))}


    </>
    
  )
}

export default Details