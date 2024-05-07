import Image from 'next/image';
import Link from 'next/link';

export default function SideBar() {
  return (
    <div className="fixed h-full left-0 top-0 bg-background" style={{ height: '100vh', width: '20%' }}>
      <div className="flex flex-col items-center bg-gradient-to-b from-red-900 to-red-600 h-full">
        <div className="mt-10">
          <Image width={165} height={46} src="/logos/FRAMES_title-logo.png" alt="FRAMES Logo" />
          <ul className="flex flex-col mt-8 gap-8">
            <li>
              <Link href="/dashboard" passHref >
                <div className="text-gray-300 hover:text-white hover:font-semibold cursor-pointer">Dashboard</div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/graphs-charts" passHref>
                <div className="text-gray-300 hover:text-white hover:font-semibold cursor-pointer">Graphs and Charts</div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/visitor-history" passHref>
                <div className="text-gray-300 hover:text-white hover:font-semibold cursor-pointer">Visitor History</div>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/library-schedule" passHref>
                <div className="text-gray-300 hover:text-white hover:font-semibold cursor-pointer">Library Schedule</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
