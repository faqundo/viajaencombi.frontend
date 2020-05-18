import React from 'react';
import Row  from "react-bootstrap/Row";
import TarjetaDestino from './TarjetaDestino';


const ListadoViajes = () => {

    return(

        <Row className="m-4">
            
           <TarjetaDestino destino="Ezeiza"
                           imagen="https://www.buenosaires.gob.ar/sites/gcaba/files/styles/interna_pagina/public/_mg_0477.jpg"
                           precio="$200"
            />
           <TarjetaDestino destino="Adrogue"
                           imagen="https://i0.wp.com/laurbedigital.com.ar/noticias/wp-content/uploads/2017/12/20171221-brown1.jpg" 
                           precio="$220"
           />
           <TarjetaDestino destino="Lanus"
                           imagen="https://i0.wp.com/laurbedigital.com.ar/noticias/wp-content/uploads/2017/12/20171221-brown1.jpg" 
                           precio="$220"
           />
           <TarjetaDestino destino="Grand Bour"
                           imagen="https://i0.wp.com/laurbedigital.com.ar/noticias/wp-content/uploads/2017/12/20171221-brown1.jpg" 
                           precio="$300"
           />
           <TarjetaDestino destino="Pilar"
                           imagen="https://i0.wp.com/laurbedigital.com.ar/noticias/wp-content/uploads/2017/12/20171221-brown1.jpg" 
                           precio="$150"
           />
           <TarjetaDestino destino="Adrogue SUR"
                           imagen="https://i0.wp.com/laurbedigital.com.ar/noticias/wp-content/uploads/2017/12/20171221-brown1.jpg" 
                           precio="$220"
           />
           

        </Row>

    );

}

export default ListadoViajes;