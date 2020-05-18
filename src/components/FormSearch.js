import React from "react";
import { Form, Button,FormGroup  } from "react-bootstrap";



export default () =>


    <Form className="p-4" style={{ backgroundColor: "#01C8B3" , borderRadius: 5 }} >
        <FormGroup>
            <Form.Label for="exampleEmail">Buscá tu pasaje de Combi</Form.Label>
           
        </FormGroup>


        <Form.Group controlId="formBasicEmail">
            <Form.Label>Origen</Form.Label>
            <Form.Control type="email" placeholder="Ingrese lugar de partida" />

        </Form.Group>

        <Form.Group >
            <Form.Label>Destino</Form.Label>
            <Form.Control placeholder="Ingrese destino" />
        </Form.Group>

        <Form.Group sm={2} xs={3}>
            <Button>
                Buscar
            </Button>
        </Form.Group>
    </Form>



