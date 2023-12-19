import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomeContainer from './pages/Home/HomeContainer';
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
import Oderlist from './Dashbord/Pages/Order/Oderlist';
import Userlist from './Dashbord/Pages/Users/Userlist';
import Massage from './Dashbord/components/Massage';
import Footer from './pages/Footer/Footer';

function App() {
  const { auth } = useContext(Mycontext);

  const routes =createBrowserRouter( [
    {
      path: '/',
      element: <HomeContainer />,
    },
    {
      path: '/restorents',
      element: <RestorentHome />,
    },
    {
      path: '/menu',
      element: <Menuhomepage />,
    },
    {
      path: '/details/:name/:id',
      element: <Details />,
    },
    {
      path: '/cart',
      element: (
        <Protexted user={auth}>
          <CartTwo />
        </Protexted>
      ),
    },
    {
      path: '/signup',
      element: <SignUpThree />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/restaurant/:name',
      children: [
        {
          path: '',
          element: <Restorent />,
        },
        {
          path: 'menus',
          element: <Menus />,
        },
        {
          path: 'review',
          element: <Review />,
        },
        {
          path: 'photo',
          element: <Photos />,
        },
        {
          path: 'overview',
          element: <p>overview</p>,
        },
      ],
    },
    {
      path: '/dashbord',
      element: (
        <Protexted user={auth}>
          <DashbordHome>
            <Dashbordcardhomepage />
            <Restorentdata />
            <Restorentdetailsform />
            <Oderlist />
            <Userlist />
            <Massage path="logout" />
          </DashbordHome>
        </Protexted>
      ),
    },
    {
      path: '*',
      element: <p>error</p>,
    },
  ]);

  return (
    <>
    
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
