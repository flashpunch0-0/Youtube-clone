import { LOGIN_FAIL, LOGIN_SUCCESS, LOG_OUT } from "../actionType";

const initialState = {
  //   accessToken: null,
  user: null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // case LOGIN_SUCCESS:
    //   return {
    //     ...prevState,
    //     accessToken: payload,
    //     loading: false,
    //   };
    case LOGIN_FAIL:
      return {
        ...prevState,
        // accessToken: payload,
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
        // accessToken: null,
        user: null,
      };

    default:
      return prevState;
  }
};
//  created authreducers having cases
