import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';

import ListadoViajes from './components/ListadoViajes';
import PanelPrincipal from './components/PanelPrincipal';


function App() {
  return (
    <>
    <NavigationBar />

    <PanelPrincipal />

    <ListadoViajes />

    </>
  );
}

export default App;
