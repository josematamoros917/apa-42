// src/api/axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',  // URL base de tu API de Django
    timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});

export default instance;