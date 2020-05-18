import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FormSearch from './FormSearch';
import SliderForm from './SliderForm';
import terminal1 from '../images/terminal1.jpg';
import terminal2 from '../images/terminal2.jpg';
import terminal3 from '../images/terminal3.jpg';
import terminal4 from '../images/terminal4.jpg';

const PanelPrincipal = (props) => {

    return (
        <Container  >
            <Row clasName="my-3 justify-content-center ">

                <Col xs={6} md={5} lg={6} clasName="my-3 justify-content-center">

                    <FormSearch />

                </Col>

                <Col xs={6} md={6} lg={6} clasName="my-3 justify-content-center">
                    <SliderForm slider1={terminal1}
                        slider2={terminal2}
                        slider3={terminal3}
                        slider4={terminal4}
                    />
                </Col>

            </Row>
        </Container>

    )


}

export default PanelPrincipal;

