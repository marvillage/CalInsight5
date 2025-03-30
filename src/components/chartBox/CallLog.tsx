// CallLog.tsx
import React from 'react';
import { callLogData } from '../../data/callLog';
import './CallLog.scss'; // Ensure the SCSS path is correct

interface CallData {
  name: string;
  duration: string;
}

interface CallLogData {
  [device: string]: {
    [date: string]: {
      [time: string]: CallData;
    };
  };
}

const CallLog: React.FC = () => {
  const typedData = callLogData as CallLogData;
  
  return (
    <div className="callLog">
      <h2>Call Log</h2>
      {Object.keys(typedData).map((device) => (
        <div key={device} className="device">
          <h3>{device}</h3>
          {Object.keys(typedData[device]).map((date) => (
            <div key={date} className="date">
              <h4>{date}</h4>
              {Object.entries(typedData[device][date]).map(([time, call]) => (
                <div key={time} className="callInfo">
                  <p><strong>Time:</strong> {time}</p>
                  <p><strong>Contact Name:</strong> {call.name}</p>
                  <p><strong>Duration:</strong> {call.duration}</p>
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


