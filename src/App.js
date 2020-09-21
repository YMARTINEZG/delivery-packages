import React from 'react';
import './App.css'
import MainContent from './components/MainContent';
import {BrowserRouter} from "react-router-dom"
import Footer from './components/Footer';
import {createMuiTheme } from '@material-ui/core'
import { red } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import green from "@material-ui/core/colors/green";
import { ThemeProvider } from "@material-ui/styles";
import NavBar from './components/NavBar'
export const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green
  }
});
const App = () => {
  return (
    <div className="main-container">
    <ThemeProvider theme={theme}>
     <BrowserRouter>
        <NavBar/>
        <MainContent />
      </BrowserRouter>    
    </ThemeProvider>
    </div>   
  );
}

export default App;
