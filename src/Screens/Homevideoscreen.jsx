import React, { useEffect, useState } from 'react'
import Categoriesbar from '../Components/Categoriesbar/Categoriesbar'
import "./Homevideoscreen.css";
import { Video } from '../Components/Video/Video';
// import request from "../api";
// import { data } from 'autoprefixer';
import Axios from 'axios';
// import { getApiVideos } from '../redux/action/Video.action';
export const Homevideoscreen = () => {
    // const [apiData, setApiData] = useState("")
    // const fetchdata = () => {
    //     Axios.get(`https://internship-service.onrender.com/videos?page=2`).then(
    //         (res) => {
    //             // below wala working correctly
    //             // {
    //             //   Object.keys(res).forEach((i) => {
    //             //     console.log(res[i]);
    //             //   });
    //             // }
    //             // now using values
    //             // let a = Object.values(res);

    //             // console.log(a);
    //             // console.log(res);
    //             setApiData(res.data.data.posts[0].submission.thumbnail);
    //             // (Object.values(res.data.data.posts).map(items, index)= () =>{
    //             console.log(res.data.data.posts[0].submission.thumbnail)
    //             // })
    //             // let a = Object.values(res.data.data.posts);
    //             // setApiDatas(a)


    //             // console.log(predictedages);

    //             // setpredictedages(res.data.data.posts[0]);
    //             // console.log(res);
    //             // console.log(a);
    //             // console.log(predictedage);
    //         }
    //     );
    // };


    // // };
    // useEffect(() => {
    //     fetchdata()
    // }, [])

    return (
        <div className=' appcontainer  h-max w-[1300px] py-4 px-6 ml-5 md:ml-2 '>
            <Categoriesbar />

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  '>
                {[...new Array(20)].map(() => (
                    <Video />



                ))}
            </div>

        </div>
    )
}


