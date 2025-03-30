// CallLog.tsx
import React, { useEffect, useState } from 'react';
import { callLogData } from '../../data/callLog';
import './CallLog.scss'; // Ensure the SCSS path is correct
import { CallData, CallHistoryData } from '../../types/firebase';

interface CallLogData {
  [device: string]: {
    [date: string]: {
      [time: string]: CallData;
    };
  };
}

const CallLog: React.FC = () => {
  const [data, setData] = useState<CallLogData | null>(null);

  useEffect(() => {
    setData(callLogData as unknown as CallLogData);
  }, []);

  if (!data) {
    return <div>Loading call log data...</div>;
  }

  return (
    <div className="callLog">
      <h1>Call Log</h1>
      {Object.entries(data).map(([device, dates]) => (
        <div key={device} className="deviceSection">
          <h2>Device: {device}</h2>
          {Object.entries(dates).map(([date, times]) => (
            <div key={date} className="dateSection">
              <h3>Date: {date}</h3>
              {Object.entries(times).map(([time, call]) => (
                <div key={time} className="callSection">
                  <h4>Time: {time}</h4>
                  <p>Contact: {call.contactName}</p>
                  <p>Phone: {call.phNumber}</p>
                  <p>Duration: {call.callDuration}</p>
                  <p>Type: {call.callType}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CallLog;


