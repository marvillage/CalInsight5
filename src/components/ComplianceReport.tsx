import React from 'react';
import { complianceMetrics } from '../../compilance'; // Import the compliance metrics
import './ComplianceReport.scss';

interface CallData {
  customerName: string;
  duration: number;
  wasPolite: boolean;
  followedScript: boolean;
  resolvedIssue: boolean;
  customerSatisfaction: number;
  complianceScore: number;
}

interface EmployeeData {
  [key: string]: CallData | number;
  overallComplianceScore: number;
}

interface ComplianceMetrics {
  [employeeName: string]: EmployeeData;
}

const ComplianceReport: React.FC = () => {
  const employeeData = (complianceMetrics as ComplianceMetrics)["Shahswat"]; // Get data for Shahswat

  return (
    <div className="compliance-report">
      <h1>Compliance Report</h1>
      <div>
        {employeeData ? (
          <div className="employee-report">
            <h2>Shahswat</h2>
            <p>Overall Compliance Score: {employeeData.overallComplianceScore}</p>
            <ul className="call-list">
              {Object.keys(employeeData).filter(key => key !== 'overallComplianceScore').map((callKey, index) => {
                const call = employeeData[callKey] as CallData;
                return (
                  <li key={index} className="call-item">
                    <h3>Call {index + 1}: {call.customerName}</h3>
                    <p>Duration: {call.duration} minutes</p>
                    <p>Polite: {call.wasPolite ? 'Yes' : 'No'}</p>
                    <p>Followed Script: {call.followedScript ? 'Yes' : 'No'}</p>
                    <p>Resolved Issue: {call.resolvedIssue ? 'Yes' : 'No'}</p>
                    <p>Customer Satisfaction: {call.customerSatisfaction}/5</p>
                    <p>Compliance Score: {call.complianceScore}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <p>Loading compliance data...</p>
        )}
      </div>
    </div>
  );
};

export default ComplianceReport;
