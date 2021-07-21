import React, {useState} from 'react';
import {} from 'react-bootstrap';
import { servicios } from "../data";

const ItemListContainer = (mejorProducto, prop) => {
        
    //const producto = mejorProducto.producto;
    const [listItems, setListItems] = useState([])
    

    const getItems = () => {
        
        return new Promise ((resolve, reject) => {setTimeout(() => {resolve(servicios)}, 2000)})
        
    }

    getItems()
    .then((resolve) => setListItems(resolve)) 
    
    
    return (
        <div className="listItemContainer">
            <h2>Bienvenidos a la tienda de {prop.name}</h2> 

            <div>
               {listItems.map(productos => (
                    <div>
                    <Items productos={productos} key={productos.id} />
                   </div>

               ))} 
            </div>

        </div>
        );  
}

export default ItemListContainer;

