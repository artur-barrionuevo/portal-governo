import { LIST_SECRETARIAS } from '../../constants/ActionTypes';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function secretarias(state = initialState, action = {}) {
  switch (action.type) {
    case `${LIST_SECRETARIAS}_PENDING`:
      return {
        ...state,
        data: [],
        error: null,
        loading: true,
      };
    case `${LIST_SECRETARIAS}_SUCCESS`:
      return {
        ...state,
        data: action.result,
        error: null,
      };
    case `${LIST_SECRETARIAS}_FAIL`:
      return {
        ...state,
        data: [],
        error: action.error.response.error,
      };
    default:
      return state;
  }
}
