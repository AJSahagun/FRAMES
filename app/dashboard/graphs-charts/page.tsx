import ChartWrapper from "@/app/_components/dashboard-page/ChartWrapper";
import SideBar from "@/app/_components/dashboard-page/SideBar";
import { poppins } from "@/app/fonts";

export default function GraphsCharts() {
  const chartOptions: echarts.EChartOption = {
    // Your chart options here
    legend: {},
    tooltip: {},
    dataset: {
      dimensions: ['date', 'Sum of new visitors', 'Sum of returning visitors'],
      source: [
        { date: 'Mar 17', 'Sum of new visitors': 415, 'Sum of returning visitors': 129 },
        { date: 'Mar 16', 'Sum of new visitors': 405, 'Sum of returning visitors': 117 },
        { date: 'Mar 15', 'Sum of new visitors': 434, 'Sum of returning visitors': 134 },
        { date: 'Mar 14', 'Sum of new visitors': 415, 'Sum of returning visitors': 118 },
        { date: 'Mar 13', 'Sum of new visitors': 422, 'Sum of returning visitors': 145 },
        { date: 'Mar 12', 'Sum of new visitors': 425, 'Sum of returning visitors': 139 },
        { date: 'Mar 11', 'Sum of new visitors': 426, 'Sum of returning visitors': 138 }
      ],
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [{ type: 'bar' }, { type: 'bar' }],
  };

  return (
    <>
    <SideBar/>
    <div className="w-4/5 ml-80">
      
      <div className="flex flex-row">
        <div className="w-2/3">
        <h1 className={`${poppins.className} inline-flex text-primary font-semibold text-5xl pt-7 pl-7`}>
          Graphs and Charts
        </h1>
        </div>

        <div className="w-1/3 flex justify-end items-end mr-20">
          <select className="bg-slate-200 rounded-lg text-sm border-none shadow-sm py-2 mr-6">
            <option value="default">Month</option>
          </select>

          <button className="inline-flex bg-slate-200 px-4 py-2 rounded-lg text-sm shadow-sm ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
          <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>

            Export </button>
        </div>

      </div>

      <div className="flex flex-row">
        <div className="flex-col">
          <div>
          <ChartWrapper options={chartOptions} title="" />

          </div>
          <div>
            
          </div>

        </div>

      </div>

    </div>
    </>
  );

}