import { NextComponentType } from "next"
import Image from "next/image"
import Link from "next/link"
// react icons
import { FaPlusCircle } from "react-icons/fa"

const ProfilesGate: NextComponentType = () => {
    return (
        <div className="py-3 px-4 w-full h-screen flex flex-col    bg-black">
            {/* netflix logo */}
            <div className="relative  w-[clamp(104px,16vw,160px)]  lg:w-40  h-16 text-netflix-red ">
                <Image src="/assets/icons/netflix_logo.svg" alt="nf-logo" layout="fill" />
            </div>
            {/* profiles container */}
            <div className="w-full flex-1 flex flex-col justify-center items-center space-y-16 ">
                <h2 className="text-6xl font-semibold text-white">Who&apos;s watching?</h2>
                {/* profiles list */}
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0  sm:space-x-8">
                    {/* profile - 1 */}
                    <Link href="/switch-profile">
                        <a className="block text-gray-500 group cursor-pointer space-y-3">
                            <div className="relative w-20 md:w-24 lg:w-32 aspect-square rounded-md overflow-hidden border-gray-300 border-2">
                                <Image
                                    src="/assets/images/profile_img1.png"
                                    alt="profile image"
                                    layout="fill"
                                />
                            </div>
                            <p className="text-center text-gray-300 font-semibold">yash</p>
                        </a>
                    </Link>
                    {/* profile - 2  */}
                    <Link href="/switch-profile">
                        <a className="block text-gray-500 group cursor-pointer space-y-3">
                            <div className="relative  w-20 md:w-24 lg:w-32 aspect-square rounded-md overflow-hidden border-gray-300 group-hover:border-2">
                                <Image
                                    src="/assets/images/profile_img2.png"
                                    alt="profile image"
                                    layout="fill"
                                />
                            </div>
                            <p className="text-center group-hover:text-gray-300 group-hover:font-semibold">ankur</p>

                        </a>
                    </Link>
                    {/* profile - 3  */}
                    <Link href="/switch-profile">
                        <a className="block text-gray-500 group  cursor-pointer space-y-3">
                            <div className="relative w-20 md:w-24 lg:w-32 aspect-square rounded-md overflow-hidden border-gray-300 group-hover:border-2">
                                <Image
                                    src="/assets/images/profile_img3.png"
                                    alt="profile image"
                                    layout="fill"
                                />
                            </div>
                            <p className="text-center group-hover:text-gray-300 group-hover:font-semibold">children</p>

                        </a>
                    </Link>
                    {/* add new profile */}
                    <div className="text-gray-500 group cursor-pointer space-y-3">
                        <div className="relative  w-20 md:w-24 lg:w-32 aspect-square flex justify-center items-center  rounded-md overflow-hidden border-gray-300 group-hover:border-2 group-hover:bg-gray-300">
                            <FaPlusCircle className="w-full h-full" />
                        </div>
                        <p className="text-center group-hover:text-gray-300 group-hover:font-semibold">New Profile</p>

                    </div>
                </div>
                <button className="px-4 py-1 border-gray-500 border  text-gray-500 hover:border-gray-300 hover:text-gray-300">Manage Profiles</button>
            </div>
        </div>
    )
}

export default ProfilesGate



