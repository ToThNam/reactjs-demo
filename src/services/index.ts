import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
});
export { axiosConfig };
