import { CORS, DONE_DEAL_API_BASE } from './consts';

const searchParams = (section, filter) =>
  Object.assign({}, {
    adType: 'forsale',
    max: 30,
    section,
    sort: 'relevance desc',
  }, filter);

const postRequestParams = (jsonParams) => ({
  method: 'POST',
  mode: 'cors',
  headers: new Headers({
    'Content-Type': 'application/json'
  }),
  body: JSON.stringify(jsonParams)
});

const getAds = (section, filter = {}) => {
  const params = searchParams(section, filter);
  return fetch(`${CORS + DONE_DEAL_API_BASE}/find/`, postRequestParams(params))
    .then(response => response.json())
    .then(response => response.ads)
    .catch(error => console.error(error));
};

export { getAds };
