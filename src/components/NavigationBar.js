import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import logoCombi from "../logo.jpg";

function NavigationBar() {

    return (

        <Navbar  variant="dark"  style={{backgroundColor: "#563d7c"}} expand="lg">
            
            <Navbar.Brand href="#home" >
                
                <img style={{height : "4rem" }} src={logoCombi} alt="logo"></img>
                <Navbar.Text className="ml-2">Combi App</Navbar.Text>
                
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link>Mis reservas</Nav.Link>
                    <Nav.Link>Favoritos</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>

    );

}

export default NavigationBar;