// FeedbackReport.tsx
import React, { useEffect, useState } from 'react';
import { customerFeedback } from '../../customerFeedback'; // Adjust the path as necessary
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import './FeedbackReport.scss'; // Import the updated SCSS

interface FeedbackData {
  customerName: string;
  contactNumber: string;
  email: string;
  feedback: {
    understandingNeeds: string;
    recommendationLikelihood: string;
    issueResolution: string;
    friendliness: string;
    issueResolved: string;
    generalFeedback: string;
    suggestions: string;
  };
}

type Rating = 'Excellent' | 'VeryGood' | 'Good' | 'Average' | 'Poor';
type MetricKey = 'understandingNeeds' | 'recommendationLikelihood' | 'issueResolution' | 'friendliness';

interface FeedbackMetrics {
  [key: string]: {
    [rating in Rating]: number;
  };
}

const FeedbackReport: React.FC = () => {
  const [feedbackData, setFeedbackData] = useState<FeedbackData[]>([]);

  useEffect(() => {
    setFeedbackData(customerFeedback);
  }, []);

  // Prepare data for charts
  const feedbackMetrics: FeedbackMetrics = {
    understandingNeeds: { Excellent: 0, VeryGood: 0, Good: 0, Average: 0, Poor: 0 },
    recommendationLikelihood: { Excellent: 0, VeryGood: 0, Good: 0, Average: 0, Poor: 0 },
    issueResolution: { Excellent: 0, VeryGood: 0, Good: 0, Average: 0, Poor: 0 },
    friendliness: { Excellent: 0, VeryGood: 0, Good: 0, Average: 0, Poor: 0 },
  };

  feedbackData.forEach(feedback => {
    (Object.keys(feedbackMetrics) as MetricKey[]).forEach(key => {
      const rating = feedback.feedback[key] as Rating;
      feedbackMetrics[key][rating]++;
    });
  });

  // Convert feedbackMetrics to array for BarChart
  const dataForBarChart = Object.keys(feedbackMetrics).map(key => ({
    metric: key,
    ...feedbackMetrics[key],
  }));

  // Pie chart data preparation
  const pieData = [
    { name: 'Excellent', value: feedbackMetrics.understandingNeeds.Excellent },
    { name: 'Very Good', value: feedbackMetrics.understandingNeeds.VeryGood },
    { name: 'Good', value: feedbackMetrics.understandingNeeds.Good },
    { name: 'Average', value: feedbackMetrics.understandingNeeds.Average },
    { name: 'Poor', value: feedbackMetrics.understandingNeeds.Poor },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF5555'];

  return (
    <div className="feedback-report">
      <h1>Customer Feedback Report</h1>

      <h2>Pie Chart of Feedback</h2>
      <PieChart width={500} height={500}>
        <Pie
          data={pieData}
          cx={250}
          cy={250}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
          label
        >
          {pieData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <h2>Bar Chart of Feedback Metrics</h2>
      <BarChart width={800} height={400} data={dataForBarChart}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="metric" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Excellent" fill="#0088FE" />
        <Bar dataKey="VeryGood" fill="#00C49F" />
        <Bar dataKey="Good" fill="#FFBB28" />
        <Bar dataKey="Average" fill="#FF8042" />
        <Bar dataKey="Poor" fill="#FF5555" />
      </BarChart>
    </div>
  );
};

export default FeedbackReport;
