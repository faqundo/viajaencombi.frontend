import React from 'react';
import { Card } from "react-bootstrap";

export default () =>

    <div className="ayuda">
        <div className="container-ayuda categorias">
            <h1 className="grl-title">BUSCAR POR CATEGORÍA</h1>

            <a href="./devolucion-de-pasajes">
                <Card className="card card-hover" border="info" style={{ width: 'calc(76%/3)' }}>
                    <Card.Body>
                        <img src="Content/Images/ayuda1.png" alt="DEVOLUCIÓN DE PASAJES" />
                        <Card.Title className="title">DEVOLUCIÓN DE PASAJES</Card.Title>
                        <Card.Text className="descripcion">Conocé cómo devolver tu pasaje</Card.Text>
                    </Card.Body>
                </Card>
            </a>

            <a href="./viaje-de-menores">
                <Card className="card card-hover" border="primary" style={{ width: 'calc(76%/3)' }}>
                    <Card.Body>
                        <img src="Content/Images/ayuda2.png" alt="VIAJE DE MENORES" />
                        <Card.Title className="title">VIAJE DE MENORES</Card.Title>
                        <Card.Text className="descripcion">Informate sobre la nueva reglamentación vigente para viajar con menores a cargo</Card.Text>
                    </Card.Body>

                </Card>
            </a>
            <a href="./como-comprar-en-central-de-pasajes">
                <Card className="card card-hover" border="info" style={{ width: 'calc(76%/3)' }}>
                    <Card.Body>
                        <img src="Content/Images/ayuda3.png" alt="¿CÓMO COMPRAR EN CENTRAL DE PASAJES?" />
                        <Card.Title className="title">¿CÓMO COMPRAR EN CENTRAL DE PASAJES?</Card.Title>
                        <Card.Text className="descripcion">Despejá todas tus dudas sobre cómo realizar tu compra</Card.Text>
                    </Card.Body>

                </Card>
            </a>
            <a href="./formas-de-pago">
                <Card className="card card-hover" border="info" style={{ width: 'calc(76%/3)' }}>
                    <Card.Body>
                        <img src="Content/Images/ayuda4.png" alt="FORMAS DE PAGO" />
                        <Card.Title className="title">FORMAS DE PAGO</Card.Title>
                        <Card.Text className="descripcion">Encontrá todos los medios de pago habilitados</Card.Text>
                    </Card.Body>

                </Card>
            </a>
            <a href="./beneficios-y-promociones">
                <Card className="card card-hover" border="info" style={{ width: 'calc(76%/3)' }}>
                    <Card.Body>
                        <img src="Content/Images/ayuda5.png" alt="BENEFICIOS Y PROMOCIONES" />
                        <Card.Title className="title">BENEFICIOS Y PROMOCIONES</Card.Title>
                        <Card.Text className="descripcion">Descubrí descuentos exclusivos</Card.Text>
                    </Card.Body>

                </Card>
            </a>
            <a href="./informacion-util-para-tu-viaje">
                <Card className="card card-hover" border="info" style={{ width: 'calc(76%/3)' }}>
                    <Card.Body>
                        <img src="Content/Images/ayuda6.png" alt="INFORMACIÓN ÚTIL PARA TU VIAJE" />
                        <Card.Title className="title">INFORMACIÓN ÚTIL PARA TU VIAJE</Card.Title>
                        <Card.Text className="descripcion">Conocé todas las recomendaciones para tu viaje</Card.Text>
                    </Card.Body>

                </Card>
            </a>
        </div>
    </div>