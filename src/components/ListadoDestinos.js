import React, { useState, useEffect } from 'react';
import Row from "react-bootstrap/Row";
import TarjetaDestino from './TarjetaDestino';



const ListadoDestinos = () => {

    const [destinos, setDestinos] = useState([])

    useEffect(() => {
        fetch('http://localhost:8888/destinos').then(
            response => response.json()
        ).then(
            data => {
                setDestinos(data);
            }
        );
    }

    )

    return (
        
        <Row className = "p-4" style = {{ backgroundColor: "#ECECEC" }} expand = "lg" >

        {
        
            destinos.map(destino => {
                return (
                    <TarjetaDestino 
                                    destino={destino.nombre}
                                    imagen={destino.imagen}
                                    precio={destino.precio}
                                    id={destino.id}
                    />


                )
            })
        }      

        </Row >

    );

}

export default ListadoDestinos;