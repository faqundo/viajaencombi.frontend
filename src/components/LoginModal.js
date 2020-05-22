import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default (props) => {



    const handleLoginClick = () => {
        
        let url = 'http://localhost:8888/auth'

        let params = {
                        user :'pepe',
                        password:'123456'
                     };

        fetch (url ,{
                        method:'POST',
                        credentials :'include',
                        body: JSON.stringify(params),
                        headers : {
                                    'Content-Type' : 'application/json'
                                  }
                    }
        ).then(response => response.json())
         .then(data => {
            console.log(data);
         });
    }

    return (
        <Modal show={props.show} onHide={props.handleHide}>
            <Modal.Header closeButton>
                <Modal.Title>Iniciar sesión</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <Form.Group>

                    <Form.Label>Nombre de usuario</Form.Label>
                    <Form.Control type='text' />

                </Form.Group>

                <Form.Group>

                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type='password' />

                </Form.Group>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary"
                    onClick={props.handleHide} 
                >
                    Cancelar {/*onclick - función como props en NavigationBar que se ejecuta al hacer click en cancelar*/}
            </Button>
                <Button variant="primary"
                    onClick={handleLoginClick} 
                >
                    Aceptar {/*onclick recibe una función*/}
             </Button>
            </Modal.Footer>
        </Modal>
    )
}