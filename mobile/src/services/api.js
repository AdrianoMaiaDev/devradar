import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.100.4:3333',
    // no emulador usar: 'http://localhost:3333', no celular usar o IP
    // ou no emulador usar o IP: 10.0.2.2
});

export default api;