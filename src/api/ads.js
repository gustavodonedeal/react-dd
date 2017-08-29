import { CORS, DONE_DEAL_API_BASE_V3, DONE_DEAL_API_BASE_V4 } from './consts';
import { getRequestParams, postRequestParams } from './request';

const searchParams = (section, filter = {}) =>
  Object.assign(
    {},
    {
      adType: 'forsale',
      max: 30,
      section,
      sort: 'relevance desc'
    },
    filter
  );

const getAds = async (section = 'cars', filter = {}) => {
  const params = searchParams(section, filter);
  try {
    const response = await fetch(
      `${CORS + DONE_DEAL_API_BASE_V4}/find/`,
      postRequestParams(params)
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getAd = async adId => {
  try {
    const response = await fetch(
      `${CORS + DONE_DEAL_API_BASE_V3}/view/ad/${adId}`,
      getRequestParams()
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error, error.message, error.status);
  }
};

const getSellersPhoneNumber = adId =>
  fetch(
    `${CORS + DONE_DEAL_API_BASE_V3}/view/ad/${adId}/phone`,
    postRequestParams()
  )
    .then(response => response.json())
    .then(data => data.phone)
    .catch(error => console.log(error));

export { getAds, getAd, getSellersPhoneNumber };
