import React from 'react';
import { Card, CardImg, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';


const MainGroup = ({y}) =>
      
      <Card className='card'style={{width:'35%'}}>
        <CardImg  className='img-main'style={{width:'61px'}}top  src={y.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{y.titre}</CardTitle>
          <CardSubtitle>{y.parag}</CardSubtitle>
        </CardBody>
      </Card>
      
    export default MainGroup;

         

     

     

    
