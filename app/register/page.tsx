import Image from "next/image"

export default function Register() {
    return (
      <div className="w-full flex h-auto">
        <div className="relative flex-1 ml-16 mt-12">
          <Image className=""
          src="/logos/FRAMES_title-logo.png"
          alt="FRAMES title logo"
          width={300}
          height={0} />
        </div>

        <div className="flex-2 w-1/3 mt-10">
          <div className="flex justify-center items-center" >
            <div className="relative w-1/4 h-10 py-7 pl-9 pr-9 mt-4 ml-6 align-middle flex flex-row justify-center items-center bg-red-700 text-white text-s shadow-inner">
            Foster Wheeler - Alangilan
            </div>
            <Image 
            className="absolute mr-44"
            src="/logos/batstateu-logo.png"
            alt="BatStateU Logo"
            width={100}
            height={100} />
          </div>
        </div>
      </div>
    )
};