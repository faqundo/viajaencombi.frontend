import React , {useState,useEffect} from 'react';
import {Row,Col} from 'react-bootstrap';
import { useParams } from "react-router-dom";

export default () => {

    let {id} = useParams();

    let [destino ,setDestino ] = useState(null);

    useEffect (
        ()=>{
            fetch('http://localhost:8888/destinos/' +id).then(
                response => response.json()
            ).then (data => {
                setDestino(data);
                console.log(data);
            })
        },[]
    )

    return (
        
        destino && 
        <Row className="d-flex justify-content-center">
            <Col md={4} className="d-flex justify-content-center">
                <img src="http://localhost:8888/images/ezeiza.jpg" className="img-fluid"/>
            </Col>

            <Col md={4}>
                <h2>Nombre Destino</h2>
                <h3>Precio</h3>
            </Col>
        </Row>

    );
}

