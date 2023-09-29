import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosBySearch } from "../redux/action/videos.action";
// import { Container } from "postcss";
import VideoHorizontal from "../Components/videoHorizontal/VideoHorizontal";

const SearchScreen = () => {
    const { query } = useParams();
    //   console.log(query);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideosBySearch(query));
    }, [query, dispatch]);

    const { videos, loading } = useSelector((state) => state.searchedVideos);

    return (
        <div className="container ">
            {
                // videos.map(video => (<VideoHorizontal video={video} key={video.id.videoId} searchScreen />))
                !loading ? (<h1>Loading...</h1>) : (videos?.map(video => (
                    <VideoHorizontal video={video} key={video.id.videoId} searchScreen />
                )))
            }
        </div>
    );
};

export default SearchScreen;
