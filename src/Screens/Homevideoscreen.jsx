import React from 'react'
import Categoriesbar from '../Components/Categoriesbar/Categoriesbar'
import "./Homevideoscreen.css";
import { Video } from '../Components/Video/Video';
export const Homevideoscreen = () => {
    return (
        <div className=' appcontainer  h-max w-[1300px] py-4 px-6 '>
            <Categoriesbar />
            {/* <div className='grid grid-rows-4'> */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {[...new Array(20)].map(() => (
                    <Video />
                ))}
            </div>
            {/* </div> */}
            {/* <Video /> */}
        </div>
    )
}


