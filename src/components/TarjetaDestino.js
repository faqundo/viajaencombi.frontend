import React from 'react';
import { Row ,Button ,  Col, Card } from "react-bootstrap";
import iconoNoFavorito from '../nofavorito.svg';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faEdit , faTrash} from '@fortawesome/free-solid-svg-icons';

export default (props) =>

    <Col md={4} lg={3} xl={2} className="mb-2 text-center align-items-stretch justify-content-center">

        <Card>

            <Card.Body>

                {props.type === "destinos" &&
                <a className="nav-link p-0 text-right" href="www.google.com">
                    <img style={{ height: "1rem" }} src={iconoNoFavorito} alt="icono favorito"></img>
                </a>
                }

                <Link to={"/destinos/"+props.id} className="nav-link p-0 mt-1" href="/">
                    <Card.Title style={{ fontSize: "1rem" }}>
                        {props.destino}
                    </Card.Title>

                    <img
                        src={props.imagen} className="card-img-top" alt="imagen descriptiva destino">
                    </img>
                </Link>
            </Card.Body>

            <Card.Footer>
                <small className="text-muted">{props.precio}</small>
            </Card.Footer>

            {props.type ==='misdestinos' &&

                <Row className="my-2">
                    <Col>
                        <Button variant="light">
                            <FontAwesomeIcon icon={faEdit} />
                        </Button>
                        <Button variant="light">
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                    </Col>
                </Row>

            }


        </Card>

    </Col>