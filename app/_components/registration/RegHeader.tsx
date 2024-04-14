import Image from "next/image"
import BSU_FSLogo from '../BSU_FSLogo';

export default function RegHeader() {
  return (
    <div className="w-full relative h-auto">
      <div className="relative flex-1 ml-20 mt-14">
        <Image className=""
        src="/logos/FRAMES_title-logo.png"
        alt="FRAMES title logo"
        width={240}
        height={0} />
    </div>

      <div className="">
        <BSU_FSLogo className="right-0 top-2" />
      </div>

    </div>
  )
};