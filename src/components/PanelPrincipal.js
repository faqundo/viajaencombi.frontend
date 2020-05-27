import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormSearch from './FormSearch';
import SliderForm from './SliderForm';
import terminal1 from '../images/banner-home-traslado-empresas.webp';
import terminal2 from '../images/pasaje-micro-en-efectivo.webp';
import terminal3 from '../images/cdp-banner-653x440-eticket-op.webp';
import terminal4 from '../images/pasajes-de-micro-en-cuotas-sin-interes-min.webp';

const PanelPrincipal = (props) => {


    const handleOrigenBuscadoChange = (terminoBuscado) =>{
        
        props.onSearchOrigen(terminoBuscado);
    }

    return (
        <Container  >
            <Form.Group >


                <Row className="my-3 justify-content-center " >

                    <Col  xs={6} md={5} lg={6} className="my-3 justify-content-center">
                    
                        <FormSearch onSearchOrigen={handleOrigenBuscadoChange} />

                    </Col>

                    <Col  xs={6} md={6} lg={6} className="my-3 justify-content-center">
                        <SliderForm  
                            slider1={terminal1}
                            slider2={terminal2}
                            slider3={terminal3}
                            slider4={terminal4}
                            
                        />
                    </Col>

                </Row>
            </Form.Group>
        </Container>

    )


}

export default PanelPrincipal;

