// import React from "react";

// const VideoHorizontal = () => {
//   return <div>Videos</div>;
// };

// export default VideoHorizontal;
import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { useNavigate } from "react-router-dom";
import "./VideoHorizontal.css";
const VideoHorizontal = ({ video, searchScreen, subScreen }) => {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
      resourceId,
    },
  } = video;

  const isVideo = !(id.kind === "youtube#channel" || subScreen);

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    if (isVideo) getVideoDetails();
  }, [id, isVideo]);

  useEffect(() => {
    const getChannelIcon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    getChannelIcon();
  }, [channelId]);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  const navigate = useNavigate();

  const _channelId = resourceId?.channelId || channelId;

  const handleClick = () => {
    isVideo
      ? navigate(`/watch/${id.videoId}`)
      : navigate.push(`/channel/${_channelId}`);
  };

  const thumbnail = !isVideo && "videoHorizontal__thumbnail-channel";

  return (
    <div
      className="videoHorizontal py-2 m-1 flex items-center cursor-pointer"
      onClick={handleClick}
    >
      <div className="videoHorizontal__left flex-shrink-0 w-1/2">
        <img
          src={medium.url}
          alt="Thumbnail"
          className={`w-full ${thumbnail}`}
        />
        {isVideo && (
          <span className="videoHorizontal__duration text-white bg-gray-800 px-2 py-1 rounded absolute bottom-0 right-0">
            {_duration}
          </span>
        )}
      </div>
      <div className="videoHorizontal__right flex-grow ml-2">
        <p className="mb-1 font-semibold">{title}</p>

        {isVideo && (
          <div className="videoHorizontal__details flex items-center mb-1">
            <AiFillEye className="mr-1" />
            <span>
              {numeral(views).format("0.a")} Views •{" "}
              {moment(publishedAt).fromNow()}
            </span>
          </div>
        )}

        {(searchScreen || subScreen) && (
          <p className="videoHorizontal__desc mt-1">{description}</p>
        )}

        <div className="videoHorizontal__channel my-1 flex items-center">
          {isVideo && (
            <img
              src={channelIcon?.url}
              alt="Channel Icon"
              className="w-8 h-8 rounded-full mr-2"
            />
          )}
          <p className="mb-0">{channelTitle}</p>
        </div>

        {subScreen && (
          <p className="mt-2">{video.contentDetails.totalItemCount} Videos</p>
        )}
      </div>
    </div>
  );
};

export default VideoHorizontal;
