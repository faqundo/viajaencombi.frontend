import React from 'react';
import Row  from "react-bootstrap/Row";
import TarjetaDestino from './TarjetaDestino';


const ListadoViajes = () => {

    return(

        <Row className="p-4" style={{backgroundColor :"#ECECEC"}} expand="lg">
            
           <TarjetaDestino destino="Ezeiza"
                           imagen="https://www.buenosaires.gob.ar/sites/gcaba/files/styles/interna_pagina/public/_mg_0477.jpg"
                           precio="$200"
                           id="1"
            />
           <TarjetaDestino destino="Adrogue"
                           imagen="https://i0.wp.com/laurbedigital.com.ar/noticias/wp-content/uploads/2017/12/20171221-brown1.jpg" 
                           precio="$220"
                           id="2"
           />
           <TarjetaDestino destino="Lanus"
                           imagen="https://i0.wp.com/laurbedigital.com.ar/noticias/wp-content/uploads/2017/12/20171221-brown1.jpg" 
                           precio="$220"
                           id="3"
           />
           <TarjetaDestino destino="Grand Bour"
                           imagen="https://i0.wp.com/laurbedigital.com.ar/noticias/wp-content/uploads/2017/12/20171221-brown1.jpg" 
                           precio="$300"
                           id="4"
           />
           <TarjetaDestino destino="Pilar"
                           imagen="https://i0.wp.com/laurbedigital.com.ar/noticias/wp-content/uploads/2017/12/20171221-brown1.jpg" 
                           precio="$150"
                           id="5"
           />
           <TarjetaDestino destino="Adrogue SUR"
                           imagen="https://i0.wp.com/laurbedigital.com.ar/noticias/wp-content/uploads/2017/12/20171221-brown1.jpg" 
                           precio="$220"
                           id="6"
           />
           

        </Row>

    );

}

export default ListadoViajes;