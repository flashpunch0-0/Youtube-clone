import React, { useEffect, useState } from 'react'
// import zlatan from "./VideoImages/zlatan.jpg";
import Axios from 'axios';

export const Video = () => {


    const [apiData, setApiData] = useState(null)

    // Axios.get(`https://internship-service.onrender.com/videos?page=1`).then(
    //     (res) => {
    //         console.log(res);
    //         setApiData(res.data.data);
    //         // console.log(res.data.data.posts[0])
    //     }
    // );

    useEffect(() => {

        Axios.get(`https://internship-service.onrender.com/videos?page=1`).then(
            (res) => {
                console.log(res);
                setApiData(res.data.data);
                // console.log(res.data.data.posts[0])
            }
        );
    }, [])

    return (
        <div className='video mb-4 p-3 font-medium text-sm cursor-pointer'>
            <div className=' mb-2 relative w-full'>
                <img
                    className=' w-full'
                    // src = {zlatan}
                    src={apiData?.posts[0].submission.thumbnail}
                    alt='thumbnail'
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

                    src={apiData?.posts[0].creator.pic}
                    alt=''
                />
                <p className=' mb-0'>{apiData?.posts[0].creator.name}</p>
            </div>
        </div>
    )
}

