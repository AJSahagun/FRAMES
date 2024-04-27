import BSU_FSLogo from "@/app/_components/BSU_FSLogo";
import Link from "next/link";
import Image from "next/image";
import { poppins } from "@/app/fonts";

export default function Face() {
  return (
    <div className="w-full min-h-screen relative bg-background">
      <div className="w-full flex md:justify-start">

        {/* link needs minor fix*/}
        <Link href="/" className="flex w-full justify-center md:justify-start">

        <Image className= "w-3/5 ml-2 pt-16 min-[425px]:w-3/5 min-[425px]:mb-3 md:w-1/3 md:pt-14 md:ml-16 lg:w-2/5 lg:pl-18 xl:pl-20 xl:w-1/4 xl:pt-10"
        src="/logos/FRAMES_title-logo.png"
        alt="FRAMES title logo"
        width={300}
        height={0}
        />
        </Link>

        <BSU_FSLogo className="top-0 right-0 absolute hidden md:block md:top-0 xl:top-0" />
      </div>

      <div className="w-full flex h-[550px]">

        <div className="w-1/2 h-full ">
          <div className=" w-3/4 mx-auto border-2 border-dashed border-primary fill-gray-400">text

          </div>

        </div>

        <div className="w-1/2 flex items-end ">
          <input type="number" placeholder="SR-CODE"
          className={`${poppins.className} w-auto h-14 mx-auto  text-3xl tracking-wide text-white text-center bg-accent rounded-xl shadow-md placeholder:text-gray-400 `} />

        </div>
      </div>

    </div>
  );
}