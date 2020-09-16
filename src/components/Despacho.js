import React from 'react';
import { Card, CardContent, Button} from "@material-ui/core";
import { CardDescription } from 'semantic-ui-react';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    root: {
      color: theme.palette.text.primary,
      display: 'flex',
      flexDirection: 'row'
    },
    icon: {
      flexGrow: 1,
    },
  }))

const Despacho = ({ orden, onDelivery }) => {
  const classes = useStyles()
  return (
    <div claseName="classes.root">
      <Card>
         <LocalShippingIcon className={classes.icon}/>
         <CardContent>
          <CardDescription>{ orden.ordenNumber }</CardDescription>
        </CardContent>
        <CardContent>
          <CardDescription>{ orden.status }</CardDescription>
          <Button primary type="button" onClick={() => onDelivery(orden)}>
             Delivery
          </Button>
          <Button danger type="button">Activate</Button>             
        </CardContent>
      </Card>
    </div>
  );
};
export default Despacho