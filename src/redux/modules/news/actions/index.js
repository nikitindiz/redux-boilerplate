import constants from '../constants';
import axios from 'axios';

const {
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAIL
} = constants;

const getNewsRequest = () => ({
  type: GET_REQUEST
})

const getNewsSuccess = payload => ({
  type: GET_SUCCESS,
  payload
})


const getNewsFail = xhr => ({
  type: GET_FAIL,
  payload: {
    error: xhr.statusText
  }
})

export const getNews = (
  ) => dispatch => {

    dispatch(getNewsRequest())

    return axios
      .get('/news')
      .then(data => dispatch(getNewsSuccess(data)))
      .catch(error => dispatch(getNewsFail(error)))
  }
