import React from 'react'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles,createMuiTheme } from '@material-ui/core'
import { useHistory } from "react-router-dom"
import { lightBlue } from '@material-ui/core/colors';
import grey from "@material-ui/core/colors/grey";

export const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: grey
  }
});
const useStyles = makeStyles((theme) => createStyles({
  main: {
    backgroundColor: theme.palette.primary
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


const CustomAppBar = () => {
    const history = useHistory()
    const classes = useStyles();

    return (
      <div claseName="classes.root">
           <div className="classesRow"> 
               <Button color="primary" variant="contained" onClick={() => history.push('/main')}>Ordenes</Button>
               <Button color="secundary" variant="contained" onClick={() => history.push('/add')}>Create</Button>
               <Button color="sucess" variant="contained" onClick={() => history.push('/activate')}>Despacho</Button>
           </div>
      </div>
      
    );
};
export default CustomAppBar