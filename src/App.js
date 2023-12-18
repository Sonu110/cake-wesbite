
import { Route, Routes } from 'react-router-dom';
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





function App() {

const {auth}= useContext(Mycontext)
  return (
    <>
      <Header></Header>
     
    <Routes>
    <Route  path='/' element={<HomeContainer></HomeContainer>}>  </Route>
    <Route  path='/restorents' element={<RestorentHome></RestorentHome>}>  </Route>
    <Route path='/menu' element={<Menuhomepage></Menuhomepage>}></Route>



    <Route path='/details/:name/:id' element={<Details></Details>}></Route>

        <Route path='/cart' element={<Protexted user={auth}></Protexted>}>
          <Route path='' element={<CartTwo></CartTwo>}></Route>
        </Route>
    <Route path='/signup' element={<SignUpThree></SignUpThree>}></Route>
    <Route path='/login' element ={<Login></Login>}></Route>
    <Route path='/restorent/:name' element={<Restorent></Restorent>}>

   < Route index element={<Menus />} />
    <Route path="oder" element={<Menus />} />



    <Route path='review' element={<Review></Review>}></Route>


    <Route path='photo' element={<Photos></Photos>}></Route>


    <Route path='overview' element={<>overview</>}></Route>


    </Route>

   
    <Route path='/dashbord' element={<DashbordHome>  </DashbordHome>}>
    <Route index element={<Dashbordcardhomepage></Dashbordcardhomepage>}/>
    
    <Route path='restorent' element={<Restorentdata></Restorentdata>}/> 
    <Route path='newrestorent' element={<Restorentdetailsform></Restorentdetailsform>}/>


    </Route>






    <Route path='*' element={<><div>error</div></>}></Route>
    </Routes>
    

    </>
  );
}

export default App;
