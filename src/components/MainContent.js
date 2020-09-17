import React from 'react'
import { Container } from "@material-ui/core";
import OrdenList from '../containers/OrdenList'
import CreateOrden from '../containers/CreateOrden'
import DespachoList from '../containers/DespachoList'
import {Route, useHistory} from "react-router-dom"
import { createStyles, makeStyles,createMuiTheme } from '@material-ui/core'
import { red } from '@material-ui/core/colors';
import grey from "@material-ui/core/colors/grey";
import Button from '@material-ui/core/Button'

export const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: grey
  }
});
const useStyles = makeStyles((theme) => createStyles({
  main: {
    backgroundColor: theme.palette.primary,
    height: '100%',
    width: '50%'
  },
  root: {
    display: 'flex',
    flexDirecction: 'column',
    height: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

const Root = () => {
  const history = useHistory()
  const classes = useStyles();

  return (
    <div className="classes.root">
         <div className="classes.grow"> 
             <Button color="primary" variant="contained" onClick={() => history.push('/main')}>Ordenes</Button>
             <Button color="secundary" variant="contained" onClick={() => history.push('/add')}>Create</Button>
             <Button color="sucess" variant="contained" onClick={() => history.push('/activate')}>Despacho</Button>
         </div>
    </div>
    
  );
};

const MainContent = () => {
    const history = useHistory()
    const classes = useStyles();
    return (
      <Container className="classes.main">
        <Route exact path="/" render={() =>
          <div>
            <Root/>
            <OrdenList/>          
          </div>
        }/>      
        <Route path="/add" exact component={CreateOrden}/> 
        <Route path="/activate" exact component={DespachoList}/>    
      </Container>
  )
}
export default MainContent