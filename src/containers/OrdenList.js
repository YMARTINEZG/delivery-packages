import React from 'react';
import { connect } from 'react-redux';
import Orden from '../components/Orden';
import { deleteOrden } from '../actions';

const OrdenList = ({ ordenes, onDelete }) => {
  if(!ordenes.length) {
    return (
      <div>
        No Ordenes
      </div>
    )
  }
  return (
    <div>
      {ordenes.map(orden => {
        return (
          <Orden orden={ orden } onDelete={ onDelete } key={ orden.id } />
        );
      })}
    </div>
  );
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