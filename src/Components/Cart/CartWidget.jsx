import React from 'react'
import shoppingcart from "../Cart/carrito.svg"

const CartWidget = () => {
return (
<div className="navbar-item">
    Carrito <img src={shoppingcart} className="carrito" alt="carrito"/>
</div>
);  
}

export default CartWidget;