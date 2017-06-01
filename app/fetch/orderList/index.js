import {get,post} from '../index';
export function getOrderList(username) {
    return get('/api/orderlist/' + username);
}

export function confirmComment(data){
    return post('/api/comment',data);
}