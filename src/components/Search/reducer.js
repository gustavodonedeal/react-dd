import { getAds } from '../../api/ads';

const GET_SEARCH_RESULTS_REQUEST = 'GET_SEARCH_RESULTS_REQUEST';
const GET_SEARCH_RESULTS_SUCCESS = 'GET_SEARCH_RESULTS_SUCCESS';
const GET_SEARCH_RESULTS_FAILURE = 'GET_SEARCH_RESULTS_FAILURE';

export const requestSearchResults = () => ({
  type: GET_SEARCH_RESULTS_REQUEST
});
export const searchResultsSuccess = payload => ({
  type: GET_SEARCH_RESULTS_SUCCESS,
  payload
});
export const searchResultsFailure = error => ({
  type: GET_SEARCH_RESULTS_FAILURE,
  error
});

export const fetchSearchResults = (filter = '') => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch(requestSearchResults());
    try {
      const adverts = await getAds(filter);
      resolve(dispatch(searchResultsSuccess(adverts)));
    } catch (error) {
      console.log(error);
      reject(dispatch(searchResultsFailure(error)));
    }
  });

export const initialState = {
  loading: false,
  results: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH_RESULTS_REQUEST:
      return { loading: true, error: null, results: [] };
    case GET_SEARCH_RESULTS_SUCCESS:
      return { results: action.payload, loading: false, error: null };
    case GET_SEARCH_RESULTS_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    default:
      return state;
  }
}

export const selectors = {
  getSearchAds: state => state.results.ads || []
};
