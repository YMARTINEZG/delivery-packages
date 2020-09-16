import React from 'react'
import { Container } from "@material-ui/core";
import OrdenList from '../containers/OrdenList'
import CreateOrden from '../containers/CreateOrden'
import DespachoList from '../containers/DespachoList'
import CustomAppBar from '../components/CustomAppBar'
import {Route, useHistory} from "react-router-dom"

const MainContent = () => {
    const history = useHistory()
    return (
      <Container>
        <Route path="/" exact component={CustomAppBar}/>
        <Route path="/main" exact component={OrdenList}/>       
        <Route path="/add" exact component={CreateOrden}/> 
        <Route path="/activate" exact component={DespachoList}/>    
      </Container>
  )
}
export default MainContent