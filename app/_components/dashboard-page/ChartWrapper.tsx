'use client'
import React from 'react';
import * as echarts from 'echarts';

type ChartWrapperProps = {
  options: echarts.EChartOption;
  title: string;
};

const ChartWrapper: React.FC<ChartWrapperProps> = ({ options, title }) => {
  const chartRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const chart = echarts.init(chartRef.current!);
    chart.setOption(options);
  }, [options]);

  return (
    <div className="p-4 border border-gray-200 rounded-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div ref={chartRef} className="h-96" />
    </div>
  );
};

export default ChartWrapper;