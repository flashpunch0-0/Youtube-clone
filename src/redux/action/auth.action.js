import { auth, gprovider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT } from "../actionType";
import { signOut } from "firebase/auth";

// export const [user] = useAuthState(auth);
// above line signout function used for signing out

export const Login = () => async (dispatch) => {
  try {
    // const provider = new firebase.auth.GoogleAuthProvider();
    // we have already define above line in firebase.js file as gprovider
    const res = await signInWithPopup(auth, gprovider);

    console.log(res);

    // creating a profile object
    const profile = {
      profile: "loaded",
    };
    dispatch({
      type: LOGIN_SUCCESS,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const log_out = () => async (dispatch) => {
  // await.auth.signOut()

  await signOut(auth);

  dispatch({
    type: LOG_OUT,
  });
};
