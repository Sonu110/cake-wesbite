
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import  HomeContainer  from './pages/Home/HomeContainer';
import Header from './components/Header';
import Details from './pages/Productdetails/Details';
import { CartTwo } from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Protexted from './pages/Protextedrouter/Protexted';
import { Mycontext } from './Context/Context';
import { useContext } from 'react';
import { SignUpThree } from './pages/Login/Signup';

import Restorent from './pages/resturentdetails/resturent';
import Menus from './pages/resturentdetails/Menus';
import Review from './pages/resturentdetails/Review';
import Photos from './pages/resturentdetails/Photos';
import RestorentHome from './pages/Restorentpage/RestorentHome';
import Menuhomepage from './pages/Menupages/Menuhomepage';
import DashbordHome from './Dashbord/Pages/Home/DashbordHome';
import Restorentdata from './Dashbord/Pages/Restorent/Restorentdata';
import Dashbordcardhomepage from './Dashbord/Pages/Home/Dashbordcardhomepage';
import Restorentdetailsform from './Dashbord/Pages/Restorent/Restorentdetailsform';
import Menulist from './Dashbord/Pages/Menus/Menulist';
import Userlist from './Dashbord/Pages/Users/Userlist';
import Massage from './Dashbord/components/Massage';
import Layout from './pages/Layout/Layout';
import Orderslists from './Dashbord/Pages/Orders/Orderslist';
import OrderForm from './Dashbord/Pages/Menus/Menufrom';





function App() {
  
const {auth,restorentdata}= useContext(Mycontext)
  
  const route  = createBrowserRouter(createRoutesFromElements(
    <>
     <Route path='/' element={<Layout></Layout>}>
   
    <Route  path='' element={<HomeContainer></HomeContainer>}>  </Route>
    {/* <Route  path='/restorents' element={<RestorentHome></RestorentHome>}>  </Route> */}
    <Route path='/menu' element={<Menuhomepage></Menuhomepage>}></Route>



    <Route path='/details/:name/:id' element={<Details></Details>}></Route>

        <Route path='/cart' element={<Protexted user={auth}></Protexted>}>
          <Route path='' element={<CartTwo></CartTwo>}></Route>
        </Route>
    <Route path='/signup' element={<SignUpThree></SignUpThree>}></Route>
    <Route path='/login' element ={<Login></Login>}></Route>
    {/* <Route path='/restorent/:name' element={<Restorent></Restorent>}>

   < Route index element={<Menus />} />
    <Route path="oder" element={<Menus />} />



    <Route path='review' element={<Review></Review>}></Route>


    <Route path='photo' element={<Photos></Photos>}></Route>


    <Route path='overview' element={<>overview</>}></Route>


    </Route> */}

   </Route>
    <Route path='/dashbord ' element={<Protexted user={auth}></Protexted>}>
    <Route path='' element={<DashbordHome />}>
    <Route index element={<Dashbordcardhomepage/>}></Route>
    <Route path='restorent' element={<Restorentdata />} /> 
    <Route path='newrestorent' element={<Restorentdetailsform />} />

    <Route path='menu' element={<Menulist />} />
    <Route path='newmenu' element={<OrderForm />} />
    <Route path='order' element={<Orderslists></Orderslists>} />
    
    <Route path='users' element={<Userlist />} />
    <Route path='logout' element={<Massage />} />
  </Route>
</Route>




<Route path='*' element={<><div>error</div></>}></Route>

    
    </>





  )) 


  

  return (
<RouterProvider router={route}></RouterProvider>
  );
}

export default App;
