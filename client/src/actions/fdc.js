import axios from 'axios';
import { setAlert } from './alert';

import { UPDATE_FDC, GET_FDCS, PROFILE_ERROR } from './types';

export const createFDC = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await axios.post('/api/profile/fdcs', formData, config);
    dispatch({
      type: UPDATE_FDC,
      payload: res.data,
    });

    dispatch(setAlert('FDC Added', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteFDC = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/profile/fdcs/${id}`);

    dispatch({
      type: UPDATE_FDC,
      payload: res.data,
    });

    dispatch(setAlert('FDC Removed', 'success'));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// get all FDCs
export const getFDCS = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile/fdcs');

    dispatch({
      type: GET_FDCS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
