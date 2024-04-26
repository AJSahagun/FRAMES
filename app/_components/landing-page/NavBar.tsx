import Image from "next/image";
import Link from "next/link";
import { poppins } from "../../fonts";

export default function NavBar() {
    return (
        <div className="w-full mx-auto max-w-screen-xl px-8 sm:px-10 lg:px-12">
            <div className="flex h-16 items-center justify-between">
                <div className="flex-1 md:flex md:items-center md:gap-12">
                    <Link className="block text-teal-600" href="/">
                    <span className="sr-only">Home</span>
                    <Image width={165} height={46} src="/logos/FRAMES_title-logo.png" alt="" />
                    </Link>
                </div>

                <div className="md:flex md:items-center md:gap-12">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className={`${poppins.className} font-regular flex items-center gap-16 text-sm`}>
                            <li>
                            <Link className="text-gray-500 transition hover:text-gray-500/75" href="/"> Home </Link>
                            </li>

                            <li>
                            <Link className="text-gray-500 transition hover:text-gray-500/75" href="/login"> Dashboard </Link>
                            </li>

                            <li>
                            <Link className="text-gray-500 transition hover:text-gray-500/75" href="/"> About Us </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                            <Link
                            className={`${poppins.className} rounded-md bg-gradient-to-r from-red-950 to-red-600 px-5 py-2.5 text-sm font-medium text-white shadow uppercase`}
                            href="/register"
                            >
                            Register
                            </Link>
                        </div>

                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}