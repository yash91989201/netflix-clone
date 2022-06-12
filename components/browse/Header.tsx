import { useEffect, useState } from "react"
import { NextComponentType } from "next"
import Image from "next/image"
import Link from "next/link"
// custom hooks
import { useAuth } from "../../hooks/AuthContext"
// react icons
import { FaSearch } from "react-icons/fa"
import { AiFillBell } from "react-icons/ai"
import { MdArrowDropDown, MdArrowDropUp, MdModeEditOutline } from "react-icons/md"
import { BiUser, BiHelpCircle } from "react-icons/bi"

const Header: NextComponentType = () => {
    const { signout } = useAuth()
    const [dropdown, setDropdown] = useState(false)
    const [header, setHeader] = useState("bg-transparent text-white")
    useEffect(() => {
        function headerStyling() {
            if (window.pageYOffset > 160)
                setHeader("bg-black text-white")
            else
                setHeader("bg-transparent text-white")
        }
        window.addEventListener("scroll", headerStyling)
        return () => window.removeEventListener("scroll", headerStyling)
    }, [])
    return (
        <header className={`fixed top-0 left-0 w-full p-2 sm:p-3 md:px-16  flex justify-between  items-center  ${header} transition-colors`}>
            {/* netflix logo */}
            <div className="relative w-[clamp(80px,16vw,120px)] h-8 text-netflix-red">
                <Image src="/assets/icons/netflix_logo.svg" alt="nf-logo" layout="fill" />
            </div>
            <nav className="px-12 flex-1 hidden lg:block">
                <ul className="flex space-x-4 text-sm ">
                    <li>
                        <Link href="/browse">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>TV Shows</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>Movies</a>
                        </Link>
                    </li>
                    <li> <Link href="/latest">
                        <a>New &amp; Popular</a>
                    </Link>
                    </li>
                    <li>
                        <Link href="/my-list">
                            <a>My List</a>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="block px-[4vw]  flex-1 text-xs font-semibold  lg:hidden">
                <select name="selectNav" className="bg-black p-1 rounded-sm" >
                    <option value="/browse">Home</option>
                    <option value="/tv-shows">TV Shows</option>
                    <option value="/movies">Movies</option>
                    <option value="/popular">New &amp; Popular</option>
                    <option value="/my-list">My List</option>
                </select>
            </div>
            {/* user action */}
            <div className="flex items-center space-x-4 md:space-x-8">
                <FaSearch className="text-xl md:text-2xl hidden md:block" />
                <Link href="/kids">
                    <a className="text-sm hidden lg:block">Children</a>
                </Link>
                <AiFillBell className="text-xl md:text-2xl" />
                {/* account dropdown */}
                <div className="relative" onClick={() => setDropdown(!dropdown)} >
                    {/* dropdown button */}
                    <div className="flex justify-center items-center   cursor-pointer">
                        <div className="relative block w-6 h-6 md:w-10 md:h-10 rounded-sm md:rounded-md overflow-hidden">
                            <Image
                                src="/assets/images/profile_img1.png"
                                alt="profile image"
                                layout="fill"
                            />
                            <MdArrowDropDown className="text-white" />
                        </div>
                        <MdArrowDropUp className={`text-3xl hidden md:block ${dropdown ? `rotate-0` : `rotate-180`}`} />
                    </div>
                    {/* dropdown list */}
                    <MdArrowDropUp className={`absolute top-[2.75rem] right-[50%] ${dropdown ? `block` : `hidden`}  text-3xl`} />
                    <div className={`absolute top-16 right-2 ${dropdown ? `block` : `hidden`} bg-black/80 text-xs font-semibold`}>
                        <ul className="p-4 py-3 space-y-3">
                            <li>
                                <Link href="">
                                    <a className="block group ">
                                        <div className="flex items-center">
                                            <div className="relative w-[2.25rem] h-[2.25rem] rounded-md overflow-hidden ">
                                                <Image
                                                    src="/assets/images/profile_img2.png"
                                                    alt="profile image"
                                                    layout="fill"
                                                />
                                            </div>
                                            <p className="pl-3 pr-16 group-hover:underline ">Ankur</p>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li >
                                <Link href="">
                                    <a className="block group">
                                        <div className="flex items-center">
                                            <div className="relative w-[2.25rem] h-[2.25rem] rounded-md overflow-hidden ">
                                                <Image
                                                    src="/assets/images/profile_img3.png"
                                                    alt="profile image"
                                                    layout="fill"
                                                />
                                            </div>
                                            <p className="px-3 group-hover:underline">Kids</p>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li >
                                <Link href="">
                                    <a className="block group">
                                        <div className="flex items-center">
                                            <div className="relative w-[2.25rem] h-[2.25rem] flex justify-center items-center  rounded-md overflow-hidden ">
                                                <MdModeEditOutline className="w-6 h-6" />
                                            </div>
                                            <p className="px-3 group-hover:underline">Manage Profile</p>
                                        </div>
                                    </a>
                                </Link>
                            </li>

                        </ul>
                        <ul className="border-y p-4 py-3 space-y-1">
                            <li >
                                <Link href="">
                                    <a className="block group">
                                        <div className="flex items-center">
                                            <div className="relative w-[2.25rem] h-[2.25rem] flex justify-center items-center  rounded-md overflow-hidden ">
                                                <BiUser className="w-6 h-6" />
                                            </div>
                                            <p className="px-3 group-hover:underline">Account</p>
                                        </div>
                                    </a>
                                </Link>
                            </li>
                            <li >
                                <Link href="">
                                    <a className="block group">
                                        <div className="flex items-center">
                                            <div className="relative w-[2.25rem] h-[2.25rem] flex justify-center items-center  rounded-md overflow-hidden ">
                                                <BiHelpCircle className="w-6 h-6" />
                                            </div>
                                            <p className="px-3 group-hover:underline">Help Center</p>
                                        </div>
                                    </a>
                                </Link>
                            </li>

                        </ul>
                        <ul className="p-4">
                            <li onClick={() => signout()}>
                                <Link href="">
                                    <a className="text-center hover:underline">
                                        <p>Sign out of Netflix</p>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header