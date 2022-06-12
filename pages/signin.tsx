import React, { useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
// context
import { useAuth } from '../hooks/AuthContext'
// custom components
import Footer from '../components/shared/Footer'
// import types
import { CredentialsType } from '../types'

const SignIn: NextPage = () => {
    const [credentials, setCredentials] = useState<CredentialsType>({ email: "", password: "" })
    const { loading, signin } = useAuth()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials((prevVal) => {
            return { ...prevVal, [e.target.name]: e.target.value }
        })
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        signin(credentials)
    }

    if (loading) return <p>Loading</p>

    return (
        <>
            <div className="pb-4 relative w-full h-fit  lg:h-screen flex flex-col"
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
                </header>
                {/* sign in form */}
                <div className="flex-1 flex  justify-center">
                    <form
                        className="
                        w-[75vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw]
                        py-4 px-8  md:py-12 md:px-16
                        flex flex-col
                        bg-black/75
                        space-y-8
                        "
                        onSubmit={(e) => handleSubmit(e)}
                    >
                        <h2 className='text-white text-3xl font-semibold'>Sign In</h2>
                        <div className="flex flex-col">
                            <input type="email" name="email" className="p-3  rounded-md " placeholder="Email address" value={credentials.email!} onChange={(e) => handleChange(e)} />
                            <input type="password" name="password" className="p-3 mt-4 rounded-md" placeholder='Password' value={credentials.password!} onChange={(e) => handleChange(e)} />
                            <button className="mt-12 py-4  rounded-md bg-netflix-red text-white f">Sign In</button>
                            <div className="mt-2 flex justify-between items-center text-[#737373]">
                                <input type="checkbox" name="rememberme" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="rememberme" className="flex-1 px-2">Remember Me</label>
                                <p>Need Help</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-[#737373]">
                                New to Netflix?
                                <Link href="/"><a className="text-white hover:underline">Sign up now</a></Link>
                            </p>
                            <p className="text-[#8c8c8c] text-sm">
                                This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.
                                <Link href="/"><a className="text-blue-600 hover:underline">Learn More</a></Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SignIn