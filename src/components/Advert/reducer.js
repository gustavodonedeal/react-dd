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

export const fetchAdvert = id => async dispatch => {
  dispatch(requestAdvert(id));
  try {
    const advert = await getAd(id);
    dispatch(requestAdvertSuccess(advert));
  } catch (error) {
    dispatch(requestAdvertFailure(error));
  }
};

export default function reducer(state = { loading: false, advert: {}, error: null }, action) {
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
