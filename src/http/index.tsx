import axios from "axios";

const http = axios.create({
    baseURL: 'http://168.138.247.79/'
});

export default http;