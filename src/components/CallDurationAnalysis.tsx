import React from "react";
import { callStats } from "../../callStats"; // Adjust the path as needed
import "./CallStats.scss";

const CallStatsDetails = () => {
    // Function to format seconds into "minutes:seconds"
    const formatDuration = (totalSeconds: number) => {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      return `${minutes}m ${seconds}s`; // Returning formatted string
    };
  
    return (
      <div className="callStatsDetails">
        <h1>Call Statistics</h1>
        
        <div className="summary">
          <div className="statItem">
            <h3>Total Calls (Morning Shift)</h3>
            <p>{callStats.morningShift.totalCalls} calls</p>
            <p>Duration: {formatDuration(callStats.morningShift.totalDurationSec)}</p>
          </div>
          <div className="statItem">
            <h3>Total Calls (Evening Shift)</h3>
            <p>{callStats.eveningShift.totalCalls} calls</p>
            <p>Duration: {formatDuration(callStats.eveningShift.totalDurationSec)}</p>
          </div>
          <div className="statItem">
            <h3>Total Calls (Night Shift)</h3>
            <p>{callStats.nightShift.totalCalls} calls</p>
            <p>Duration: {formatDuration(callStats.nightShift.totalDurationSec)}</p>
          </div>
        </div>
  
        <div className="shiftDetails">
          <h2>Peak Hour: {callStats.peakHour}h</h2>
          <h2>Average Call Duration: {formatDuration(callStats.averageCallDurationSec)}</h2>
        </div>
  
        <div className="durationList">
          <h2>Duration by Date</h2>
          <ul>
            {Object.entries(callStats.durationByDate).map(([date, duration]) => (
              <li key={date}>
                {date}: {formatDuration(duration)} 
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default CallStatsDetails;