import React, { useState, useEffect } from 'react';
import Row from "react-bootstrap/Row";
import Swal from 'sweetalert2';
import TarjetaDestino from './TarjetaDestino';




const ListadoDestinos = (props) => {

    const [destinos, setDestinos] = useState([])

    useEffect(() => {
        fetch('http://localhost:8888/destinos').then(
            response => response.json()
        ).then(
            data => {
                setDestinos(data);
            }
        );
    },[props.user]

    )

    const handleChangeFavStatus = (isFav, pubId , userId)=>{

        let url ="http://localhost:8888/favoritos";

        const formData = new FormData();

        formData.append('userId' , userId);
        formData.append('pubId', pubId);

        let method = isFav ? 'DELETE' : 'POST';

        fetch(url , {
            method,
            body : formData,
            credential: 'include'
        }).then(response => response.json())
          .then(data => {
            Swal.fire(
                {
                    text : data.message,
                    icon : 'success'
                })
          })

    }

    return (
        <>

            {props.type === 'favoritos' &&
                <h3>Favoritos</h3>
            }
            <Row className="p-4" style={{ backgroundColor: "#ECECEC" }} expand="lg" >

                {

                    destinos.map(destino => {
                        return (

                            <>

                                <TarjetaDestino
                                    destino={destino.nombre}
                                    imagen={destino.imagen}
                                    precio={destino.precio}
                                    id={destino.id}
                                    type={props.type}
                                    user={props.user}
                                    isFav={false}
                                    onChangeFavStatus = {handleChangeFavStatus}
                                />
                            </>

                        )
                    })
                }

            </Row >



        </>
    );

}

export default ListadoDestinos;