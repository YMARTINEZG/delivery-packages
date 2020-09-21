import React, { useState } from 'react';
import { Typography,
         TextField,
          Button,
          Grid, Paper, CardMedia } from "@material-ui/core";

import { connect } from 'react-redux';
import { createGuia } from '../actions';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  image: {
    padding: theme.spacing(2),
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const mapDispatchToProps = dispatch => {
  return {
    onUpdateGuia: (orden)=> {
      dispatch(createGuia(orden));
    }
  };
};
const mapStateToProps = (state, ownProps) => {
    let editOrden = {id: 0, numero: '', ordenDetail: '', carrier: '', packages: 0, status: ''};
    const editId = ownProps.match.params.id;
  
    if (state.ordenes.length > 0) {
      editOrden = Object.assign({}, state.ordenes.find(orden => orden.id == editId))
    }
    return {orden: editOrden};
  };
const CreateGuia = ({orden, onUpdateGuia}) => {
  const history = useHistory()
  const classes = useStyles();
  const [numero, setNumero] = useState(orden.ordenNumber)
  const [guia, setGuia] = useState('')
  //const [imageLink, setImageLink] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if (guia.trim()) {
      onUpdateGuia({numero, guia});
    }
  };
  const handleGuia = (e) => {
    setGuia(e.target.value)
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={6} md={7} className={classes.image}>
        <CardMedia component="img" image='../../assets/deposit-parcel.jpg' title='Guia'></CardMedia>
      </Grid>

      <Grid item xs={12} sm={6} md={5} component={Paper} square>
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LocalShippingIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Orden de despacho
        </Typography>

        <form className={classes.form} noValidate>
           <TextField
            label="Orden #"
             margin="normal"
             variant="outlined"
             value={orden.ordenNumber}
             fullWidth
           />
           <TextField
              label="Guia #"
              margin="normal"
              variant="outlined"
              value={guia}
              onChange={handleGuia}
              fullWidth
            />
            <br />
            <Grid container justify="space-between">
              <Button
                size="small"
                variant="contained"
                color="secondary"
                onClick={handleSubmit}
              >
              Crear Guia
              </Button>
              <Button
                size="small"
                variant="contained"
                color="primary"
                onClick={() => history.push('/activate')}
              > 
              Back
              </Button>          
            </Grid>       
        </form>
        </div>      
      </Grid>
    </Grid>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateGuia);