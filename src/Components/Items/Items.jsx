import React from 'react';
import {Card} from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";



    function Items ({productos}) {

        return (
            <div>
                <Card Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Descripción
                    </Card.Text>
                    <img src={productos.fotoUrl} alt="foto"></img>
                    <p>{productos.nombre}</p>
                    <ItemCount initial={1} stock={5} />
                </Card.Body>
                </Card>   
            </div>
        );  
    }

export default Items;