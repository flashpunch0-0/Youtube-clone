import React from 'react'
import './Video.css'
import zlatan from "./VideoImages/zlatan.jpg";
export const Video = () => {

    return (
        <div className='video mb-4 p-3 font-medium text-sm cursor-pointer'>
            <div className='video__top mb-2 relative w-full'>
                <img
                    className=' w-full'
                    // src='https://i.ytimg.com/vi/DyvDXY1aAzA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBjpnqIpRrltzJ0EcbXRi8N2HtCWQ'
                    src={zlatan}
                    alt=''
                />
                <span className=' absolute bottom-1 right-1 p-1  bg-blacksecondary rounded-sm'>05:43</span>
            </div>
            <div className='video__title  mb-1  text-white line-clamp-1 '>
                San Siro's final tribute to 𝙕𝙡𝙖𝙩𝙖𝙣 𝙄𝙗𝙧𝙖𝙝𝙞𝙢𝙤𝙫𝙞𝙘́
            </div>

            <div className='video__channel flex items-center  my-2'>

                <img
                    className=' w-9 h-9  mr-2 cursor-pointer'
                    src='https://yt3.ggpht.com/a-/AOh14GixdVjxqi11Md_OCDd3K7SOQEhizq4f3EI_0g=s68-c-k-c0x00ffffff-no-rj-mo'
                    alt=''
                />
                <p className=' mb-0'>Rainbow Hat Jr</p>
            </div>
        </div>
    )
}

