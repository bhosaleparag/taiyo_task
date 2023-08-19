import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface HistoricalData {
  cases: { [date: string]: number };
  deaths: { [date: string]: number };
  recovered: { [date: string]: number };
}

interface DataPoint {
  date: string;
  cases: number;
  deaths: number;
  recovered: number;
}

const LineGraph: React.FC = () => {
  const [historicalData, setHistoricalData] = useState<HistoricalData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        setHistoricalData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const dataPoints: DataPoint[] = [];

  if (historicalData) {
    for (const date in historicalData.cases) {
      dataPoints.push({
        date,
        cases: historicalData.cases[date],
        deaths: historicalData.deaths[date],
        recovered: historicalData.recovered[date],
      });
    }
  }

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">COVID-19 Cases Over Time</h2>
      <div className="max-w-xl mx-auto">
        {historicalData ? (
          <LineChart width={800} height={400} data={dataPoints}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cases" stroke="#8884d8" />
            <Line type="monotone" dataKey="deaths" stroke="#82ca9d" />
            <Line type="monotone" dataKey="recovered" stroke="#ffc658" />
          </LineChart>
        ) : (
          <p className="text-center">Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default LineGraph;


