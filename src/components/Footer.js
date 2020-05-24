import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import MercadoPago from '../images/home/footer-logo-mercado-pago.jpg';
import Equifax from '../images/home/footer-logo-equifax.jpg';
import PDP from '../images/home/footer-logo-pdp.jpg';
import CACE from '../images/home/footer-logo-cace.jpg';
import CAT from '../images/home/footer-logo-cat.jpg';
import AVIABUE from '../images/home/footer-logo-aviabue.jpg';
import CertiSur from '../images/home/img-footer-certisur.png';
import GeoTrust from '../images/home/img-footer-geotrust.png';
import { Link } from 'react-router-dom';


export default () =>

    <footer style={{ backgroundColor: '#666' }}>
        <Container>
            <Row >
                <Col sm={6} md={6} xs={2} >
                    <ul className="list-unstyled footer-menu-list">
                        <>
                            <li><Link to={"/ayuda"} >Ayuda</Link></li>
                            <li><a href="/promociones">Promociones</a></li>
                            <li><a href="https://www.centraldepasajes.com.ar/cdp/empresas.htm">Empresas</a></li>
                            <li><a href="https://www.centraldepasajes.com.ar/cdp/beneficios.htm">Beneficios</a></li>
                            <li><a href="https://www.centraldepasajes.com.ar/cdp/contacto.htm">Contacto</a></li>
                        </>
                    </ul>
                </Col>
                <Col sm={6} md={3} xs={0} >
                    <ul className="list-unstyled footer-menu-list">
                        <li><a href="https://www.centraldepasajes.com.ar/cdp/quienes-somos.htm">Quiénes somos</a></li>
                        <li><a href="https://www.centraldepasajes.com.ar/cdp/condiciones-generales.aspx">Condiciones Generales</a></li>
                        <li><a href="https://www.centraldepasajes.com.ar/cdp/politicas-de-privacidad.htm">Políticas de Privacidad</a></li>
                        <li><a href="https://www.centraldepasajes.com.ar/cdp/bases-y-condiciones-promocion-clarin-365.aspx">Bases y Condiciones Promociones</a></li>
                    </ul>
                </Col>
                <Col sm={12} md={7} >
                    <div className="footer-logos">
                        <a href="https://www.mercadolibre.com.ar/pagar-online-con-mercadopago" rel="nofollow">
                            <img src={MercadoPago} alt="MercadoPago" className="img-responsive footer-logo" />
                        </a>
                        <a href="http://www.equifax.com/about_equifax/informacion_comercial/es_ar" rel="nofollow">
                            <img src={Equifax} alt="Equifax" className="img-responsive footer-logo" />
                        </a>
                        <a href="http://www.jus.gob.ar/datos-personales.aspx/" rel="nofollow">
                            <img src={PDP} alt="PDP" className="img-responsive footer-logo" />
                        </a>
                        <a href="http://www.cace.org.ar/" rel="nofollow">
                            <img src={CACE} alt="CACE" className="img-responsive footer-logo" />
                        </a>
                        <a href="http://www.camaradeturismo.org.ar/" rel="nofollow">
                            <img src={CAT} alt="CAT" className="img-responsive footer-logo" />
                        </a>
                        <a href="http://aviabue.org.ar/socios.php" rel="nofollow">
                            <img src={AVIABUE} alt="AVIABUE" className="img-responsive footer-logo" />
                        </a>
                    </div>
                    <div className="footer-seals">
                        <a href="/" rel="nofollow">
                            <img src={CertiSur} alt="CertiSur - Sitio Seguro" className="img-responsive footer-seal" />
                        </a>
                        <a href="/" rel="nofollow">
                            <img src={GeoTrust} alt="GeoTrust Secured" className="img-responsive footer-seal" />
                        </a>

                    </div>
                </Col>
            </Row>

        </Container>
        <div className="copy-text" style={{ color: "white" }}>
            <p>AIV Central de Pasajes EVT · Legajo 12457</p>
        </div>
    </footer>

