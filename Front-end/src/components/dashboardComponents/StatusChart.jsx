import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import 'chartjs-adapter-moment'; // Thư viện adapter để xử lý thời gian
import { Line } from 'react-chartjs-2'; // Thành phần Line để vẽ biểu đồ đường
import '../../styles/StatusChart.css'; // Import CSS

// Đăng ký các thành phần của ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

// Component StatusChart nhận vào prop allData
const StatusChart = ({ allData }) => {
  // Thiết lập các tùy chọn cho biểu đồ
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: 'black',
        },
      },
      title: {
        display: true,
        text: `State Chart`,
        color: 'black',
      },
    },
    scales: {
      x: {
        type: 'time', // Trục x là trục thời gian
        time: {
          tooltipFormat: 'MM/DD/YYYY',
          displayFormats: {
            millisecond: 'HH:mm:ss',
            second: 'HH:mm:ss',
            minute: 'HH:mm:ss',
            hour: 'HH:mm:ss',
            day: 'HH:mm:ss',
            week: 'HH:mm:ss',
            month: 'HH:mm:ss',
            quarter: 'HH:mm:ss',
            year: 'HH:mm:ss',
          },
        },
        title: {
          color: 'black',
          text: 'Date',
        },
        ticks: {
          color: 'black',
        },
      },
      y: {
        title: {
          color: 'black',
        },
        ticks: {
          color: 'black',
        },
      },
    },
  };

  // Tạo dữ liệu cho các cảm biến từ allData
  const temperatureData = allData.map((data) => ({
    timestamp: data.date,
    value: data.temperatureData,
  }));

  const humidityData = allData.map((data) => ({
    timestamp: data.date,
    value: data.humidityData,
  }));

  const brightnessData = allData.map((data) => ({
    timestamp: data.date,
    value: data.brightnessData,
  }));

  // Lấy danh sách các nhãn từ dữ liệu nhiệt độ
  const labels = temperatureData.map((data) => data.timestamp);

  // Tạo đối tượng dữ liệu cho biểu đồ
  const data = {
    labels,
    datasets: [
      {
        label: 'Temperature',
        data: temperatureData.map((d) => d.value),
        borderColor: 'red',
        backgroundColor: 'red',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Humidity',
        data: humidityData.map((d) => d.value),
        borderColor: 'blue',
        backgroundColor: 'blue',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Brightness',
        data: brightnessData.map((d) => d.value),
        borderColor: 'yellow',
        backgroundColor: 'yellow',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Trả về JSX để hiển thị biểu đồ
  return (
    <div className="chart">
      <Line options={options} data={data} />
    </div>
  );
};

export default StatusChart;
