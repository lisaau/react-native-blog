import axios from 'axios';

// NOTE THAT THE URL BELOW NEEDS TO BE CHANGED WHEN NGROK SERVER EXPIRES
export default axios.create({
    baseURL: 'http://b359d762.ngrok.io'
});