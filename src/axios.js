import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://amazon-backend1.herokuapp.com'
    // 'http://localhost:3001'
    // 'http://localhost:5001/fir-9e4b4/us-central1/api' // the api url(cloud function)
});
export default instance;