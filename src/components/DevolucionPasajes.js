import React from 'react';
import { Container, Card, Form , Button} from 'react-bootstrap';
import ayudaLogo from '../images/ayuda/ayuda1.png';
import {Link} from 'react-router-dom';

export default () =>
    
    <>

        <div class="ayuda">
            <div class="buscador">
                <Container class="container-ayuda">
                    <div class="search-title">
                        ¿En qué te podemos ayudar?
                    </div>
                    <Form class="campos" onsubmit="realizarBusqueda(); return false;">
                        <input type="text" name="origen" id="textBoxWordsSearch" placeholder="Escribí una pregunta o palabra sobre lo que buscás."/>
                        <Button class="btn" type="submit">
                             <a href="/">Buscar</a>
                        </Button>
                    </Form>
                </Container>
            </div>
            <div class="ayuda">
                <Container class="container-ayuda">
                        <ul class="breadcrumb">
                            <li><a href="https://www.centraldepasajes.com.ar">Inicio</a></li>
                            <li><a href="/ayuda/">Ayuda</a></li>
                            <li>Devolución de Pasajes</li>
                        </ul>
                        <div class="header">
                            <div class="icon-categoria">
                                <img style={{ height: "1rem" }} src={ayudaLogo} alt="DEVOLUCIÓN DE PASAJES" />
                            </div>
                            <h1 class="title categoria-title">DEVOLUCIÓN DE PASAJES</h1>
                        </div>
                        <div class="preguntas">
                            <a href="./devolucion-de-pasajes/puedo-cambiar-un-pasaje">
                                <Card >
                                    <div class="item">¿Puedo cambiar, modificar o transferir mi pasaje?</div>
                                </Card>
                            </a>
                            <a href="./devolucion-de-pasajes/puedo-devolver-un-pasaje">
                                <Card >
                                    <div class="item">¿Puedo devolver mi pasaje?</div>
                                </Card>
                            </a>
                            <a href="./devolucion-de-pasajes/como-devolver-un-pasaje">
                                <Card>
                                    <div class="item">¿Cómo devuelvo mi pasaje?</div>
                                </Card>
                            </a>
                        </div>
                </Container>
            </div>
        </div>
    </>