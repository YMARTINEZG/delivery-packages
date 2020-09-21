import React, {useState} from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { deliveryOrden } from '../actions';
import TrackIcon from '@material-ui/icons/LocalShipping';
import FolderIcon from '@material-ui/icons/Folder';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from "react-router-dom"
import { createStyles, makeStyles, Collapse,IconButton } from '@material-ui/core'
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }, 
}));

const mapStateToProps = state => {
  return {
    ordenes: state.ordenes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelivery: request => {
      dispatch(deliveryOrden(request));
    }
  };
};
const DespachoList = ({ ordenes, onDelivery }) => {
    const classes = useStyles();
    const history = useHistory()
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    if(!ordenes.length) {
      return (
        <div>
          No Ordenes
        </div>
      )
    }
    return (
      <div>
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {ordenes.map(orden => (
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
                  <CardActions disableSpacing>
                     <IconButton aria-label="Guia scaneada">
                        <LockOpenIcon />
                     </IconButton>
                     <IconButton
                      className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="muestra # guia"
                     >
                        <ExpandMoreIcon />
                     </IconButton>
                     <Button fullWidth size="small" onClick={() => history.push('/guia/'+orden.id)} variant="contained" color="secondary">
                        Create Guia
                     </Button>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography>{orden.guiaRemision}</Typography>
                    <Typography paragraph>{orden.ordenDetail}</Typography>
                  </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

      </div>
    )  
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DespachoList);