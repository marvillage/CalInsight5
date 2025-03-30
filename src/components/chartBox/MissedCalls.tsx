// MissedCalls.tsx
import React from 'react';
import { missedCallData } from '../../missedcallData'; // Adjust the path as necessary
import "./missedcall.scss";

interface CallData {
  callDate: string;
  callDuration: string;
  callTime: string;
  callType: string;
  contactName: string;
  phNumber: string;
}

interface MissedCallData {
  [device: string]: {
    [date: string]: {
      [time: string]: CallData;
    };
  };
}

const MissedCalls: React.FC = () => {
  const typedData = missedCallData as MissedCallData;
  
  return (
    <div className="missed-calls">
      <h2>Missed Calls</h2>
      {Object.keys(typedData).map((device) => (
        <div key={device} className="device-section">
          <h3>{device}</h3>
          {Object.keys(typedData[device]).map((date) => (
            <div key={date} className="date-section">
              <h4>{date}</h4>
              {Object.keys(typedData[device][date]).map((time) => {
                const call = typedData[device][date][time];
                return (
                  <div key={time} className="call-info">
                    <p><strong>Time:</strong> {call.callTime}</p>
                    <p><strong>Contact:</strong> {call.contactName}</p>
                    <p><strong>Phone:</strong> {call.phNumber}</p>
                    <p><strong>Type:</strong> {call.callType}</p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MissedCalls;

