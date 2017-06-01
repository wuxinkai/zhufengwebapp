import * as types from '../action-types/favorite';
export function favorite(state = [], action) {
    switch (action.type) {
        case types.ADD_FAVORITE:
            return [...state, action.id];
        case types.DEL_FAVORITE:
            return state.filter(item => item != action.id)
        default:
            return state;
    }
}

