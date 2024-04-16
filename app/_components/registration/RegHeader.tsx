import Image from "next/image"
import BSU_FSLogo from '../BSU_FSLogo';

interface RegHeaderProps {
  className?: string;
}

export default function RegHeader(
  {className}: RegHeaderProps
) {
  return (
    <div className={`w-full flex flex-col-reverse ${className}`}>
      <Image className="relative flex mt-7 ml-6"
      src="/logos/FRAMES_title-logo.png"
      alt="FRAMES title logo"
      width={160}
      height={0}
      />
      
      <BSU_FSLogo className="top-0 right-0 relative" />

    </div>
  )
};