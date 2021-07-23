import React from 'react';
import {Card} from 'react-bootstrap';
import ItemCount from "../ItemCount/ItemCount";
// import { } from 'react';

const Items = ({ productos }) => {

        return (
            <div>
                <Card Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Descripción
                    </Card.Text>
                    <p>{productos.nombre}</p>
                    
                    <ItemCount initial={1} stock={5} />
                </Card.Body>
                </Card>   
            </div>
        );  
    };


    export default Items; 

// foto <img src={productos.fotoUrl} alt="foto"></img>
// 