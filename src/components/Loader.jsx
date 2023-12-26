import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Loader = () => {
  return (
    <>

<div style={{ gap:"5px", display:"grid" , gridTemplateColumns:"1.5fr 0.5fr 1fr", backgroundColor:"white" , position:"fixed" , top:"0",left:"0",right:"0" , bottom:"0", zIndex:999}}>
      
        <Skeleton  style={{height:"100vh"}}/>

        <Skeleton  style={{height:"100vh"}}/>

        <Skeleton  style={{height:"100vh"}}/>
</div>
    </>
  );
};

export default Loader;
