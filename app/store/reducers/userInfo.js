import * as types from '../action-types/userInfo';
export function userInfo(state={},action){
  switch (action.type){
      case types.UPDATE_CITY:
          return {...state,city:action.city};
      default:
          return state;
  }
}