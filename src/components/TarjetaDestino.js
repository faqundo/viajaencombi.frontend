import React from 'react';
import { Col, Card } from "react-bootstrap";
import iconoNoFavorito from '../nofavorito.svg'


export default (props) =>

    <Col md={4} lg={3} xl={2} className="mb-2 text-center align-items-stretch justify-content-center">

        <Card>

            <Card.Body>

                <a className="nav-link p-0 text-right" href="#">
                    <img style={{ height: "1rem" }} src={iconoNoFavorito} alt="icono favorito"></img>
                </a>

                <a className="nav-link p-0 mt-1" href=" #">
                    <Card.Title style={{ fontSize: "1rem" }}>
                        {props.destino}
             </Card.Title>

                    <img
                        src={props.imagen} className="card-img-top" alt="imagen descriptiva destino">
                    </img>
                </a>
            </Card.Body>

            <Card.Footer>
                <small className="text-muted">{props.precio}</small>
            </Card.Footer>


        </Card>

    </Col>