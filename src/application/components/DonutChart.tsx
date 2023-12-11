import React from 'react'
import { Doughnut, Line } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import '../../assets/css/chart.css'
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

interface DonutChartProps {
  title : string;
}

const PieChart: React.FC<DonutChartProps> = ({title}) => {
    const data = {
        labels: ['On-Going', 'Hold', 'Finish'],
        datasets: [
          {
            data: [30, 40, 60],
            backgroundColor: ['#965353', '#5d5f9e', '#539655'],
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
            <Doughnut data={data} options={options} />
            {/* <Line data={data} options={options} /> */}
          </div>
        </div>
      );
}

export default PieChart