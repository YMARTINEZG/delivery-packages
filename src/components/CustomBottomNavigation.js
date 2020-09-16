import React from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CloseIcon from '@material-ui/icons/Close';
import DispatchIcon from '@material-ui/icons/Filter3';
import TrackIcon from '@material-ui/icons/LocalShipping';
import AddIcon from '@material-ui/icons/Add';
//import {Restore, Favorite, LocationOn} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function CustomBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('orden');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="New Orden" value="ordenes" icon={<AddIcon />} />
        <BottomNavigationAction label="Despacho" value="despacho" icon={<DispatchIcon />} />
        <BottomNavigationAction label="Track" value="track" icon={<TrackIcon />} />
        <BottomNavigationAction label="Close" value="close" icon={<CloseIcon />} />
      </BottomNavigation>
    );
  }