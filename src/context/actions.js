import * as actionTypes from './action-types';

export const changeMessageAction_context = () => {
  return { type: actionTypes.CHANGE_MESSAGE_FC };
};

export const changeMessageByParamAction_context = (message) => {
  return { type: actionTypes.CHANGE_MESSAGE_BY_PARAM_FC, payload: message };
};
export const userAddToListAction = (product)=>{
  return {type: actionTypes.USER_ADD_TO_LIST, payload: product}
}
export const increament = (num)=>{
  return {type: actionTypes.INCREAMENT, payload: num}
}
export const productDetail = (product)=>{
  return {type: actionTypes.PRODUCT_DETAIL, payload: product}
}
export const removeproduct = (id)=>{
  return {type: actionTypes.REMOVE_PRODUCT, payload: id}
}