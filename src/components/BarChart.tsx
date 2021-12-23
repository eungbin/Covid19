import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js'
import { Bar } from 'react-chartjs-2';
import '../css/BarChart.css';
import useAxiosGet from '../hooks/useAxiosGet';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
)

interface KoreaHistoricalData {
  country: string;
  province: string[];
  timeline: {
    cases: {
      [key: string]: number;
    };
    deaths: {
      [key: string]: number;
    };
    recovered: {
      [key: string]: number;
    };
  }
}

const options = {
  legend: {
    display: false, // label 숨기기
  },
  tooltips: {
    
  },
  category: {
    yAxes: [{
      ticks: {
        min: 0, // 스케일에 대한 최솟갓 설정, 0 부터 시작
        stepSize: 1, // 스케일에 대한 사용자 고정 정의 값
      }
    }]
  },
  responsive: true // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
}

const BarChart = () => {
  const { data } = useAxiosGet<KoreaHistoricalData>("https://disease.sh/v3/covid-19/historical/KR?lastdays=8");

  const { daysList, casesPerDays } = useMemo<{ daysList: string[]; casesPerDays: number[]; }>(() => {
    const daysList: string[] = [];
    const casesPerDays: number[] = [];
    const tempList: number[] = [];

    if (!data) {
      return { daysList, casesPerDays };
    }

    for (let i in data.timeline.cases) {
      daysList.push(i);
      tempList.push(data.timeline.cases[i]);
    }

    daysList.shift();

    for (let i = 0; i < tempList.length - 1; i++) {
      casesPerDays.push(tempList[i + 1] - tempList[i]);
    }

    return { daysList, casesPerDays };
  }, [data]);

  const inputData = {
    labels: daysList,
    datasets: [
      {
        label: '최근 일주일 간 일별 확진자 수',
        backgroundColor: 'rgba(144,125,162,0.6)',
        borderColor: 'rgba(144,125,162,0.6)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(144,125,162,1)',
        hoverBorderColor: 'rgba(144,125,162,1)',
        data: casesPerDays,
      }
    ]
  };

  return (
    <div className="chart" id="canvas">
      <span className="chartTitle">일별 확진자 그래프</span>
      <Bar data={inputData} options={options} />
    </div>
  );
};

export default BarChart;