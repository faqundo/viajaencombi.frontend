import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default (props) =>

    <Modal show={props.show} onHide={props.handleHide}>
        <Modal.Header closeButton>
            <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            
            <Form.Group>

                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type='text'/>
                
            </Form.Group>

            <Form.Group>

                <Form.Label>Contraseña</Form.Label>
                <Form.Control type='password'/>
                
            </Form.Group>



        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary"
                    onClick={props.handleHide}
            >
                Cancelar
            </Button>
            <Button variant="primary">
                Aceptar
             </Button>
        </Modal.Footer>
    </Modal>