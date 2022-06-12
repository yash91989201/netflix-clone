import { NextComponentType } from "next"
import Image from "next/image"
import Link from "next/link"
// importing react icons
import { MdArrowForwardIos } from "react-icons/md"
const Banner: NextComponentType = () => {
    return (
        <div className="relative w-full h-[75vh] md:h-[90vh] lg:h-screen flex flex-col"
            style={{ backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.9) 100%)" }}
        >
            {/* banner image */}
            <div className="-z-10 w-full h-fit" >
                <Image src="/assets/images/banner_image.jpg" alt="nf-banner-image" layout="fill" objectFit="cover" />
            </div>
            {/* header */}
            <header className="w-full h-20 px-[4vw] lg:px-14 lg:py-12 flex justify-between  items-center ">
                {/* netflix logo */}
                <div className="relative w-[clamp(104px,16vw,160px)]  lg:w-40  h-16 text-netflix-red ">
                    <Image src="/assets/icons/netflix_logo.svg" alt="nf-logo" layout="fill" />
                </div>
                {/* user actions */}
                <div className="text-white text-sm space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8">
                    <select name="select-language" className="px-2 py-1  sm:px-5 sm:py-2   bg-[rgba(0,0,0,0.4)] border">
                        <option value="eng">English</option>
                        <option value="hin">Hindi</option>
                    </select>
                    <Link href="/signin">
                        <a className="px-2 py-1  sm:px-5 sm:py-2 sm:rounded-sm  lg:rounded-md bg-netflix-red text-md">Sign In</a>
                    </Link>
                </div>
            </header>
            {/* value proposition */}
            <div className="max-w-3xl mx-auto flex-1  flex flex-col justify-center items-center text-white space-y-2 md:space-y-4">
                <h1 className="text-[clamp(30px,6vw,56px)] text-center font-semibold leading-tight" >Unlimited movies, TV shows and more.</h1>
                <h2 className="text-2xl md:text-3xl text-center" >Watch anywhere. Cancel anytime.</h2>
                {/* sign up form  */}
                <SignUpForm />
            </div>
        </div>
    )
}

export default Banner

export const SignUpForm: NextComponentType = () => {
    return <form className="w-full px-4 space-y-4 ">
        <h3 className=" text-center">Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className="w-full flex flex-col md:flex-row items-center space-y-4 md:space-y-0 ">
            <input
                type="email"
                name="email"
                className="w-[90%] sm:w-4/5 md:w-auto mr-1  p-3 py-2 md:p-6 md:flex-1 text-black"
                placeholder="Email address"
            />
            <button
                type="submit"
                className="p-3 py-2 md:px-6 md:py-4 flex justify-center items-center  bg-netflix-red space-x-2"
            >
                <p className="text-[clamp(16px,4vw,28px)]">Get Started</p>
                <MdArrowForwardIos />
            </button>
        </div>
    </form>
}