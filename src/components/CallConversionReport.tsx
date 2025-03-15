import React, { useState, useEffect } from 'react';
import { callBackData, CallBackData } from '../../CallBackData'; // Adjust path as needed
import './CallConversionReport.scss';

const CallBackReport: React.FC = () => {
  const [callbacks, setCallbacks] = useState<CallBackData[]>([]);

  useEffect(() => {
    // Simulate fetching data
    setCallbacks(callBackData);
  }, []);

  return (
    <div className="callback-report">
      <h1>Callback Report</h1>
      <div className="callback-cards">
        {callbacks.map((callback, index) => (
          <div key={index} className="callback-card">
            <h3>{callback.customerName}</h3>
            <p><strong>Employee Name:</strong> {callback.employeeName}</p>
            <p><strong>Call Time:</strong> {callback.callTime}</p>
            <p><strong>Call Duration:</strong> {callback.callDuration}</p>
            <p><strong>Call Reason:</strong> {callback.callReason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallBackReport;
