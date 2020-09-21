import { ADD_ORDEN, ADD_GUIA, DELETE_ORDEN, UPDATE_ORDEN, DELIVERY_ORDEN, FETCH_ORDEN } from './types';
import ApiClient from '../ApiClient'
import axios from 'axios';

const apiUrl = '/api';

export const createOrdenSuccess =  (data) => {
  return {
    type: ADD_ORDEN,
    payload: {
      id: data.id,
      ordenNumber: data.ordenNumber,
      ordenDetail: data.ordenDetail,
      carrier: data.carrier,
      packages: data.packages,
      status: data.status
    }
  }
};
export const createGuiaSuccess =  (data) => {
  return {
    type: ADD_GUIA,
    payload: {
      id: data.id,
      ordenNumber: data.ordenNumber,
      guiaNumber: data.guiaNumber
    }
  }
};

export const updateOrdenSuccess =  (data) => {
  return {
    type: UPDATE_ORDEN,
    payload: {
      id: data.id,
      ordenNumber: data.ordenNumber,
      ordenDetail: data.ordenDetail,
      carrier: data.carrier,
      packages: data.packages,
      status: data.status
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
      packages: data.packages,
      status: data.status
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
};
export const fetchOrden = (ordenes) => {
  return {
    type: FETCH_ORDEN,
    ordenes
  }
};

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

export const updateOrden = (orden) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/v1/change`, {"id": orden.id, "carrier": orden.carrier, "packages": orden.packages, "status": orden.status})
      .then(response => {
        dispatch(updateOrdenSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
export const createGuia = (orden) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/v1/add/guia`, {"orden": orden.numero, "guia": orden.guia, "user": 'Yvan'})
      .then(response => {
        dispatch(createGuiaSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
export const deliveryOrden = (request) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/v1/delivery`, {"id": request.id, "tracking": request.guia})
      .then(response => {
        dispatch(deliveryOrdenSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
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