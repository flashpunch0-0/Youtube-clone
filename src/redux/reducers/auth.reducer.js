import { LOGIN_FAIL, LOGIN_SUCCESS, LOG_OUT } from "../actionType";

const initialState = {
  user: null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_FAIL:
      return {
        ...prevState,

        loading: false,
        error: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...prevState,
        loading: true,
        user: payload,
      };
    case LOG_OUT:
      return {
        ...prevState,

        user: null,
      };

    default:
      return prevState;
  }
};
//  created authreducers having cases
