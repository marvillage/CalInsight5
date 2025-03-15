import React from 'react';
import { callQualityData } from '../../callquality';
import './CallQualityAnalysis.scss';

const CallQualityAnalysis = () => {
  return (
    <div className="call-quality-analysis">
      <h1>Call Recording Quality Analysis</h1>
      {Object.keys(callQualityData).map((device) => (
        <div key={device}>
          <h2>{device}</h2>
          {Object.keys(callQualityData[device]).map((date) => (
            <div key={date} className="date-section">
              <h3>Date: {date}</h3>
              {Object.keys(callQualityData[device][date]).map((time) => {
                const call = callQualityData[device][date][time];
                return (
                  <div key={time} className="call-entry">
                    <h4>Time: {time}</h4>
                    <p>Name: {call.name}</p>
                    <p>Duration: {call.duration}</p>
                    <div className="quality-metrics">
                      <p>Jitter: {call.recordingQuality.jitter}</p>
                      <p>Latency: {call.recordingQuality.latency}</p>
                      <p>Packet Loss: {call.recordingQuality.packetLoss}</p>
                      <p>MOS: {call.recordingQuality.MOS}</p>
                      <p>SNR: {call.recordingQuality.SNR}</p>
                      <p>Bandwidth Usage: {call.recordingQuality.bandwidthUsage}</p>
                      <p>Call Completion Time: {call.recordingQuality.callCompletionTime}</p>
                      <p>RTT: {call.recordingQuality.RTT}</p>
                      <p>Audio Clarity: {call.recordingQuality.audioClarity}</p>
                      <p>Interruptions: {call.recordingQuality.interruptions}</p>
                      <p>Response Time: {call.recordingQuality.responseTime}</p>
                    </div>
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

export default CallQualityAnalysis;
