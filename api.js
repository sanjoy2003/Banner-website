import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const updateBanner = (bannerData) => {
  return api.post('/updateBanner', bannerData);
};

export const getBanner = () => {
  return api.get('/getBanner');
};
