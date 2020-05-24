import React from 'react';
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom';
import ayuda1 from '../images/ayuda/ayuda1.png';
import ayuda2 from '../images/ayuda/ayuda2.png';
import ayuda3 from '../images/ayuda/ayuda3.png';
import ayuda4 from '../images/ayuda/ayuda4.png';
import ayuda5 from '../images/ayuda/ayuda5.png';
import ayuda6 from '../images/ayuda/ayuda6.png';


export default () =>

    <div className="ayuda">
        <div className="container-ayuda categorias">
            <h1 className="grl-title">BUSCAR POR CATEGORÍA</h1>

            <Link className="a" to="/ayuda/devolucion-de-pasajes" href="./devolucion-de-pasajes">
                <Card className="card card-hover" border="info" style={{ width: 'calc(76%/3)' }}>
                    <Card.Body>
                        <img style={{ height: "4rem" }} src={ayuda1} alt="DEVOLUCIÓN DE PASAJES" />
                        <Card.Title className="title">DEVOLUCIÓN DE PASAJES</Card.Title>
                        <Card.Text className="descripcion">Conocé cómo devolver tu pasaje</Card.Text>
                    </Card.Body>
                </Card>
            </Link>

            <a href="./viaje-de-menores">
                <Card className="card card-hover" border="primary" style={{ width: 'calc(76%/3)' }}>
                    <Card.Body>
                        <img style={{ height: "4rem" }} src={ayuda2} alt="VIAJE DE MENORES" />
                        <Card.Title className="title">VIAJE DE MENORES</Card.Title>
                        <Card.Text className="descripcion">Informate para viajar con menores a cargo</Card.Text>
                    </Card.Body>

                </Card>
            </a>
            <a href="./como-comprar">
                <Card className="card card-hover" border="info" style={{ width: 'calc(76%/3)' }}>
                    <Card.Body>
                        <img style={{ height: "4rem" }} src={ayuda3} alt="¿CÓMO COMPRAR MIS PASAJES?" />
                        <Card.Title className="title">¿CÓMO COMPRAR MIS PASAJES?</Card.Title>
                        <Card.Text className="descripcion">Cómo realizar tu compra?</Card.Text>
                    </Card.Body>

                </Card>
            </a>
            <a href="./formas-de-pago">
                <Card className="card card-hover" border="info" style={{ width: 'calc(76%/3)' }}>
                    <Card.Body>
                        <img style={{ height: "4rem" }} src={ayuda4} alt="FORMAS DE PAGO" />
                        <Card.Title className="title">FORMAS DE PAGO</Card.Title>
                        <Card.Text className="descripcion">Encontrá todos los medios de pago </Card.Text>
                    </Card.Body>

                </Card>
            </a>
            <a href="./beneficios-y-promociones">
                <Card className="card card-hover" border="info" style={{ width: 'calc(76%/3)' }}>
                    <Card.Body>
                        <img style={{ height: "4rem" }} src={ayuda5} alt="BENEFICIOS Y PROMOCIONES" />
                        <Card.Title className="title">BENEFICIOS Y PROMOCIONES</Card.Title>
                        <Card.Text className="descripcion">Descubrí descuentos exclusivos</Card.Text>
                    </Card.Body>

                </Card>
            </a>
            <a href="./informacion-util-para-tu-viaje">
                <Card className="card card-hover" border="info" style={{ width: 'calc(76%/3)' }}>
                    <Card.Body>
                        <img style={{ height: "4rem" }} src={ayuda6}alt="INFORMACIÓN ÚTIL PARA TU VIAJE" />
                        <Card.Title className="title">INFORMACIÓN ÚTIL PARA TU VIAJE</Card.Title>
                        <Card.Text className="descripcion">Recomendaciones para tu viaje</Card.Text>
                    </Card.Body>

                </Card>
            </a>
        </div>
    </div>