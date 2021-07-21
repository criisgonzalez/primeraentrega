import React, {useState} from 'react';
// import {} from 'react-bootstrap';
import Items from "../Items/Items";

const servicios = [
    
    {
        id:"1",
        fotoUrl: "https://queautocompro.com/wp-content/uploads/2013/07/2009_Fit_Sport_101-1024x682.jpg",
        nombre:"1nombre",
        descripcion: "1descripcion",
    },
    {
        id:"2",
        fotoUrl: "https://queautocompro.com/wp-content/uploads/2013/07/2009_Fit_Sport_101-1024x682.jpg",
        nombre:"2nombre",
        descripcion: "2descripcion",
    }
]

const ItemListContainer = (prop) => {
        
    //const producto = mejorProducto.producto;
    const [listItems, setListItems] = useState([])
    

    const getItems = () => {
        
        return new Promise ((resolve, reject) => {setTimeout(() => {resolve(servicios)}, 1000)})
        
    }

    getItems(servicios)
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

