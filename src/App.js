import React, { useState } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import ListadoDestinos from './components/ListadoDestinos';
import PanelPrincipal from './components/PanelPrincipal';
import TravelDetail from './components/TravelDetail';
import Footer from './components/Footer';
import Ayuda from './components/Ayuda';
import MisPasajes from './components/MisPasajes';
import DevolucionPasajes from './components/DevolucionPasajes';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; //Está asociado a Link tmb. 

//colores principales:#563d7c o #7F0C78 o  #C87DEA , #6610f2 , #6f42c1 , #9d1d96
//colores secundarios: #36bbac , #666 , hsl(118, 59.00%, 71.00%)
//colores de fuentes : #9F1897

function App() {

  const [usuario, setUsuario] = useState(null);

  const onLoginSuccess = (loggedUser) => {
    setUsuario(loggedUser);
  }

  const onLogout = ()=>{
    
    let url = 'http://localhost:8888/auth';

    fetch(url ,{
                method: 'DELETE',
                credentials : 'include'
               }
        ).then(response => response.json()
        ).then(data =>{
                       setUsuario(null);
                      })


  }

  return (
    <Router>

      <NavigationBar user={usuario}
                     handleLoginSuccess={onLoginSuccess}
                     handleLogout ={onLogout}
      />

      


      <Switch>
        <Route exact path="/"
          children={
            <>
              <PanelPrincipal />
              <ListadoDestinos type="destinos" />
            </>
          }
        />

        <Route exact path="/destinos/:id"
          children={
            <>

              <TravelDetail />
            </>
          }
        />

        <Route exact path="/misdestinos"
          children={
            <>
              <ListadoDestinos user={usuario}
                               type="misdestinos"/>
            </>
          }
        />

        <Route exact path="/ayuda"
          children={
            <>
              <Ayuda />
            </>
          }
        />
        <Route exact path="/ayuda/devolucion-de-pasajes"
          children={
            <>
              <DevolucionPasajes />
            </>
          }
        />

        <Route exact path="/reenviarpasaje"
          children={
            <>
              <PanelPrincipal />
            </>
          }
        />
        <Route exact path="/mispasajes"
          children={
            <>
              <MisPasajes  user={usuario}/>
            </>
          }
        />


      </Switch>

    <Footer />

    </Router>
    
  );
}

export default App;
