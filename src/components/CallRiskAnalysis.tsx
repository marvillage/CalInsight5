import React from 'react';
import { callRiskData } from '../../callRiskAnalysis';
import './CallRiskAnalysis.scss';

const CallRiskAnalysis = () => {
  return (
    <div className="call-risk-analysis">
      <h1>Call Risk Analysis Dashboard</h1>
      {Object.keys(callRiskData).map((device) => (
        <div key={device} className="device-section">
          <h2>Device: {device}</h2>
          {Object.keys(callRiskData[device]).map((date) => (
            <div key={date} className="date-section">
              <h3>Date: {date}</h3>
              {Object.keys(callRiskData[device][date]).map((time) => {
                const call = callRiskData[device][date][time];
                return (
                  <div key={time} className="call-card">
                    <h4>Time: {time}</h4>
                    <p><strong>Name:</strong> {call.name}</p>
                    <p><strong>Duration:</strong> {call.duration}</p>
                    <div className="risk-metrics">
                      <p><strong>High Latency Risk:</strong> {call.riskAnalysis.highLatencyRisk ? 'Yes' : 'No'}</p>
                      <p><strong>Packet Loss Risk:</strong> {call.riskAnalysis.packetLossRisk ? 'Yes' : 'No'}</p>
                      <p><strong>Interruption Risk:</strong> {call.riskAnalysis.interruptionRisk}</p>
                      <p><strong>Connection Stability Risk:</strong> {call.riskAnalysis.connectionStabilityRisk}</p>
                      <p><strong>Response Delay Risk:</strong> {call.riskAnalysis.responseDelayRisk}</p>
                      <p><strong>MOS Risk:</strong> {call.riskAnalysis.MOSRisk}</p>
                      <p><strong>Overall Risk Level:</strong> {call.riskAnalysis.overallRiskLevel}</p>
                      <p><strong>Risk Factors:</strong> {call.riskAnalysis.riskFactors.join(', ')}</p>
                    </div>
                    <div className="actions">
                      <h5>Recommended Actions</h5>
                      <ul>
                        {call.riskAnalysis.recommendedActions.map((action, index) => (
                          <li key={index}>{action}</li>
                        ))}
                      </ul>
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

export default CallRiskAnalysis;
