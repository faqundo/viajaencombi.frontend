import React, { useState } from 'react';
import {Table , Tabs, Tab} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


export default (props) => {

    const [key, setKey] = useState('ultimosPasajes');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="ultimosPasajes" title="Ultimos Pasajes">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Destino</th>
                            <th>Pasaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>22/03/2020</td>
                            <td>Ezeiza - Obelisco</td>
                            <td>
                                <a href="/">
                                    <FontAwesomeIcon icon={faDownload} />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>25/03/2020</td>
                            <td>Pilar - Obelisco</td>
                            <td>
                                <a href="/">
                                    <FontAwesomeIcon icon={faDownload} />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>05/05/2020</td>
                            <td>Obelisco- Ezeiza</td>
                            <td>
                                <a href="/">
                                    <FontAwesomeIcon icon={faDownload} />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Tab>
            <Tab eventKey="historico" title="Historico">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Destino</th>
                            <th>Pasaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>22/03/2020</td>
                            <td>Ezeiza - Obelisco</td>
                            <td>
                                <a href="/">
                                    <FontAwesomeIcon icon={faDownload} />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>25/03/2020</td>
                            <td>Pilar - Obelisco</td>
                            <td>
                                <a href="/">
                                    <FontAwesomeIcon icon={faDownload} />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>05/05/2020</td>
                            <td>Obelisco- Ezeiza</td>
                            <td>
                                <a href="/">
                                    <FontAwesomeIcon icon={faDownload} />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>05/05/2020</td>
                            <td>Obelisco- Ezeiza</td>
                            <td>
                                <a href="/">
                                    <FontAwesomeIcon icon={faDownload} />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>05/05/2020</td>
                            <td>Obelisco- Ezeiza</td>
                            <td>
                                <a href="/">
                                    <FontAwesomeIcon icon={faDownload} />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Tab>

        </Tabs>
    );
}
