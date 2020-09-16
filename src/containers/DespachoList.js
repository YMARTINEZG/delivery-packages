import React from 'react';
import { connect } from 'react-redux';
import Despacho from '../components/Despacho';
import { deliveryOrden } from '../actions';

const DespachoList = ({ ordenes, onDelivery }) => {
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
            if (orden.status === 'CREATED') {
               return (
                  <Despacho orden={ orden } onDelivery={ onDelivery } key={ orden.id } />
                );
            }
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
      onDelivery: orden => {
        dispatch(deliveryOrden(orden));
      }
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DespachoList);