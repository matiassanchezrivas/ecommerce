var axios = require('axios');

var axiosInstance = axios.create({
    baseURL: 'https://localhost:3002/',
    /* other custom settings */
});

module.exports = axiosInstance;