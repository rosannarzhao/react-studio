// TODO: create a component that displays a single bakery item
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import React from 'react';
// TODO: create a component that displays a single bakery item

function BakeryItem(props) {
    // TODO: use useState to create a state variable to hold the state of the cart
    /* add your cart state code here */
    const {onAddItem} = props;
  
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Card.Text>
            ${props.price}
          </Card.Text>
          <Button variant="primary" onClick={() => onAddItem(props)}>Add To Cart</Button>
        </Card.Body>
      </Card>

    );
  } 
  
  export default BakeryItem;