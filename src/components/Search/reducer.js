import { getAd } from '../../api/ads';

const GET_SEARCH_RESULTS_REQUEST = 'GET_SEARCH_RESULTS_REQUEST';
const GET_SEARCH_RESULTS_SUCCESS = 'GET_SEARCH_RESULTS_SUCCESS';
const GET_SEARCH_RESULTS_FAILURE = 'GET_SEARCH_RESULTS_FAILURE';

export const requestSearchResults = () => ({
  type: GET_SEARCH_RESULTS_REQUEST
});

export const searchResultsSuccess = advert => ({
  type: GET_SEARCH_RESULTS_SUCCESS,
  payload
});

export const searchResultsFailure = error => ({
  type: GET_ADVERT_FAILURE,
  error
});

export const fetchSearchResults = () => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch(requestSearchResults());
    try {
      const adverts = await getAds();
      resolve(dispatch(searchResultsSuccess(adverts)));
    } catch (error) {
      reject(dispatch(requestAdvertFailure(error)));
    }
  });

export const initialState = { loading: false, searchResults: [], error: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ADVERT_REQUEST:
      return Object.assign({}, state, { loading: true, error: null });
    case GET_ADVERT_SUCCESS:
      return { searchResults: action.payload, loading: false, error: null };
    case GET_ADVERT_FAILURE:
      return Object.assign({}, state, { loading: false, error: action.error });
    default:
      return state;
  }
}
