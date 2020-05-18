import React from 'react';
import { Row , Col , Card } from "react-bootstrap";

const ListadoViajes = () => {

    return(

        <Row>
            
            <Col md={4} lg={3} xl={2}>

                <Card>

                    <Card.Body>
                        <Card.Title>
                            Viaje 1
                        </Card.Title>
                        <img src="" className="card-img-top">

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