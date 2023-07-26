import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getVideosByCategory } from '../../redux/action/videos.action'
const keywords = ["kittu",
    "dsa",
    "cricket",
    "football",
    "coding",
    "reactjs",
    "Arsenal",
    "Chennai super",
    "Mumbai",
    "mumbai city fc",
    "real madrid",
    "barcelon",
    "thiery henry",
    "martin odegaard",
    "bergkamp",
    "arsene wenger",
    "saka",
    "martinelli",
    "declan rice",
    "mikel arteta",
]

const Categoriesbar = () => {
    const [activeElement, setactiveElement] = useState("All")
    const dispatch = useDispatch()
    const handleClick = value => {
        setactiveElement(value)
        dispatch(getVideosByCategory(value))
        // let appliedClass = activeElement === value ? "active mr-4 p-2 whitespace-nowrap  rounded-lg  hover:text-black bg-bordercolor hover:bg-white " : " mr-4 p-2 whitespace-nowrap  rounded-lg  hover:text-black bg-bordercolor hover:bg-white ";
    }

    return (
        <div className='Categoriesbar py-2 px-0  text-xs   overflow-x-scroll ' >
            {keywords.map((value, i) => <span onClick={() => handleClick(value)} className='  mr-4 p-2 whitespace-nowrap  rounded-lg  hover:text-black bg-bordercolor hover:bg-white ' key={i}>{value}</span>)}
            {/* {keywords.map((value, i) => <span onClick={() => handleClick(value)} className={appliedClass} key={i}>{value}</span>)} */}
        </div>
    )
}

export default Categoriesbar


