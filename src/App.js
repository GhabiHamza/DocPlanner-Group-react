import React from 'react';
import './App.css';
import Exemple from './Nav.js';
import Intro from './Paragraph.js';
import Image from './screen-marketplace.png';
import Image1 from './screen-saas.png';
import Card2 from './card1List';
import LinkGroup from './link';
import MainGroupList from './main-grouplist.js';
import Flag from './flag.png';
import Visits from './visits.png';
import Doctors from './doctors.png';
import Patients from './patients.png';
import Item from './item';
import Warsaw from './warsaw.png';
import Barcelona from './barcelona.png';
import Istanbul from './istanbul.png';
import Rome from './rome.png';
import MexicoCity from './mexico-city.png';
import Curitiba from './curitiba.png';
import Item2List from './item2list';
import Footer from './footer';
const tabslist=[{titre:'For patients',titre1:'Find a doctor, book a visit and solve any health-related doubt' , image:Image,show:true, color:'aqua'},
{titre:'For doctors',titre1:'Save time managing visits and cut no-shows by half',image:Image1,show:false, color:'#3d83df'}]
const tabslist2=[{image:Flag,titre:'Leader in 10 countries', parag:'Poland, Turkey, Spain, Italy, Czech, Republic, Mexico, Brazil, Colombia, Argentina and Chile'},
                  {image:Visits,titre:'1.5 million appointments', parag:'1.5 million appointments'}, {image:Doctors,titre:'30 million unique patients', parag:'visit us every month'},{image:Patients,titre:'2 million active doctors', parag:'trust in our solutions'}]

const tabslist3=[{image:Warsaw, link:'Warsaw', button:'see openings'},{image:Barcelona, link:'Barcelone', button:'see openings'},{image:Istanbul, link:'Istanbul', button:'see openings'},
                 {image:Rome, link:'Rome', button:'see openings'},{image:MexicoCity, link:'Mexico City', button:'see openings'},{image:Curitiba, link:'Curitiba', button:'see openings'}]
function App() {
  return (
    <div className="App">
      <Exemple/>
      <Intro/>
      <Card2 x={tabslist}/>
      <LinkGroup/>
      <MainGroupList z={tabslist2}/>
      <Item/>
      <Item2List p={tabslist3}/>
      <Footer/>
      
      
      
    </div>
  );
}

export default App;
