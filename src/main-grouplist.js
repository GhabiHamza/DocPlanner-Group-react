import React from 'react';
import MainGroup from './main-group';


const MainGroupList=({z})=>{
    return(<div>
        <div className='main-group  d-flex'>
    <div className='row  '>
        <div className='col-lg-6'>
        <h1 className='titre-main-group'>
             The world's
             biggest healthcare platform</h1>
             <p style={{color:'gray'}}>
             We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.
             </p> 
             </div>
             </div>  
    
                 
                 <div className='d-flex flex-wrap justify-content-between'>
     {z.map((el,index)=><MainGroup key={index} y={el}/>)}
     </div>
     </div>
     </div>
    
     
     
    );
    
}
     export default MainGroupList;