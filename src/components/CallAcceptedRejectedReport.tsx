// CallAcceptedRejectedReport.tsx

import React, { useEffect, useState } from 'react';
import { callAcceptedRejectedData, CallAcceptedRejectedData } from '../../CallAcceptedRejected'; // Adjust path if necessary
import './CallAcceptedRejectedReport.scss'; // Import SCSS for styling

const CallAcceptedRejectedReport: React.FC = () => {
  const [calls, setCalls] = useState<CallAcceptedRejectedData[]>([]);

  useEffect(() => {
    // Fetching data from CallAcceptedRejected.ts
    setCalls(callAcceptedRejectedData);
  }, []);

  return (
    <div className="call-report">
      <h1>Accepted & Rejected Calls Report</h1>
      <table className="call-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Customer Name</th>
            <th>Call Status</th>
            <th>Call Time</th>
            <th>Call Duration</th>
          </tr>
        </thead>
        <tbody>
          {calls.map((call, index) => (
            <tr key={index} className={call.callStatus.toLowerCase()}>
              <td>{call.employeeName}</td>
              <td>{call.customerName}</td>
              <td>{call.callStatus}</td>
              <td>{call.callTime}</td>
              <td>{call.callDuration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CallAcceptedRejectedReport;
