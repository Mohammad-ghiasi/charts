"use client"

import { useState } from 'react';
import { AgCharts } from 'ag-charts-react';

const BarChart = () => {
  const [chartOptions1, setChartOptions1] = useState<any>({
    title: {
      text: 'Histogram of Ice Cream Sales',
    },
    data: [
      { sales: 150000 },
      { sales: 200000 },
      { sales: 250000 },
      { sales: 300000 },
      { sales: 350000 },
      { sales: 400000 },
      { sales: 450000 },
      { sales: 500000 },
      { sales: 550000 },
      { sales: 600000 },
      { sales: 650000 },
      { sales: 700000 },
    ],
    series: [
      {
        type: 'histogram',
        xKey: 'sales',
        binCount: 5,
      },
    ],
  });

  const [chartOptions2, setChartOptions2] = useState<any>({
    data: [
      { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
      { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
      { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
      { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
      { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
      { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
    ],
    series: [
      {
        type: 'bar',
        xKey: 'month',
        yKey: 'iceCreamSales',
        fill: '#617bff',
        stroke: '#d84315',
      },
    ],
  });

  const [chartOptions3, setChartOptions3] = useState<any>({
    data: [
      { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
      { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
      { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
      { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
      { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
      { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
    ],
    series: [
      {
        type: 'pie',
        angleKey: 'iceCreamSales',
        labelKey: 'month',
      },
    ],
  });

  const [chartOptions4, setChartOptions4] = useState<any>({
    data: [
      { month: 'Jan', avgTemp: 2.3, iceCreamSales: 162000 },
      { month: 'Mar', avgTemp: 6.3, iceCreamSales: 302000 },
      { month: 'May', avgTemp: 16.2, iceCreamSales: 800000 },
      { month: 'Jul', avgTemp: 22.8, iceCreamSales: 1254000 },
      { month: 'Sep', avgTemp: 14.5, iceCreamSales: 950000 },
      { month: 'Nov', avgTemp: 8.9, iceCreamSales: 200000 },
    ],
    series: [
      {
        type: 'area',
        xKey: 'month',
        yKey: 'iceCreamSales',
      },
    ],
  });

  return (
    <div className='grid grid-cols-2 gap-10'>
      <AgCharts options={chartOptions1} />
      <AgCharts options={chartOptions2} />
      <AgCharts options={chartOptions3} />
      <AgCharts options={chartOptions4} />
    </div>
  );
};

export default BarChart;
