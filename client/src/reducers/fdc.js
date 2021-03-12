import { GET_FDC, GET_FDCS, PROFILE_ERROR } from '../actions/types';

const initialState = {
  firstDayCover: null,
  firstDayCovers: [],
  error: {},
};

const FirstDayCover = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_FDC:
      return {
        ...state,
        firstDayCover: payload,
        loading: false,
      };
    case GET_FDCS:
      return {
        ...state,
        firstDayCovers: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default FirstDayCover;
