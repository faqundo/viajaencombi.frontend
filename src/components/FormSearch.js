import React from "react";
import { Form, Button, FormGroup } from "react-bootstrap";



export default () =>


    <Form className="p-4" style={{ backgroundColor: "#01C8B3", borderRadius: 5 }} >
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

        {['checkbox', 'radio'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
                <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`default ${type}`}
                />

                <Form.Check
                    disabled
                    type={type}
                    label={`disabled ${type}`}
                    id={`disabled-default-${type}`}
                />
            </div>
        ))}


        <Form.Group sm={2} xs={3}>
            <Button style={{ backgroundColor: "#7F0C78" }}>
                Buscar
            </Button>
        </Form.Group>
    </Form>



