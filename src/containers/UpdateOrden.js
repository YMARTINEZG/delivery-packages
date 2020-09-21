import React, { useState } from 'react';
import { Typography,
         TextField,
         Container,
          Button,
          FormControlLabel,
          Grid, Checkbox } from "@material-ui/core";

import { connect } from 'react-redux';
import { updateOrden } from '../actions';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const mapDispatchToProps = dispatch => {
  return {
    onUpdateOrden: (orden)=> {
      dispatch(updateOrden(orden));
    }
  };
};
const mapStateToProps = (state, ownProps) => {
    let editOrden = {id: 0, ordenNumber: '', ordenDetail: '', carrier: 'TEST', packages: 0, status: ''};
    const editId = ownProps.match.params.id;   
    if (state.ordenes.length > 0) {
      editOrden = Object.assign({}, state.ordenes.find(orden => orden.id == editId))
    }
    return {orden: editOrden};

    // return {
    //   ordenes: state.ordenes
    // };
  };
const UpdateOrden = ({orden, onUpdateOrden}) => {
  const classes = useStyles();
  const [numero, setNumero] = useState(orden.ordenNumber)
  const [id, setId] = useState(orden.id)
  const [status, setStatus] = useState(orden.status)
  const [carrier, setCarrier] = useState(orden.carrier)
  const [packages, setPackages] = useState(orden.packages)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (carrier.trim() && packages > 0) {
      onUpdateOrden({id, carrier, packages, status});
      handleReset();
    }
  };

  const handleReset = () => {
    setCarrier(carrier)
    setPackages(packages)
  };

  const handleCheckedValue = (e) => {
    if (e.target.checked){
      setStatus("ACTIVE")
    }else {
      setStatus(orden.status)
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
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
             disabled
             value={numero}
             fullWidth
          />
          <TextField
             label="Carrier email"
             margin="normal"
             variant="outlined"
             value={carrier}
             onChange={e => setCarrier(e.target.value)}
             fullWidth
          />
          <br />
          <TextField
             type="number"
             label="Packages"
             margin="normal"
             variant="outlined"
             value={packages}
             onChange={e => setPackages(e.target.value)}
             fullWidth
          />
          <br />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" onChange={ handleCheckedValue }/>}
            label="Activate"
          />
          <br />
          <Grid container justify="space-between">
            <Button
              size="small"
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
            >
            Update
            </Button>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={handleReset}
            > 
          Reset
          </Button>          
          </Grid>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                 Documents
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Requiere ayuda?"}
              </Link>
            </Grid>
          </Grid>           
      </form>
      </div>
    </Container>
    );
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateOrden);