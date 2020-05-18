import React from 'react';
import { Row , Col , Card } from "react-bootstrap";
import iconoNoFavorito from '../nofavorito.svg'

const ListadoViajes = () => {

    return(

        <Row>
            
            <Col md={4} lg={3} xl={2}>

                <Card>

                    <Card.Body>

                        <a className="nav-link p-0 text-right" href="#">
                            <img style={{height : "1rem" }}src={iconoNoFavorito}></img>
                        </a>

                        <Card.Title>
                            Viaje 1
                        </Card.Title>
                        <img src="https://d2idryjws00qar.cloudfront.net/aiv/gra/image/home/carrousel-home-villa-gesell-bs-as.png" className="card-img-top">

                        </img>
                    </Card.Body>

                    <Card.Footer>
                        <p>$220</p>
                    </Card.Footer>
                    

                </Card>

            </Col>


        </Row>

    );

}

export default ListadoViajes;