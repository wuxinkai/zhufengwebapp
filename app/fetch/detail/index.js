import {get} from '../index';
export function getInfo(id){
    return get(`/api/detail/${id}`);
}

export function getComment(id,page){
    return get(`/api/comment/${id}/${page}`);
}