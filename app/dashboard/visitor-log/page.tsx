import SideBar from "@/app/_components/dashboard-page/SideBar";
import { noto_sans, poppins } from "@/app/fonts";
import Image from "next/image";

export default function VisitorHistory() {
    return (
        <>
        <SideBar />
        <div className="flex w-full" style = {{width: '100%'}}>
            <div className="left-column" style={{ width: '20%' }}>

            </div>

            <div className= {`${poppins.className} right-column ml-10 mt-5 mr-10}`} style={{ width: '80%' }}>
                <div>
                    <h1 style = {{color: '#C30D26', fontWeight: '600', fontSize: '45px'}}> Visitor History </h1>
                </div>
                {/* Search bar */}
                <div className= "flex justify-center mt-8">
                            <input
                                type="text"
                                placeholder="Search Student"
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-600"
                                style={{ width: '50%' , backgroundColor: '#F7F2F1'}}
                            />
                </div>

                <div className=  {`${poppins.className} flex rounded-lg mx-4 mt-10 pb-10 mr-10 ml-20 bg-white shadow-md`} id="card"
                     style = {{width: '80%' , height: '350px'}}>
                    <div className = "w-full flex flex-row mt-5 ml-5 mr-5 pl-5 gap-5">
                        <div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="120"
                                    height="120"
                                    viewBox="0 0 300 300"
                                    fill="none"
                                >
                                    <rect width="100%" height="100%" fill="#DDD" />
                                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
                                        Photo Placeholder
                                    </text>
                                </svg>
                            </div>
                        <div className = "flex flex-col w-full mt-5">
                            <div className = ""style = {{fontWeight: '600', fontSize: '35px'}}>
                                <h1> Placeholder Name</h1>
                            </div>
                            <div className = "flex flex-row " style = {{fontWeight: '500', fontSize: '15px', width: '80%'}}>
                                <h1 style = {{width: '40%'}}> College Program </h1>
                                <h1 style = {{width: '40%'}}> College Dept</h1>
                            </div>
                            <div style = {{fontWeight: '500', fontSize: '15px'}}>
                                <h1> Sr Code </h1>
                            </div>
                        </div>


                    </div>

                </div>
                

            </div>
        </div>
        </>
    );
}
