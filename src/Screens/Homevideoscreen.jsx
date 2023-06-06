import React, { useEffect, useState } from 'react'
import Categoriesbar from '../Components/Categoriesbar/Categoriesbar'
import "./Homevideoscreen.css";
import { Video } from '../Components/Video/Video';
// import { useDispatch } from 'react-redux';
// import { getApiVideos } from '../redux/action/Video.action';
import request from "../api";
export const Homevideoscreen = () => {
    const [apiData, setApiData] = useState([])
    const getApiVideos = async () => {
        const data = await request().then((data) => { setApiData(data.data) })
        // console.log(data.data.posts[0].creator.name);
        // console.log(response.data);
        console.log(apiData)


    };
    useEffect(() => {
        getApiVideos()
    }, [])

    return (
        <div className=' appcontainer  h-max w-[1300px] py-4 px-6 '>
            <Categoriesbar />
            <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4'>
                {[...new Array(20)].map(() => (
                    <Video />

                ))}
            </div>

        </div>
    )
}


