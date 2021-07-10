import React, { useState } from 'react';
import {Button} from 'react-bootstrap';

function ItemCount ({stock, initial}) {

    const [cantidad, setCantidad] = useState (initial)
    const sumar =()=> setCantidad(cantidad + 1) 
    const restar =()=> setCantidad(cantidad - 1) 

    return (
        <div>
            <Button onClick={restar} disabled={cantidad === initial}>-</Button>
            <i>{cantidad}</i>
            <Button onClick={sumar} disabled={cantidad === stock}>+</Button>    
        </div>
    );  
}

export default ItemCount;