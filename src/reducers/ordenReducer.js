import { ADD_ORDEN, DELETE_ORDEN, DELIVERY_ORDEN, FETCH_ORDEN } from '../actions/types';

export default function ordenReducer(state = [], action) {
  switch (action.type) {
    case ADD_ORDEN:
      return [...state, action.payload];
    case DELETE_ORDEN:
      return state.filter(orden => orden.id !== action.payload.id);
    case DELIVERY_ORDEN:
        state.filter(orden => orden.id !== action.payload.id);
        return [...state, action.payload];
    case FETCH_ORDEN:
      return action.ordenes;
    default:
      return state;
  }
}