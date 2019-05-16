import axios from 'axios';

const API_BASE_URL = 'https://ivy-ah-backend-staging.herokuapp.com/api/v1';

export const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
});

const urlParams = new URLSearchParams(window.location.search);
const resetToken = urlParams.get('resetToken');
export const signup = params => client.post('/users/signup', params);
export const login = params => client.post('/users/login', params);
export const forgotPassword = params => client.post('/users/forgotpassword', params);
export const resetPassword = params => axios({
  method: 'patch',
  url: `${API_BASE_URL}/users/resetpassword?resetToken=${resetToken}`,
  data: params
});
export const fetchBookmarks = () => client.get('/bookmarks');
export const addBookmark = article => client.post('/bookmarks', { article });
export const removeBookmark = article => client.delete('/bookmarks', {
  data: {
    article
  }
});
export const fetchArticle = id => client.get(`/articles/${id}`);
