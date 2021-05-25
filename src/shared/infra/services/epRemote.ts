import axios from 'axios';

export const epRemote = axios.create({
  baseURL: 'https://60ad51de80a61f0017330bb3.mockapi.io/',
});

axios.interceptors.response.use(response => {
  return response.data;
});
