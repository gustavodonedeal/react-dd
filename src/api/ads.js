import { CORS, DONE_DEAL_API_BASE_V3, DONE_DEAL_API_BASE_V4 } from './consts';

const searchParams = (section, filter = {}) =>
  Object.assign({}, {
    adType: 'forsale',
    max: 30,
    section,
    sort: 'relevance desc',
  }, filter);

const baseRequestParams = () => ({
  mode: 'cors',
  headers: new Headers({
    'Content-Type': 'application/json'
  })
});

const postRequestParams = (jsonParams = {}) => Object.assign({
  method: 'POST',
  body: JSON.stringify(jsonParams)
}, baseRequestParams());

const getRequestParams = () => Object.assign({
  method: 'GET',
}, baseRequestParams());

const getAds = (section, filter) => {
  const params = searchParams(section, filter);
  return fetch(`${CORS + DONE_DEAL_API_BASE_V4}/find/`, postRequestParams(params))
    .then(response => response.json())
    .then(data => data.ads)
    .catch(error => console.error(error));
};

const getAd = adId =>
  fetch(`${CORS + DONE_DEAL_API_BASE_V3}/view/ad/${adId}`, getRequestParams())
    .then(response => response.json())
    .catch(error => console.error(error));

export { getAds, getAd };
