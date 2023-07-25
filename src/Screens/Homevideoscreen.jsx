import React, { useEffect } from 'react'
import Categoriesbar from '../Components/Categoriesbar/Categoriesbar'
import "./Homevideoscreen.css";
import { Video } from '../Components/Video/Video';
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos } from '../redux/action/videos.action'
export const Homevideoscreen = () => {
    // dispatching getpopularVideos on useEffect
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])
    //    get all video in form of array in a const videos
    const { videos } = useSelector(state => state.homeVideos)
    console.log(videos)
    return (
        <div className=' appcontainer  h-max w-[1300px] py-4 px-6 ml-5 md:ml-2 '>
            <Categoriesbar />

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  '>
                {videos.map((video) => (
                    <Video video={video} key={video} />
                ))}
                {/* {[...new Array(20)].map(() => (
                    <Video />
                ))} */}

            </div>

        </div>
    )
}


