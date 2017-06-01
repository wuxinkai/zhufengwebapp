import * as types from '../action-types/favorite';
let addFavorite = id => ({type:types.ADD_FAVORITE, id})
let delFavorite = id => ({type:types.DEL_FAVORITE, id})

export default  {addFavorite,delFavorite}