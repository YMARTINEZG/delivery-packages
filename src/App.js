import React from 'react';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import {BrowserRouter} from "react-router-dom"


const App = () => {
  return (
    <BrowserRouter>
        <MainContent />
    </BrowserRouter>
  );
}

export default App;
