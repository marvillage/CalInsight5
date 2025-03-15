// MissedCalls.tsx
import React from 'react';
import { missedCallData } from '../../missedcallData'; // Adjust the path as necessary
import "./missedcall.scss";
const MissedCalls: React.FC = () => {
  return (
    <div className="missedCalls">
      <h2>Missed Calls</h2>
      {Object.keys(missedCallData).map(device => (
        <div key={device} className="device">
          <h3>{device}</h3>
          {Object.keys(missedCallData[device]).map(date => (
            <div key={date} className="date">
              <h4>{date}</h4>
              {Object.keys(missedCallData[device][date]).map(time => {
                const call = missedCallData[device][date][time];
                return (
                  <div key={time} className="callInfo">
                    <p><strong>Time:</strong> {call.callTime}</p>
                    <p><strong>Contact Name:</strong> {call.contactName}</p>
                    <p><strong>Phone Number:</strong> {call.phNumber}</p>
                    <p><strong>Duration:</strong> {call.callDuration}</p>
                  </div>
                );
              })} {/* Closing the map for time here */}
            </div>
          ))} {/* Closing the map for date here */}
        </div>
      ))} {/* Closing the map for device here */}
    </div>
  );
};

export default MissedCalls;

