import apiService from 'utils/api';

export const getRoutes = params => apiService.get('/menu', { params });
