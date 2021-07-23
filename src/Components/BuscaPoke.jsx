import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';



function BuscaPoke (productos) {

    return (
        <div>
            <Card Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title> Pokemon </Card.Title>
                <Card.Text> Descripción </Card.Text>
                <p>{productos.nombre}</p>
            </Card.Body>
            </Card>   
        </div>
    );  
}
export default BuscaPoke;



/**   
function Items () {


 const [namePoke, setPoke] = useState([]);
    const url = "https://pokeapi.co/api/v2/pokemon/";
  
    const getPoke = () => {
        fetch({url} + {namePoke})
        .then((res) => res.json())
        .then((data) => setPoke(data.results));
    };
  
    useEffect(() => {
      getPoke();
    }, [onsubmit]);

    return (
        <div>
            <Card Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title> Pokemon {} </Card.Title>
                <Card.Text> Descripción </Card.Text>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Busca tu Poke" />
                    </Form.Group>
                    <Button variant="primary">
                        Buscar
                    </Button>
                    </Form>
            </Card.Body>
            </Card>   
        </div>
    );  
}

export default Items;*/