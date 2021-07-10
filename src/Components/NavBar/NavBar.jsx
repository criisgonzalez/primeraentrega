import React from 'react';
import CartWidget from "../Cart/CartWidget";
// import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';


const NavbarApp = () => {
return (
<div className="navbar-style">
    <Navbar className="color-nav" expand="lg">
        
        <Nav.Link>Inicio</Nav.Link>
        <Nav.Link>¿Quienes Somos?</Nav.Link>
        <Nav.Link>Servicios</Nav.Link>
        <Nav.Link>
            <CartWidget/>
        </Nav.Link>
    </Navbar>
    
</div>
);  
}

export default NavbarApp;

