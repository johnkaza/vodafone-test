import apiService from 'utils/api';

export const getData = params => apiService.get('/home', { params });
