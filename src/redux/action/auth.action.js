// import firebase from "firebase/app";
import { auth, gprovider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

export const Login = () => async (dispatch) => {
  try {
    // const provider = new firebase.auth.GoogleAuthProvider();
    // we have already define above line in firebase.js file
    const res = await signInWithPopup(auth, gprovider);
  } catch (error) {
    console.log(error);
  }
};

// const navigate = useNavigate();
//   //   created so that we can navigte to a page after the authentication
//   const signInWithGoogle = async () => {
//     const result = await signInWithPopup(auth, gprovider);
//     navigate("/");
//     // placed here just aftwr authentication

//     console.log(result);
//   };
