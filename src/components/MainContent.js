import React from 'react'
import { Container } from "@material-ui/core";
import OrdenList from '../containers/OrdenList'
import CreateOrden from '../containers/CreateOrden'
import CreateGuia from '../containers/CreateGuia'
import Search from '../containers/Search'
import DespachoList from '../containers/DespachoList'
import UpdateOrden from '../containers/UpdateOrden'
import {Route, useHistory} from "react-router-dom"
import Button from '@material-ui/core/Button'

// const useStyles = makeStyles((theme) => createStyles({
//   main: {
//     backgroundColor: theme.palette.primary,
//     height: '100%',
//     width: '50%'
//   },
//   root: {
//     display: 'flex',
//     flexDirecction: 'column',
//     height: '100%'
//   },
//   grow: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   }
// }));

const Root = () => {
  const history = useHistory()

  return (    
    <div className="classes.root">
         <div className="classes.grow"> 
             <Button color="secondary" variant="contained" onClick={() => history.push('/add')}>Create Orden</Button>
             <Button color="primary" variant="contained" onClick={() => history.push('/activate')}>Create Guia</Button>
             <Button color="primary" variant="contained" onClick={() => history.push('/search')}>Tracking</Button>
             </div>
    </div>        
  );
};

const MainContent = () => {
  
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
        <Route path="/edit/:id" component={UpdateOrden}/>
        <Route path="/guia/:id" component={CreateGuia}/>
        <Route path="/search" component={Search}/>
      </Container>
  )
}
export default MainContent