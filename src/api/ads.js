import axios from 'axios';
import { CORS, DONE_DEAL_API_BASE } from './consts';

const searchParams = filter =>
  Object.assign({}, {
    adType: 'forsale',
    max: 30,
    section: this.section,
    sort: 'relevance desc',
  }, filter); 

const getAds = (filter) => {
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  return axios.post(`${CORS + DONE_DEAL_API_BASE}/find/`, searchParams(filter))
    .then(response => response.data.ads)
    .catch(error => console.error(error));
};

export { getAds };