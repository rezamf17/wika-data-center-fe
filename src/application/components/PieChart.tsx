import React from 'react'
import { Pie, Line } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import '../../assets/css/chart.css'
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

interface PieChartProps {
  title : string;
}

const PieChart: React.FC<PieChartProps> = ({title}) => {
    const data = {
        labels: ['Admin', 'Karyawan', 'PJ Proyek', 'Member Proyek'],
        datasets: [
          {
            data: [30, 40, 60, 70],
            backgroundColor: ['#965353', '#5d5f9e', '#539655', '#539684'],
          },
        ],
      };
      const options = {
        responsive: true, // Ini akan membuat grafik menyesuaikan ukuran kontainer secara otomatis
        maintainAspectRatio: false, // Ini memungkinkan Anda untuk mengontrol aspek rasio
        legend :{
            display : true
        },
        // Anda dapat menentukan ukuran lebar dan tinggi dalam piksel
        width: 200, // Lebar dalam piksel
        height: 200, // Tinggi dalam piksel
      };
      const chartContainer = {
          width : '350px',
          height : '350px',
          marginLeft : '4em'
      }
      return (
        <div>
          <div style={chartContainer}>
            <label><b>{title}</b></label>
            <Pie data={data} options={options} />
            {/* <Line data={data} options={options} /> */}
          </div>
        </div>
      );
}

export default PieChart