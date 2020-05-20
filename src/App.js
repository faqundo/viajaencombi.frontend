import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import ListadoViajes from './components/ListadoViajes';
import PanelPrincipal from './components/PanelPrincipal';
import TravelDetail from './components/TravelDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//colores principales:#563d7c o #7F0C78 o  #C87DEA , #6610f2 , #6f42c1
//colores secundarios: #36bbac , #666 ,
//colores de fuentes : #9F1897

function App() {
  return (
    <Router>

      <NavigationBar user="" />


      <Switch>
        <Route exact path="/"
               children={
                          <>
                          <PanelPrincipal />
                          <ListadoViajes />
                          </>
                        } 
          />

        <Route exact path="/destinos/:id"
               children={
                         <TravelDetail />

                        }
        />

      </Switch>


    </Router>
  );
}

export default App;
