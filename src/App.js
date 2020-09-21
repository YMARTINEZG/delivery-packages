import React, { useState } from 'react';
import './App.css' 
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Footer from './components/Footer';
import {createMuiTheme ,AppBar, Toolbar, 
        ListItemIcon, Drawer, IconButton, 
        Typography, makeStyles,
        List, ListItem, ListItemText } from '@material-ui/core'
import AccountIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import SearchIcon from '@material-ui/icons/Search';
import WorkIcon from '@material-ui/icons/Work';
import HomeIcon from "@material-ui/icons/Home";
import { blue } from '@material-ui/core/colors';
import green from "@material-ui/core/colors/green";
import { ThemeProvider } from "@material-ui/styles";
import Search from './containers/Search'
import OrdenList from './containers/OrdenList'
import CreateOrden from './containers/CreateOrden'
import DespachoList from './containers/DespachoList'
import CreateGuia from './containers/CreateGuia'
import UpdateOrden from './containers/UpdateOrden'

export const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green
  }
});
const useStyles = makeStyles(theme => ({
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12
  },
  menuButton: {
    marginRight: 16,
    marginLeft: -12
  },
  menuItemIcon: {
    color: '#97c05c',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))

const App = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const handleDrawerClick = () => {
    if (open == false)
      setOpen(true )
    else
      setOpen(false)
  }

  return (
    <div className="main-container">
    <ThemeProvider theme={theme}>
     <AppBar position="static">
     <Toolbar>
       <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerClick}>
         <MenuIcon />
       </IconButton>      
       <Typography className={classes.title} variant="h6" noWrap>
       GREGO
       </Typography>
       <section className={classes.rightToolbar}>
          <IconButton color="inherit" aria-label="Ordenes">
            <HomeIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Work">
            <WorkIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="More Options">
           <AccountIcon />
          </IconButton>
       </section>
     </Toolbar> 
     </AppBar>
     <Router>
       <Drawer open={open}>
         <List>
           <Link to="/" className={classes.link}>
            <ListItem button>
             <ListItemIcon>
               <HomeIcon fontSize="small" className="classes.menuItemIcon"/>
             </ListItemIcon>
             <ListItemText primary={"Dashboard"} onClick={handleDrawerClick}/>
            </ListItem>
           </Link>
           <Link to="/create" className={classes.link}>
           <ListItem button>
            <ListItemIcon>
              <IconLibraryBooks fontSize="small" className="classes.menuItemIcon"/>
            </ListItemIcon>
            <ListItemText primary={"Ordenes"} onClick={handleDrawerClick}/>
           </ListItem>
          </Link>
          <Link to="/activate" className={classes.link}>
          <ListItem button>
           <ListItemIcon>
             <WorkIcon fontSize="small" className="classes.menuItemIcon"/>
           </ListItemIcon>
           <ListItemText primary={"Guias"} onClick={handleDrawerClick}/>
          </ListItem>
         </Link>          
           <Link to="/search" className={classes.link}>
            <ListItem button>
             <ListItemIcon>
               <SearchIcon fontSize="small" className="classes.menuItemIcon"/>
             </ListItemIcon>
             <ListItemText primary={"Search"} onClick={handleDrawerClick}/>
            </ListItem>
           </Link> 
         </List>
       </Drawer>
       <Switch>
         <Route exact path="/" component={OrdenList}/>   
         <Route path="/create" component={CreateOrden}/> 
         <Route path="/activate" component={DespachoList}/>
         <Route path="/edit/:id" component={UpdateOrden}/>
         <Route path="/guia/:id" component={CreateGuia}/>
         <Route path="/search" component={Search}/>     
       </Switch>     
     </Router>
    </ThemeProvider>
    </div>   
  );
}

export default App;
