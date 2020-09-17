import React from 'react';
import { connect } from 'react-redux';
import { deliveryOrden } from '../actions';
import TrackIcon from '@material-ui/icons/LocalShipping';
import { createStyles, makeStyles } from '@material-ui/core'
import green from "@material-ui/core/colors/green";
import { Grid, Card, Container,CardHeader,CardContent,Typography,CardActions,Button,Box } from '@material-ui/core'
const useStyles = makeStyles((theme) => createStyles({
  cardHeader: {
    backgroundColor: theme.palette.grey[500]
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
 
}));

const mapStateToProps = state => {
  return {
    ordenes: state.ordenes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelivery: orden => {
      dispatch(deliveryOrden(orden));
    }
  };
};
const DespachoList = ({ ordenes, onDelivery }) => {
  const classes = useStyles();
    if(!ordenes.length) {
      return (
        <div>
          No Ordenes
        </div>
      )
    }
    return (
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {ordenes.map((orden) => (
            <Grid item key={orden.id}>
              <Card>
                <CardHeader
                  title={orden.ordenNumber}
                  titleTypographyProps={{ align: 'center' }}
                  action={<TrackIcon />}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="div">
                      <Box fontWeight="fontWeightRegular" m={1} textAlign="center">
                      #Pkgs: {orden.packages}
                      </Box>
                      <Box fontWeight="fontWeightRegular" m={1}>
                      {orden.ordenDetail}
                      </Box>
                    </Typography>
                  </div>
                </CardContent>
                <CardActions>
                   <Button size="small" variant="contained" color="primary">
                      Activate
                   </Button>
                   <Button size="small" onClick={onDelivery} variant="contained" color="secondary">
                      Delivery
                   </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DespachoList);