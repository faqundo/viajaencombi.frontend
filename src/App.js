import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import ListadoDestinos from './components/ListadoDestinos';
import PanelPrincipal from './components/PanelPrincipal';
import TravelDetail from './components/TravelDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; //Está asociado a Link tmb. 

//colores principales:#563d7c o #7F0C78 o  #C87DEA , #6610f2 , #6f42c1 , #9d1d96
//colores secundarios: #36bbac , #666 , hsl(118, 59.00%, 71.00%)
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
                          <ListadoDestinos />
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
