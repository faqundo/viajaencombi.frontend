import React from "react";
import { Col, Form, Button , } from "react-bootstrap";



export default () =>


    <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Origen</Form.Label>
            <Form.Control type="email" placeholder="Ingrese lugar de partida" />
            
        </Form.Group>

        <Form.Group >
            <Form.Label>Destino</Form.Label>
            <Form.Control  placeholder="Ingrese destino" />
        </Form.Group>
        
        <Col sm={2} xs={3}>
            <Button>
                Buscar
            </Button>
        </Col>
    </Form>



