import React from 'react'
import { Pie, Line } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import '../../assets/css/chart.css'
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

const PieChart: React.FC = () => {
    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            data: [30, 40, 60],
            backgroundColor: ['#fa4141', '#4141fa', '#30fc58'],
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
        width : '200px',
        height : '200px'
    }
      return (
        <div>
          <div className='chartContainer'>
            <Pie data={data} options={options} />
            {/* <Line data={data} options={options} /> */}
          </div>
        </div>
      );
}

export default PieChart