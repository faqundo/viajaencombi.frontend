import React from "react";
import { Row , Col , Form , Button } from "react-bootstrap";


export default () =>

    <Row className="my-3 justify-content-center">

        <Col xs={12} md={6} lg={5}>

            <Form>
                <Form.Group>
                    <Form.Row>

                        <Col sm={10} xs={9}>
                            <Form.Control type="text"/>
                        </Col>

                        <Col sm={2} xs={3}>
                            <Button>
                                Buscar
                            </Button>
                        </Col>

                    </Form.Row>
                </Form.Group>
            </Form>
        
        </Col>

    </Row>

