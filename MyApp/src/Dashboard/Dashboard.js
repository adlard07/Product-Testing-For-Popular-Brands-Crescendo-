import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import './Dashboard.css'; // Create this CSS file for styling

const Dashboard = () => {
  const [chartData, setChartData] = useState({});
  
  useEffect(() => {
    // Fetch data from your API
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
        const response = await fetch('YOUR_API_ENDPOINT');
        const data = await response.json();

        // Process the data for the chart
        const labels = data.map(item => item.label);
        const values = data.map(item => item.value);

        // Set chart data
        setChartData({
          labels: labels,
          datasets: [
            {
              label: 'Data',
              data: values,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      {/* Navbar */}
      <div className="navbar">
        <h2>Dashboard</h2>
      </div>

      {/* Body */}
      <div className="body-container">
        <div className="chart-container">
          <Bar
            data={chartData}
            options={{
              maintainAspectRatio: false,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
