import {
  START_UI_LOADER,
  STOP_UI_LOADER,
  START_LONG_LOADER,
  STOP_LONG_LOADER,
} from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  isLongLoading: false,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_UI_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_UI_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    case START_LONG_LOADER:
      return {
        ...state,
        isLongLoading: true,
      };
    case STOP_LONG_LOADER:
      return {
        ...state,
        isLongLoading: false,
      };
    default:
      return state;
  }
};

export default uiReducer;
