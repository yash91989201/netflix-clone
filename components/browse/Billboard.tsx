import Image from "next/image"

const Billboard = () => {
    return (
        <div className="relative w-full h-[60vw] lg:h-screen -z-10">
            <Image
                src="/assets/images/billboard_img.jpg"
                alt="billboard image"
                layout="fill"
            />
        </div>
    )
}

export default Billboard