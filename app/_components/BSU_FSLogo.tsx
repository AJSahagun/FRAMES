import Image from "next/image";

interface BSU_FSLogoProps {
    className?: string;
}

export default function BSU_FSLogo(
    {className}: BSU_FSLogoProps
) {
    return (
        <div className={`flex-2 w-1/2 mt-10 absolute ${className}`}>
            <div className="flex justify-center items-center" >
                <div className="md:left-1/4 lg:left-1/3 relative w-full h-10 py-7 px-9 mt-4 ml-6 align-middle flex flex-row justify-right items-center bg-primary text-white shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]">
                    <p className="text-sm md:text-base xl:pl-10 font-normal tracking-wide">Foster Wheeler - Alangilan</p>
                </div>
                <Image 
                className="absolute mr-44"
                src="/logos/batstateu-logo.png"
                alt="BatStateU Logo"
                width={100}
                height={100} />
            </div>
        </div>
    );
}