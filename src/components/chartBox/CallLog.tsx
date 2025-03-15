// CallLog.tsx
import React from 'react';
import { callLogData } from '../../callLogData'; // Ensure the import path is correct
import './CallLog.scss'; // Ensure the SCSS path is correct

const CallLog: React.FC = () => {
  return (
    <div className="callLog">
      <h2>Call Log</h2>
      {Object.keys(callLogData).map((device) => (
        <div key={device} className="device">
          <h3>{device}</h3>
          {Object.keys(callLogData[device]).map((date) => (
            <div key={date} className="date">
              <h4>{date}</h4>
              {Object.entries(callLogData[device][date]).map(([time, call]) => (
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


