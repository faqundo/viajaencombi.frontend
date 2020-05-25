import React , {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default (props) => {



    const handleLoginClick = () => {
        
        let url = 'http://localhost:8888/auth'

        let params = {
                        user :nombreUsuario,
                        password:password
                     };

        fetch (url ,{
                        method:'INSERT',
                        credentials :'include',
                        body: JSON.stringify(params),
                        headers : {
                                    'Content-Type' : 'application/json'
                                  }
                    }
        ).then(response => response.json())
         .then(data => {
            if (data.status === 'ok'){
                props.handleLoginSuccess(data.loggedUser);
                props.handleHide();

            }else{
                alert(data.message);
            }
         });
    }

    const [nombreUsuario , setNombreUsuario] = useState('');
    const [password , setPassword] = useState('');

    const handleUserNameChange = (event) =>{
        setNombreUsuario( event.target.value );
    }

    const handlePasswordChange =(event) =>{
        setPassword (event.target.value);
        
    }
    
    


    return (
        <Modal show={props.show} onHide={props.handleHide}>
            <Modal.Header closeButton>
                <Modal.Title>Iniciar sesión</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                
                <Form.Group>

                    <Form.Label>Correo electrónico (Usuario) </Form.Label>
                    <Form.Control type='email' 
                                  value={nombreUsuario} 
                                  onChange={handleUserNameChange}
                                  placeholder="example@email.com"/>

                </Form.Group>

                <Form.Group>

                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type='password'
                                  value={password}
                                  />
                    <Form.Label>Confirmar contraseña</Form.Label>
                    <Form.Control type='password'
                                  value={password}
                                  />

                </Form.Group>

            </Modal.Body>

            <Modal.Footer >
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