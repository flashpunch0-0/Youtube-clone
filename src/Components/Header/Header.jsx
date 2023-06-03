import React from "react"
import "./Header.css"

import { AiOutlineSearch } from "react-icons/ai"
// import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import ytlogo from "./Images/yt-logo.png";
import ytlogomobile from "./Images/yt-logo-mobile.png";
import kratik from "./Images/kratik.jpeg";

export const Header = ({ handlesidebar }) => {
    return (
        <div className=" header flex justify-between items-center   bg-blackprimary ">
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

            <form className="flex flex-0.6  bg-blacksecondary border  border-bordercolor rounded-full ">
                <input type="text" className="outline-none text-white ml-2 pr-5 pl-5 md:pl-0   w-44 md:w-64 lg:w-[500px]  border-none font-medium bg-transparent" placeholder="Search" />
                <button type="submit" className="bg-bordercolor  w-[40px] md:w-[60px] h-6 md:h-10 flex items-center justify-center  rounded-r-3xl  ">
                    <AiOutlineSearch size={24} />
                </button>
            </form>



            <div className="header-icons flex  justify-around items-center mr-4 ">
                <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030] ">
                    <RiVideoAddLine className="text-white text-xl cursor-pointer hidden md:block " />
                </div>
                <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]  ">
                    <FiBell className="text-white text-xl cursor-pointer  hidden md:block" />
                </div>
                <div className="flex h-10 w-10 overflow-hidden rounded-full md:ml-4">
                    <img src={kratik} className="  w-10 h-10 md:w-10 md:h-10 rounded-full " alt="" />
                </div>
            </div>
        </div>
    )
}


