import React from 'react';
import Item2 from './item2';


const Item2List = ({p})=>{
    return (
        <div className='container d-flex justify-content-around flex-wrap'>
        {p.map((el,index)=><Item2 key={index} x={el}/>)}

    </div>
    );
}
export default Item2List;
