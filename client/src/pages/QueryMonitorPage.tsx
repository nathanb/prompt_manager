import { useEffect, useRef } from 'react';
import { Chart, ChartItem } from 'chart.js';

export const QueryMonitorPage = () => {
  const refChart = useRef<HTMLCanvasElement>(null);
  const loadData = async () => {
    const data = await (await fetch('/data')).json();
    const ctx = refChart.current!.getContext('2d') as ChartItem;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.labels,
        datasets: [{
          label: 'Sales',
          data: data.datasets[0].data,
          backgroundColor: data.datasets[0].backgroundColor,
          borderColor: data.datasets[0].borderColor,
          borderWidth: data.datasets[0].borderWidth
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        responsive: true,
        maintainAspectRatio: false // Set to false to allow resizing
      }
    });
  };

  useEffect(() => {
    loadData().catch(console.error);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Query Monitor</h1>
        <button className="btn btn-primary">New Action</button>
      </div>

      <div className="row mt-4">
        <div className="col-md-4 mb-4">
          <canvas ref={refChart} id="barChart" width="400" height="200"></canvas>
        </div>
      </div>
    </>
  );
};
