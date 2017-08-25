import { getAd } from "../../api/ads";

const GET_ADVERT_REQUEST = "GET_ADVERT_REQUEST";
const GET_ADVERT_SUCCESS = "GET_ADVERT_SUCCESS";
const GET_ADVERT_FAILURE = "GET_ADVERT_ERROR";

export const requestAdvert = id => ({ type: GET_ADVERT_REQUEST, id });

export const requestAdvertSuccess = advert => ({
  type: GET_ADVERT_SUCCESS,
  advert
});

export const requestAdvertFailure = error => ({
  type: GET_ADVERT_FAILURE,
  error
});

export const fetchAdvert = id => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch(requestAdvert(id));
    try {
      const advert = await getAd(id);
      resolve(dispatch(requestAdvertSuccess(advert)));
    } catch (error) {
      reject(dispatch(requestAdvertFailure(error)));
    }
  });

export const initialState = { loading: false, advert: {}, error: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADVERT_REQUEST:
      return Object.assign({}, state, { loading: true, error: null });
    case GET_ADVERT_SUCCESS:
      return { advert: action.advert, loading: false, error: null };
    case GET_ADVERT_FAILURE:
      return Object.assign({}, state, { loading: false, error: action.error });
    default:
      return state;
  }
}
