import { NextComponentType } from "next"
import Image from "next/image"


const StoryCard: NextComponentType = () => {
  return (
    <>
      {/* cta card - 1 */}
      <div className=" 
      py-16 relative
      flex justify-center items-center
      border-border-col  border-t-8    
      bg-black text-white
      ">
        <div className="w-[75%] mx-auto flex flex-col lg:flex-row items-center  lg:justify-around">
          {/* animation card text */}
          <div className="max-w-lg flex-1 text-center lg:text-left space-y-8 lg:space-y-0">
            <h1 className="text-[clamp(32px,6vw,56px)] font-semibold">Enjoy on your TV.</h1>
            <h2 className="text-[clamp(16px,4vw,28px)] leading-snug">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
          </div>
          {/* Tv Card */}
          <TvCard />
        </div>
      </div>
      {/* cta card - 2 */}
      <div className="
        py-8 relative
        flex justify-center items-center
        border-border-col  border-t-8    
        bg-black text-white
      ">
        {/* animation card text */}
        <div className="w-[75%] mx-auto flex flex-col lg:flex-row-reverse items-center  lg:justify-around">
          <div className="max-w-xl flex-1 text-center lg:text-left space-y-8 lg:space-y-0">
            <h1 className="text-[clamp(32px,6vw,56px)] font-semibold leading-tight">Download your shows to watch offline.</h1>
            <h2 className="text-[clamp(16px,4vw,28px)] leading-snug">Save your favourites easily and always have something to watch.</h2>
          </div>
          {/* Download card */}
          <DownloadCard />
        </div>
      </div>
      {/* cta card - 3 */}
      <div className="py-16 relative
      flex justify-center items-center
      border-border-col  border-t-8    
      bg-black text-white">
        <div className="w-[75%] mx-auto flex flex-col lg:flex-row items-center  lg:justify-around space-y-8 lg:space-y-0">
          {/* animation card text */}
          <div className="max-w-lg space-y-4 flex-1 text-center lg:text-left">
            <h1 className="text-[clamp(32px,6vw,56px)] font-semibold">Watch everywhere.</h1>
            <h2 className="text-[clamp(16px,4vw,28px)] leading-snug">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
          </div>
          {/* Watch everywhere card */}
          <WatchEverywhereCard />
        </div>
      </div>
      {/* cta card - 4 */}
      <div className="py-16 relative
      flex justify-center items-center
      border-border-col  border-t-8    
      bg-black text-white">
        {/* animation card text */}
        <div className="w-[75%] mx-auto flex flex-col lg:flex-row-reverse items-center  lg:justify-around  space-y-8 lg:space-y-0">
          <div className="max-w-lg space-y-4 flex-1 text-center lg:text-left">
            <h1 className="text-[clamp(32px,6vw,56px)] font-semibold leading-tight">Create profiles for children.</h1>
            <h2 className="text-[clamp(16px,4vw,24px)] leading-snug">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
          </div>
          {/* Download card */}
          <ChildrenProfileCard />
        </div>
      </div>
    </>
  )
}

export default StoryCard

const TvCard: NextComponentType = () => {
  return <div className="
  relative 
  w-[80%] h-[38vw]
  md:w-[60%] md:h-64
  lg:w-[40%] lg:h-[22vw]
  flex justify-center items-center 
  ">
    <Image src="/assets/images/storycard_tv_img.png" alt="storycard_tv_img" layout="fill" />
    <video autoPlay src="/assets/videos/storycard_tv_animation.m4v" className="w-5/6 h-3/4" />
  </div>
}

const DownloadCard: NextComponentType = () => {
  return <div className="  relative
  w-[90%] h-[56vw]
  sm:w-[80%] sm:h-64 
  md:w-[65%] md:h-72
  lg:w-[45%] lg:h-[24rem]
  flex justify-center items-center ">
    <div className="w-full">
      <Image src="/assets/images/storycard_download_img.jpg" alt="storycard_download_img" layout="fill" />
    </div>
    {/* download card */}
    <div className="absolute px-4 w-full  sm:w-[90%]  lg:w-[75%] h-[16vw]  sm:h-20  md:h-20 bottom-4 flex justify-between items-center   border-gray-700 border  rounded-lg overflow-hidden  bg-black ">
      <div className="relative w-12 h-[85%]">
        <Image src="/assets/images/storycard_download_card_img.png" alt="download_img" layout="fill" />

      </div>
      <h4 className="px-4 flex-1 text-lg font-bold">Downloading...</h4>
      <div className="relative aspect-square  h-[40%]  sm:w-16 sm:h-16">
        <Image src="/assets/videos/storycard_download_animation.gif" alt="downloading_gif" layout="fill" />
      </div>

    </div>
  </div>
}

const WatchEverywhereCard: NextComponentType = () => {
  return <div className="  relative 
  w-[80%] h-[34vw]
  md:w-[75%] md:h-[32vw] 
  lg:w-[40%] lg:h-[22vw]
  flex justify-center items-center 
  ">
    <Image src="/assets/images/storycard_watcheverywhere_img.png" alt="storycard_watcheverywhere_img" layout="fill" />
  </div>
}

const ChildrenProfileCard: NextComponentType = () => {
  return <div className="  relative
  w-[80%] h-[38vw]
  md:w-[60%] md:h-64
  lg:w-[40%] lg:h-[22vw]
  flex justify-center items-center 
  ">
    <Image src="/assets/images/storycard_childprofile_img.png" alt="storycard_tv_img" layout="fill" />
  </div>
}
