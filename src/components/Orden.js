import React from 'react';
import { Typography, CardActions,Card, CardContent,Button, Box } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => createStyles({
  cardHeader: {
    backgroundColor: theme.palette.grey[500]
  },
  cardDetail: {
    backgroundColor: theme.palette.grey[500],
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: theme.spacing(1),
  },
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    minWidth: 175,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const Orden = ({ orden, onDelete }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
           <Typography>
             <Box textAlign="left" m={1} fontWeight="fontWeightBold">{ orden.ordenNumber }</Box>
           </Typography>
           <Typography>  
             <Box textAlign="rigth" m={1} fontWeight="fontWeightRegular">{ orden.ordenDetail }</Box>
           </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onDelete(orden.id)} variant="contained" color="secondary">
        Remove
        </Button>
      </CardActions>
    </Card>
  );
};
export default Orden