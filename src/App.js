import React from 'react';
import MainContent from './components/MainContent';
import {BrowserRouter} from "react-router-dom"
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
        <MainContent />
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
