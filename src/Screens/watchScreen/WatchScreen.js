import React from "react";
import VideoMetaData from "../../Components/videoMetaData/VideoMetaData";
import VideoHorizontal from "../../Components/videoHorizontal/VideoHorizontal";
import Comments from "../../Components/comments/Comments";
import './watchscreen.css'
const WatchScreen = () => {
  return (
    // grid-rows-1
    <div className="watchscreen_wrapper  ">
      <div className="watchScreen__player_wrapper p-4" >
        <div className="watchScreen__player">
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" frameBorder="0"
            title="MY VIDEO"
            allowFullScreen
            width="800px"
            height='100%'

          ></iframe>
        </div>
        <VideoMetaData />
        <Comments />
      </div>
      <div className=" p-4">
        {[...Array(10)].map(() => (<VideoHorizontal />))}
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
