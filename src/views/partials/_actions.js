import apiService from 'utils/api';

export const getMenu = params => apiService.get('/menu', { params });
