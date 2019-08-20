import React from 'react';
import { Card, CardBody,CardImg, CardLink,Button
    } from 'reactstrap';

const Item2 = ({x}) => {
  return (
    <div className='item2'>
      <Card>
        <CardImg className='img-item2' top  src={x.image} alt="Card image cap" />
        <CardBody className='d-flex justify-content-between'>
          <CardLink href="#">{x.link}</CardLink>
          <Button   type="button" className='btn' style={{backgroundColor:'blue'}}>{x.button}</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Item2;