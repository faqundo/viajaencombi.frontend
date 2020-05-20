import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default (props) =>

    <Modal show={props.show} onHide={props.handleHide}>
        <Modal.Header closeButton>
            <Modal.Title>Iniciar sesión</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>Aca iría el Form ...</p>
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