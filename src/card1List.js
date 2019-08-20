import React from 'react';
import Card1 from './card1';


const Card2=({x})=>{
    return(<div className='main-card'>
    {x.map((el,index)=><Card1 className='img-card1'  key={index} tab={el}/>)}
</div>)
}
  

    
    


export default Card2;