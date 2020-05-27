import React from 'react';
import { Row, Button, Col, Card } from "react-bootstrap";
import iconoNoFavorito from '../nofavorito.svg';
import iconoFavorito from '../favorito.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default (props) =>{

    const handleFavClick = () => {
        props.onChangeFavStatus(props.isFav, props.id , props.user.id)
    }

    return(


    <Col md={4} lg={3} xl={2} className="mb-2 text-center align-items-stretch justify-content-center">

        <Card>

            <Card.Body>

                {props.type === "destinos" && props.user &&
                    <a className="nav-link p-0 text-right">
                        <img style={{ height: "1rem" , cursor : "pointer"}} 
                             src={props.isFav ? iconoFavorito : iconoNoFavorito} 
                             alt="icono favorito"
                             onClick={handleFavClick}
                        />
                    </a>
                }

                <Link to={"/destinos/" + props.id} className="nav-link p-0 mt-1" href="/">
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

            {props.type === 'misdestinos' &&

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

            {props.type === 'favoritos' &&

                <Row className="my-2">
                    <Col>
                        Favoritos
                    </Col>
                </Row>

            }


        </Card>

    </Col>
    )
}