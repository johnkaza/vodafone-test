import apiService from 'utils/api';

export const getMenu = params => apiService.get('/menu', { params });
export const getSlider = params => apiService.get('/slider', { params });
