import React from "react";

const WatchScreen = () => {
  return (
    // grid-rows-1
    <div className="flex">
      <div className="w-2/3 p-4">
        <div className="watchScreen__player">
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" frameBorder="0"
            title="MY VIDEO"
            allowFullScreen
            width={"100%"}
            height="100%"
          ></iframe>
        </div>
      </div>
      <div className="w-1/3 p-4">
        cdfdf
      </div>
    </div>

    // <div className="grid ">
    //   <div class=" w-2/3">
    //     <div className="watchScreen__player">
    //       <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" frameBorder="0"
    //         title="MY VIDEO"
    //         allowFullScreen
    //         width="100%"
    //         height="100%"

    //       ></iframe>
    //     </div>
    //   </div>
    //   <div class=" w-1/3">
    //     cdfdf
    //   </div>

    // </div>
  );
};

export default WatchScreen;
