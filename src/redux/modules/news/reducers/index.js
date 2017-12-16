import { createReducer } from '../../../../utils/ReduxHelper';
import constants from '../constants';

const {
  GET_REQUEST,
  GET_SUCCESS,
  GET_FAIL
} = constants;

const initialState = {
  response: {},
  state: 'IDLE',
  lastError: ''
};

export default createReducer(initialState, {
  [GET_REQUEST]: state => {
    return Object.assign({}, state, { state: 'START' });
  },

  [GET_SUCCESS]: (state, payload) => {
    return Object.assign({}, state, {
      state: 'SUCCESS',
      response: payload
    });
  },

  [GET_FAIL]: (state, { error = '' }) => {
    return Object.assign({}, state, {
      state: 'SUCCESS',
      lastError: error
    });
  }
})
