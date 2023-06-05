import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login } from "../../redux/action/auth.action";
// import "./loginScreen.css";

const LoginScreen = () => {
  const navigate = useNavigate();
  // below code is for handling login authentication when you click handlelogin it goe the auth.action in action in redux foleder in project
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(Login());
    if (dispatch(Login())) {
      navigate("/");
    }
  };

  return (
    // <div className="login bg-blackprimary fixed text-textcolor  tracking-wide h-screen grid place-items-center ">
    <div className="login bg-blackprimary fixed text-textcolor  tracking-wide flex justify-center h-screen w-full text-2xl  ">
      <div className="login__container bg-blacksecondary p-8 mx-4 rounded-lg flex  flex-col  justify-center items-center h-screen w-full ">
        <h2>Youtube Clone</h2>
        <img
          className="w-[130px] h-[130px] object-contain"
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
