// import firebase from "firebase/app";
import { auth, gprovider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT } from "../actionType";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
// export const [user] = useAuthState(auth);
// above line signout function used for signing out

export const Login = () => async (dispatch) => {
  try {
    // const provider = new firebase.auth.GoogleAuthProvider();
    // we have already define above line in firebase.js file
    const res = await signInWithPopup(auth, gprovider);
    // const [user] = useAuthState(auth);
    console.log(res);
    // console.log(res.UserImpl.photoURL);

    // creating a profile object
    const profile = {
      // name: res.additionalUserInfo.profile.name,
      // name: res.UserImpl.displayName,
      // name: user?.photoURL | null,
      // photoURL: res.additionalUserInfo.profile.picture,
      photoURL: res.UserImpl.photoURL,
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

// const navigate = useNavigate();
//   //   created so that we can navigte to a page after the authentication
//   const signInWithGoogle = async () => {
//     const result = await signInWithPopup(auth, gprovider);
//     navigate("/");
//     // placed here just aftwr authentication

//     console.log(result);
//   };
