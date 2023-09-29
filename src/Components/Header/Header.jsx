import React, { useState } from "react"
import "./Header.css"

import { AiOutlineSearch } from "react-icons/ai"
import { SlMenu } from "react-icons/sl";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import ytlogo from "./Images/yt-logo.png";
import ytlogomobile from "./Images/yt-logo-mobile.png";
// import kratik from "./Images/kratik.jpeg";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { Link, useNavigate, } from "react-router-dom";
export const Header = ({ handlesidebar }) => {

    const [input, setInput] = useState('')
    const navigate = useNavigate()
    // const history = useHistory()
    const handleSubmit = e => {
        e.preventDefault()


        // navigate(`./`)
        // /search/input dala hai taki extra things naaye in search header of http matlab search/hetsdf/search/sfsd agar ham search karne ke baad vaps search karte hai toh
        navigate(`/search/${input}`)
    }

    const [user] = useAuthState(auth);
    return (
        <div className=" header flex justify-between items-center   bg-blackprimary ">

            {/* contains left most elements of header */}
            <div className=" header_left flex justify-between items-center sticky px-4 md:px-5">
                <div className="flex md:mr-4 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                    <SlMenu className=" w-6 h-6 md:w-4 cursor-pointer  text-white text-xl"
                        onClick={() => handlesidebar()} />

                </div>
                <div className="flex h-7 items-center">
                    <img
                        className="h-full hidden dark:lg:block"
                        src={ytlogo}
                        alt="Youtube"
                    />
                    <img
                        className=" h-full hidden md:block lg:hidden"
                        src={ytlogomobile}
                        alt="Youtube"
                    />
                </div>
            </div>

            {/* contains input button  */}
            <form className="flex flex-0.6  bg-blacksecondary border  border-bordercolor rounded-full " onSubmit={handleSubmit} >
                <input type="text" className="outline-none text-white ml-2 pr-5 pl-5 md:pl-0   w-44 md:w-64 lg:w-[500px]  border-none font-medium bg-transparent" placeholder="Search" value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <button type="submit" className="bg-bordercolor  w-[40px] md:w-[60px] h-6 md:h-10 flex items-center justify-center  rounded-r-3xl  ">
                    <AiOutlineSearch size={24} />
                </button>
            </form>


            {/* contains right most elements of header */}
            <div className="header-icons flex  justify-around items-center mr-5  ">
                <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030] ">
                    <RiVideoAddLine className="text-white text-xl cursor-pointer hidden md:block " />
                </div>
                <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]  ">
                    <FiBell className="text-white text-xl cursor-pointer  hidden md:block" />
                </div>
                <div className="flex items-center justify-center  h-10 w-10 rounded-full hover:bg-[#303030] ">
                    {/* <img src={kratik} className="  w-10 h-10 md:w-10 md:h-10 rounded-full " alt="" /> */}
                    {user && (
                        <>
                            {/* <p>{user?.displayName}</p> */}
                            <img

                                src={user?.photoURL || ""}
                                alt="gphoto"
                                className="w-8  h-8 rounded-full"
                            />

                        </>
                    )}
                    {!user && (
                        <>
                            <button className=" text-lg rounded-lg hover:bg-green-500 hover:text-white transition duration-300">
                                <Link
                                    className=""
                                    to={"/auth"}
                                >
                                    login
                                </Link>
                            </button>

                        </>
                    )}
                </div>
            </div>
        </div>
    )
}


