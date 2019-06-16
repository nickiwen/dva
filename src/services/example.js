import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function getProduct(params){
  return request("/api/product?id=" + params.id);
}

export function posts(){
  return request("/api/posts");
}