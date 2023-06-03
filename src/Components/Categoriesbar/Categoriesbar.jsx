import React from 'react'
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
    "Arsenal",
    "Chennai super",
    "Mumbai",
    "Arsenal",
    "Chennai super",
    "Mumbai",
    "mumbai city fc",
    "Arsenal",
    "Chennai super",
    "Mumbai",
]

const Categoriesbar = () => {

    return (
        <div className='Categoriesbar py-2 px-0  text-xs   overflow-x-scroll '>
            {keywords.map((value, i) => <span className=' mr-4 p-2 whitespace-nowrap  rounded-lg  hover:text-black bg-bordercolor hover:bg-white ' key={i}>{value}</span>)}
        </div>
    )
}

export default Categoriesbar


