import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login } from "../../redux/action/auth.action";

const LoginScreen = () => {
  const navigate = useNavigate();
  // below code is for handling login authentication when you click handlelogin it goe the auth.action in action in redux foleder in project
  const dispatch = useDispatch();
  const handleLogin = () => {
    // calling dispatch login and then navigating back to home page
    dispatch(Login()).then(navigate("/"));
  };

  return (
    // <div className="login bg-blackprimary fixed text-textcolor  tracking-wide h-screen grid place-items-center ">
    <div className="login bg-blackprimary fixed text-textcolor  tracking-wide  h-screen w-full text-2xl  ">
      <div className=" bg-blacksecondary p-8 mx-4 rounded-lg flex  flex-col   justify-center items-center  ">
        <h2>Youtube Clone</h2>
        <img
          className="w-[90px] h-[90px] object-contain"
          src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
          alt=""
        />
        <button
          onClick={handleLogin}
          className=" p-2 border-2 border-white rounded-md mb-4 focus:outline-none"
        >
          Login With google
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
