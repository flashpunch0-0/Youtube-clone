import React from "react"
import { GoHome } from "react-icons/go"
import {
    MdOutlineSubscriptions as Subcription, MdOutlineVideoLibrary as Library,
    MdThumbUp, MdHistory, MdExitToApp,
} from "react-icons/md"
import "./Sidebar.css"
import { useDispatch } from "react-redux"
// importing logout function 
import { log_out } from '../../redux/action/auth.action'
export const Sidebar = ({ sideBarBool, handlesidebar }) => {

    // console.log(sideBarBool);
    const dispatch = useDispatch()
    const logouthandler = () => {
        dispatch(log_out())
    }

    return (
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
                <li className="my-custom-liclass  hover:bg-bordercolor hover:rounded-lg ">
                    <MdThumbUp className="h-6 w-6 md:h-5 md:w-5" />
                    <span className="spanclass">Liked videos</span>

                </li>
                <hr className="h-[1px] bg-bordercolor border-0" />
                <li onClick={logouthandler} className="my-custom-liclass  hover:bg-bordercolor hover:rounded-lg ">
                    <MdExitToApp size={23} />
                    <span className="spanclass">Log Out</span>
                </li>
                <hr className="h-[1px] bg-bordercolor border-0" />
            </nav >
        </div >


    )
}


