import React, { useState } from 'react';
import { Typography,
         TextField,
         Container,
          Button,
          FormControlLabel,
          Grid, Checkbox } from "@material-ui/core";

import { connect } from 'react-redux';
import { createOrden } from '../actions';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
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
    onAddOrden: (orden)=> {
      dispatch(createOrden(orden));
    }
  };
};
const NewOrden = ({onAddOrden}) => {
  const classes = useStyles();
  const [numero, setNumero] = useState('')
  const [carrier, setCarrier] = useState('')
  const [detail, setDetail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if (numero.trim() && detail.trim()) {
      onAddOrden({numero, detail});
      handleReset();
    }
  };

  const handleReset = () => {
    setNumero('')
    setDetail('')
    setCarrier('')
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
             required
             value={numero}
             onChange={e => setNumero(e.target.value)}
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
             multiline
             rows="4"
             label="Detail"
             margin="normal"
             variant="outlined"
             value={detail}
             required
             onChange={e => setDetail(e.target.value)}
             fullWidth
          />
          <br />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
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
            Create
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

export default connect(null,mapDispatchToProps)(NewOrden);