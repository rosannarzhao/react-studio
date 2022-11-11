// TODO: create a component that displays a single bakery item
import React from 'react';

export default function Cart(props) {
    const {cartItems, onAddItem} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

    return(
        <div>
            <h2> My Cart </h2>
            <div>
            {cartItems.length === 0 && <div> Your cart is empty! </div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div> {item.name} </div>
                    <div className="text-right"> ${item.price.toFixed(2)} </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <div className="row"> 
                    <div className="col-2"> Total: </div>
                    <div className="col-1 text-right"> ${itemsPrice.toFixed(2)}</div>
                </div>
            )}
        </div>
    );
}