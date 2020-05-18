import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoCombi from "../logo.jpg";


function NavigationBar() {

    return (

        <Navbar  variant="dark"  style={{backgroundColor: "#563d7c"}} expand="lg" className="mb-4">
            
            <Navbar.Brand href="#home" >
                
                <img style={{height : "4rem" }} src={logoCombi} alt="logo"></img>
                <Navbar.Text className="ml-2">Combi App</Navbar.Text>
                
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
            
                <Nav className="ml-auto">

                    <Nav.Link>Mis reservas</Nav.Link>

                    <Nav.Link>Favoritos</Nav.Link>

                    <NavDropdown alignRight title="Pablo">
                        <NavDropdown.Item>Mi cuenta</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item>Cerrar sesion</NavDropdown.Item>
                    </NavDropdown>

                </Nav>

            </Navbar.Collapse>
        </Navbar>

    );

}

export default NavigationBar;