import React, { useEffect, useState } from 'react';
import './CallTypeAnalysis.scss';
import { callTypeStats } from '../../CallTypeAnalysis'; // Importing callTypeStats

type CallTypeData = {
  outgoingCalls: number;
  missedCalls: number;
  totalCalls: number;
  frequentCallersCount: number;
};

const CallTypeAnalysis: React.FC = () => {
  const [callData, setCallData] = useState<CallTypeData>({
    outgoingCalls: 0,
    missedCalls: 0,
    totalCalls: 0,
    frequentCallersCount: 0,
  });

  useEffect(() => {
    // Fetching data from callTypeStats and setting the state
    setCallData({
      outgoingCalls: callTypeStats.Outgoing,
      missedCalls: callTypeStats.Missed,
      totalCalls: callTypeStats.TotalCalls,
      frequentCallersCount: Object.keys(callTypeStats.FrequentCallers).length, // Calculate number of frequent callers
    });
  }, []);

  return (
    <div className="call-type-analysis">
      <h1 className="dashboard-heading">Call Type Analysis</h1> {/* Heading */}
      <div className="call-type-container"> {/* Container for the boxes */}
        <div className="call-type-box">
          <h3>Outgoing Calls</h3>
          <p>{callData.outgoingCalls}</p>
        </div>
        <div className="call-type-box">
          <h3>Missed Calls</h3>
          <p>{callData.missedCalls}</p>
        </div>
        <div className="call-type-box">
          <h3>Total Calls</h3>
          <p>{callData.totalCalls}</p>
        </div>
        <div className="call-type-box">
          <h3>No. of Frequent Callers</h3>
          <p>{callData.frequentCallersCount}</p>
        </div>
      </div>
    </div>
  );
};

export default CallTypeAnalysis;
