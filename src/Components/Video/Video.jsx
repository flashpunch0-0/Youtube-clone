import React, { useEffect, useState } from 'react'
import './Video.css'
import zlatan from "./VideoImages/zlatan.jpg";
import Axios from 'axios';
// import { apiData } from "../../Screens/Homevideoscreen";
export const Video = () => {
    // const [apiData, setApiData] = useState("")
    // const fetchdata = () => {
    //     Axios.get(`https://internship-service.onrender.com/videos?page=1`).then(
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
    //             console.log(res);
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
    // }, [fetchdata(), apiData])

    const [apiData, setApiData] = useState(null)

    Axios.get(`https://internship-service.onrender.com/videos?page=1`).then(
        (res) => {
            // below wala working correctly
            // {
            //   Object.keys(res).forEach((i) => {
            //     console.log(res[i]);
            //   });
            // }
            // now using values
            // let a = Object.values(res);

            // console.log(a);
            console.log(res);
            // setApiData(res.data.data.posts[0].submission.thumbnail);
            setApiData(res.data.data);
            // setApiData(res.data.data);
            // (Object.values(res.data.data.posts).map(items, index)= () =>{
            console.log(res.data.data.posts[0])
            // })
            // let a = Object.values(res.data.data.posts);
            // setApiDatas(a)


            // console.log(predictedages);

            // setpredictedages(res.data.data.posts[0]);
            // console.log(res);
            // console.log(a);
            // console.log(predictedage);
        }
    );



    // // };
    // useEffect(() => {
    //     fetchdata()
    // }, [fetchdata(), apiData])


    return (
        <div className='video mb-4 p-3 font-medium text-sm cursor-pointer'>
            <div className='video__top mb-2 relative w-full'>
                <img
                    className=' w-full'
                    // src='https://i.ytimg.com/vi/DyvDXY1aAzA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBjpnqIpRrltzJ0EcbXRi8N2HtCWQ'
                    src={apiData?.posts[0].submission.thumbnail}
                    // src={apiData}
                    // src={apiDatas[0].submission.thumbnail}
                    alt=''
                />
                <span className=' absolute bottom-1 right-1 p-1  bg-blacksecondary rounded-sm'>05:43</span>
            </div>
            <div className='  mb-1  text-white line-clamp-1 '>
                {/* San Siro's final tribute to 𝙕𝙡𝙖𝙩𝙖𝙣 𝙄𝙗𝙧𝙖𝙝𝙞𝙢𝙤𝙫𝙞𝙘́ */}
                {apiData?.posts[0].submission.title}
            </div>

            <div className='video__channel flex items-center  my-2'>

                <img
                    className=' w-9 h-9  mr-2 cursor-pointer rounded-full'
                    // src='https://yt3.ggpht.com/a-/AOh14GixdVjxqi11Md_OCDd3K7SOQEhizq4f3EI_0g=s68-c-k-c0x00ffffff-no-rj-mo'
                    src={apiData?.posts[0].creator.pic}
                    alt=''
                />
                <p className=' mb-0'>Rainbow Hat Jr</p>
            </div>
        </div>
    )
}

