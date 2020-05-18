import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Search from './components/Search';
import ListadoViajes from './components/ListadoViajes';


function App() {
  return (
    <>
    <NavigationBar />

    <Search />

    <ListadoViajes />

    </>
  );
}

export default App;
