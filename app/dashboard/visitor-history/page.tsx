'use client'
import SideBar from "@/app/_components/dashboard-page/SideBar";
import { noto_sans, poppins } from "@/app/fonts";
import Link from 'next/link';

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

                <div className="flex flex-col rounded-lg mx-4 mt-10 pb-10 mr-10 bg-white shadow-md" id="card"
                     style = {{height: '350px'}}>
                    <div className = "pt-3">
                    <p className = "pt-2 pl-5"style = {{ color: '#C30D26', fontSize: '20px', fontWeight: '600'}}> Recent </p>
                    </div>
                    <div className= {`${noto_sans.className} flex rounded-sm shadow-md mt-3 pt-2 pl-5 flex-row}`} id="cardTitles" style={{ backgroundColor: '#252339', color: 'white', height: '40px', width: '100%' }}>
                        <h4 style={{width: '30%'}}> Date/Time</h4>
                        <h4 style={{width: '35%' }}> Name</h4>
                        <h4 style={{width: '30%'}}> Program</h4>
                    </div>
                    { /**Div class for the records container */}
                    <div>
                        <Link href="/dashboard/visitor-log">
                        <div
                            className={`${noto_sans.className} flex rounded-sm shadow-md mt-3 pt-2 pl-5 flex-row`}
                            id="cardTitles"
                            style={{
                            backgroundColor: 'white',
                            color: 'black',
                            fontWeight: '500',
                            height: '40px',
                            width: '100%',
                            cursor: 'pointer', 
                            transition: 'background-color 0.3s ease', 
                            }}
                        >
                        </div>
                        </Link>
                        <style jsx>{`
                        #cardTitles:hover {
                            background-color: #f0f0f0; /* Change to desired hover background color */
                        }
                        `}</style>
                    </div>

                </div>
                

            </div>
        </div>
        </>
    );
}
