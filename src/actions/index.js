import { ADD_ORDEN, DELETE_ORDEN, DELIVERY_ORDEN,FETCH_ORDEN } from './types';
import ApiClient from '../ApiClient'
import axios from 'axios';

const apiUrl = '/api';

export const createOrden = (orden) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/v1/add`, {"ordenNumber": orden.numero, "ordenDetail": orden.detail, "userName": 'Yvan'})
      .then(response => {
        dispatch(createOrdenSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const createOrdenSuccess =  (data) => {
  return {
    type: ADD_ORDEN,
    payload: {
      id: data.id,
      ordenNumber: data.ordenNumber,
      ordenDetail: data.ordenDetail,
      carrier: data.carrier,
      packages: data.packages
    }
  }
};

export const deliveryOrdenSuccess =  (data) => {
  return {
    type: DELIVERY_ORDEN,
    payload: {
      id: data.id,
      ordenNumber: data.ordenNumber,
      ordenDetail: data.ordenDetail,
      carrier: data.carrier,
      packages: data.packages
    }
  }
};

export const deleteOrdenSuccess = id => {
  return {
    type: DELETE_ORDEN,
    payload: {
      id
    }
  }
}

export const deleteOrden = id => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/v1/delete/${id}`)
      .then(response => {
        dispatch(deleteOrdenSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const deliveryOrden = (orden) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/v1/update`, {"id": orden.id, "carrier": orden.carrier, "packages": orden.packages})
      .then(response => {
        dispatch(deliveryOrdenSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
export const fetchOrden = (ordenes) => {
  return {
    type: FETCH_ORDEN,
    ordenes
  }
};

export const fetchAllOrden = () => {
  return (dispatch) => {
      ApiClient.getAllOrdens()
      .then(response => {
        dispatch(fetchOrden(response))
      })
      .catch(error => {
        throw(error);
      });
  };
};