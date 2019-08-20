import React from 'react';
import Image from './image-docplanner.png';
function Introduction(){
    return (
        <div className=" container paragraph-doc">
          <img className="img" src={Image}/>
          <h1 className="h1-intro">Making the healthCare experience more human </h1>
          <div className="p-intro">
          <p className="p1">We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>
          <p className="p1">We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
          </div>

    </div>)
    
 }
 
 export default Introduction;
