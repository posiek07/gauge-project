import { DELETE_ITEM } from './actionTypes';

export const deleteTile = (itemId) => {
  return async (dispatch) => dispatch({ type: DELETE_ITEM, itemId });
};
