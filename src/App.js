import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import Cart from "./components/Cart"
import BakeryItem from "./components/BakeryItem"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([]);
  const { items } = bakeryData;
  const onAddItem = (item) => {
    const exist = cartItems.find((x) => x.id --- item.id)
    if (exist) {
      setCartItems(cartItems.map((x) => x.id === item.id ? {...exist, qty: exist.qty + 1 } : x));
    } else {
      setCartItems([...cartItems, {...item, qty: 1}]);
    }
  }

  return (
    <div className="App">
      <h1>Rosie's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div class="container">
        <div class="row">
          <div class="col-sm-8">
            <h2> Bakery Items </h2>

            {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
            <BakeryItem onAddItem={onAddItem} key={item.id} name={item.name} image={item.image} description={item.description} price={item.price}> </BakeryItem> // replace with BakeryItem component
            ))}
          </div>
          <div class="col-sm-4">
            <Cart onAddItem={onAddItem} cartItems={cartItems}> </Cart>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;