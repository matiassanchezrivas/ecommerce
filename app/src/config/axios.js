var axios = require('axios');

var axiosInstance = axios.create({
    baseURL: 'http://localhost:3002/',
    withCredentials: true
    /* other custom settings */
});

module.exports = axiosInstance;