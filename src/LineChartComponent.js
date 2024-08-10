// LineChartComponent.js
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', seriesA: 60, seriesB: 30, seriesC: 90 },
  { name: 'Feb', seriesA: 30, seriesB: 60, seriesC: 30 },
  { name: 'Mar', seriesA: 60, seriesB: 0, seriesC: 120 },
  { name: 'Apr', seriesA: 0, seriesB: 30, seriesC: 60 },
  { name: 'May', seriesA: 60, seriesB: 0, seriesC: 30 },
  { name: 'Jun', seriesA: 0, seriesB: 30, seriesC: 60 },
  { name: 'Jul', seriesA: 30, seriesB: 60, seriesC: 90 },
  { name: 'Aug', seriesA: 60, seriesB: 30, seriesC: 90 },
  { name: 'Sep', seriesA: 60, seriesB: 0, seriesC: 60 },
  { name: 'Oct', seriesA: 30, seriesB: 120, seriesC: 90 },
  { name: 'Nov', seriesA: 60, seriesB: 30, seriesC: 90 },
  { name: 'Dec', seriesA: 60, seriesB: 30, seriesC: 90 },
];

const LineChartComponent = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="seriesA" stroke="#0088FE" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="seriesB" stroke="#FF8042" />
      <Line type="monotone" dataKey="seriesC" stroke="#00C49F" />
    </LineChart>
  </ResponsiveContainer>
);

export default LineChartComponent;
