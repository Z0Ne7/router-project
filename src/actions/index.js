import * as types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';

export const actionFetchProductsRequest = () => {
  return dispatch => {
    return callApi('products', 'GET', null).then(res => {
      dispatch(actionFetchProducts(res.data));
    });
  };
};

export const actionFetchProducts = products => {
  return {
    type: types.FETCH_PRODUCTS,
    products,
  };
};
