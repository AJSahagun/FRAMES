'use client'

import { poppins } from "@/app/fonts";
import { useEffect, useState } from "react";


export default function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
        setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col">
      <div className={`${poppins.className} font-semibold text-primary text-6xl tabular-nums `}>
        {time.toLocaleTimeString([], {timeStyle: 'short'})}
      </div>
      <div className={`${poppins.className} font-semibold text-primary text-3xl tabular-nums `}>
        {/* insert locale date */}
        {time.toLocaleDateString([], {weekday: 'long', day: 'numeric', month: 'short'})}

      </div>

    </div>
  );
};