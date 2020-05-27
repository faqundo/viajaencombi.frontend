import React, { useState } from "react";
import { Form, Button, FormGroup, Row, Col } from "react-bootstrap";



export default (props) => {

    const [origenBuscado, setOrigenBuscado] = useState('');

    const handleOrigenBuscadoChange = (event) =>{

        let busqueda = event.target.value;

        setOrigenBuscado(busqueda);
        
        props.onSearchOrigen(busqueda);
    }

    return (
        <Form className="p-4" style={{ backgroundColor: "#01C8B3", borderRadius: 5 }} >
            <FormGroup>
                <Form.Label >Buscá tu pasaje de Combi</Form.Label>

            </FormGroup>


            <Form.Group controlId="formBasicEmail">
                <Form.Label>Origen</Form.Label>
                <Form.Control type="text"
                              placeholder="Ingrese lugar de partida"
                              value={origenBuscado} 
                              onChange={handleOrigenBuscadoChange}/>

            </Form.Group>

            <Form.Group >
                <Form.Label>Destino</Form.Label>
                <Form.Control type="search"
                              placeholder="Ingrese destino"
                              value="destinoBuscado" />
            </Form.Group>

            <fieldset>
                <Form.Group as={Row}>

                    <Col sm={10}>
                        <Form.Check
                            inline
                            type="radio"
                            label="Sólo ida"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                        />
                        <Form.Check
                            inline
                            type="radio"
                            label="Ida y vuelta"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                        />

                    </Col>
                </Form.Group>
            </fieldset>



            <Form.Group sm={2} xs={3}>
                <Button style={{ backgroundColor: "#7F0C78" }}>
                    Buscar
            </Button>
            </Form.Group>
        </Form>
    )
}

