import React, { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoCombi from "../logo4.png";
import LoginModal from "./LoginModal";

import fondoNav from "../images/clarin-365-header.png";
import { Link } from 'react-router-dom';
import logoAyuda from '../images/ayuda/logo-ayuda.png'

//colores principales:#563d7c o #7F0C78 o  #C87DEA , #6610f2 , #6f42c1
//colores secundarios: #36bbac , #666 , 

var sectionStyle = {
    backgroundImage: `url(${fondoNav})`
}

function NavigationBar(props) {

    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleHideLoginModal = () => {
        setShowLoginModal(false);
    }

    const handleShowLoginModal = () => {
        setShowLoginModal(true);
    };

    
    
    

    return (
        <>
            <Navbar variant="dark" style={sectionStyle} expand="lg" className="mb-4">
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
            </style>
                <Link to="/" className='navbar-brand'>

                    <img style={{ height: "4rem" }} src={logoCombi} alt="logo"></img>
                    <Navbar.Text className="ml-2" style={{ fontFamily: 'Cedarville Cursive', fontSize: "2rem" }}>
                        Viajá en combi . com
                    </Navbar.Text>

                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ml-auto">

                        {!props.user

                            ?
                            <>
                                <Button
                                    style={{ backgroundColor: "#7F0C78" }}
                                    variant="primary"
                                    onClick={handleShowLoginModal}
                                    size="md"
                                >
                                    Ingresá
                                </Button>
                                <Nav.Link
                                    variant="primary"
                                    onClick={handleShowLoginModal}
                                    size="md"
                                >
                                    Creá tu cuenta
                                </Nav.Link>
                                <Link to={"/ayuda"} className="nav-link">
                                    <img style={{ height: "2rem" }} src={logoAyuda} alt="logo"></img>
                                </Link>
                            </>
                            :
                            <>

                                <Link to={"/mispasajes"} className="nav-link">
                                    Mis pasajes
                                </Link>
                                <Link to={"/misdestinos"} className="nav-link">
                                    Mis destinos
                                </Link>


                                <NavDropdown alignRight title={props.user.nombre}>
                                    <NavDropdown.Item>
                                        <Link to="/mi-cuenta">Mi cuenta</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={props.handleLogout}>Cerrar sesion</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Navbar>

            <LoginModal show={showLoginModal}
                handleHide={handleHideLoginModal}
                handleLoginSuccess={props.handleLoginSuccess} />

            

        </>

    );

}

export default NavigationBar;