import React from 'react';
import { connect } from 'react-redux';
import { deleteOrden } from '../actions';
import CreateIcon from '@material-ui/icons/Create'
import DeleteIcon from '@material-ui/icons/Delete'
import { useHistory } from "react-router-dom"
import { TableContainer, Paper, Table, TableBody, TableCell, TableRow, TableHead } from "@material-ui/core";
import { createStyles, makeStyles, withStyles } from '@material-ui/core'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    marginTop: 20,
    minWidth: 700,
  },
});
const OrdenList = ({ ordenes, onDelete }) => {
  const classes = useStyles();
  const history = useHistory()

  return (
    <TableContainer component={Paper}>
       <Table className={classes.table}>
         <TableHead>
           <TableRow>
             <StyledTableCell align="left">Orden #</StyledTableCell>
             <StyledTableCell align="left">Detail</StyledTableCell>
             <StyledTableCell align="left">Carrier</StyledTableCell>
             <StyledTableCell align="right">Packg.</StyledTableCell>
             <StyledTableCell align="right">Status</StyledTableCell>
           </TableRow>
         </TableHead>
         <TableBody>
           {ordenes.map(orden => (
              <TableRow key={orden.id}>
                <TableCell align="left">{orden.ordenNumber}</TableCell>
                <TableCell align="left">{orden.ordenDetail}</TableCell>
                <TableCell align="left">{orden.carrier}</TableCell>
                <TableCell align="right">{orden.packages}</TableCell>
                <TableCell align="right">{orden.status}</TableCell>
                <TableCell align="right" onClick={ () => history.push('/edit/'+orden.id) }><CreateIcon/></TableCell>
                <TableCell align="right" onClick={() => onDelete(orden.id)}><DeleteIcon/></TableCell>
              </TableRow>
           ))}
         </TableBody>
       </Table>
    </TableContainer>
  )

  // if(!ordenes.length) {
  //   return (
  //     <div>
  //       No Ordenes
  //     </div>
  //   )
  // }
  // return (
  //   <div>
  //     <div>
  //       {ordenes.map(orden => {
  //         return (
  //           <Orden orden={ orden } onDelete={ onDelete } key={ orden.id } />
  //         );
  //       })}
  //     </div>
  //   </div>
  // );

}

const mapStateToProps = state => {
  return {
    ordenes: state.ordenes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deleteOrden(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdenList);