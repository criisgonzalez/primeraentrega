import React from 'react';
import {} from 'react-bootstrap';

const ItemListContainer = (prop) => {
        return (
        <div className="listItemContainer">
            <h2>Bienvenidos a la tienda de {prop.name}</h2> 
        </div>
        );  
        }

export default ItemListContainer;