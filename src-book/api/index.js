import axios from 'axios';
export function getSliders() {
  return axios.get('/api/sliders');
}
export function getHotBook() {
  return axios.get('/api/hot');
}
export function getBookList() {
  return axios.get('/api/book');
}
