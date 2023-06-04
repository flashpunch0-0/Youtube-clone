import React from "react";

// import "./loginScreen.css";

const LoginScreen = () => {
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
        <button className=" p-2 border-2 border-white rounded-md mb-4 focus:outline-none">
          Login With google
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
