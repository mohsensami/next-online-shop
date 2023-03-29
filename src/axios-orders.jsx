import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-shop-6e2c4-default-rtdb.firebaseio.com/',
});

export default instance;
