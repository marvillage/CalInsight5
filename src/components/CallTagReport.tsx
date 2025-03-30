// CallTagReport.tsx
import React, { useEffect, useState } from 'react';
import { complianceMetrics } from '../../tag'; // Adjust the path as necessary
import './CallTagReport.scss';

interface Tag {
  tag: string;
  description: string;
}

interface Call {
  customerName: string;
  callDate: string;
  callTime: string;
  tags: Tag[];
}

interface Metrics {
  name: string;
  overallComplianceScore: number;
  calls: Call[];
}

const CallTagReport: React.FC = () => {
  const [metrics, setMetrics] = useState<Metrics | null>(null);

  useEffect(() => {
    // Simulate fetching data
    const fetchMetrics = () => {
      setMetrics(complianceMetrics["Shahswat"]); // Fetch the relevant data
    };

    fetchMetrics(); // Call the function to fetch metrics
  }, []);

  if (!metrics) {
    return <div>Loading...</div>; // Show loading state while fetching
  }

  return (
    <div className="call-tag-report">
      <h1>Call Tag Report for {metrics.name}</h1>
      <h2>Overall Compliance Score: {metrics.overallComplianceScore}</h2>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Call Date</th>
            <th>Call Time</th>
            <th>Tag</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {metrics.calls.map((call: Call, index: number) =>
            call.tags.map((tag: Tag, tagIndex: number) => (
              <tr key={`${index}-${tagIndex}`}>
                {tagIndex === 0 && (
                  <>
                    <td rowSpan={call.tags.length}>{call.customerName}</td>
                    <td rowSpan={call.tags.length}>{call.callDate}</td>
                    <td rowSpan={call.tags.length}>{call.callTime}</td>
                  </>
                )}
                <td>{tag.tag}</td>
                <td>{tag.description}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CallTagReport;
