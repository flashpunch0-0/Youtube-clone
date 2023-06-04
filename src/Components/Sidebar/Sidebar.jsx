import React from "react"
import { GoHome } from "react-icons/go"
import {
    MdOutlineSubscriptions as Subcription, MdOutlineVideoLibrary as Library,
    MdThumbUp, MdHistory,
} from "react-icons/md"
import "./Sidebar.css"

export const Sidebar = ({ sideBarBool, handlesidebar }) => {
    // console.log(sideBarBool);
    return (
        // <nav className="{sideBarBool ? 'hidden' : 'block'}  bg-blacksecondary flex flex-col py-4 w-[250px] "  >
        <div className="h-full  bg-blackprimary flex flex-col py-4  md:w-[250px] fixed md:static ">
            <nav className={`${sideBarBool ? "sidebar"
                : "sidebaropen"
                }`}
                onClick={() => handlesidebar()}
            >
                {/* created custom tailwind class - my-custom-liclass and spanclass in css file using @apply */}
                <li className=" my-custom-liclass bg-bordercolor rounded-lg  ">
                    <GoHome className="h-6 w-6 md:h-5 md:w-5" />
                    <span className="spanclass ">Home</span>
                </li>
                <li className="my-custom-liclass hover:bg-bordercolor hover:rounded-lg">
                    <Subcription className="h-6 w-6 md:h-5 md:w-5" />
                    <span className="spanclass">Subscriptions</span>
                </li>
                <hr className="h-[1px] bg-bordercolor border-0" />
                <li className="my-custom-liclass  hover:bg-bordercolor hover:rounded-lg">
                    <Library className="h-6 w-6 md:h-5 md:w-5" />
                    <span className="spanclass">Library</span>
                </li>
                <li className="my-custom-liclass  hover:bg-bordercolor hover:rounded-lg">
                    <MdHistory className="h-6 w-6 md:h-5 md:w-5" />
                    <span className="spanclass">History</span>
                </li>
                <li className="my-custom-liclass  hover:bg-bordercolor hover:rounded-lg  p">
                    <MdThumbUp className="h-6 w-6 md:h-5 md:w-5" />
                    <span className="spanclass">Liked videos</span>
                </li>
                <hr className="h-[1px] bg-bordercolor border-0" />
            </nav >
        </div>


    )
}


