// ReportDisplay.tsx
import React, { useEffect, useState } from 'react';
import { getReports, Incident, saveReport } from '../../report';
import './ReportDisplay.scss';
const ReportDisplay: React.FC<{ onEdit: (incident: Incident) => void }> = ({ onEdit }) => {
  const [reports, setReports] = useState<Incident[]>([]);

  useEffect(() => {
    const fetchedReports = getReports(); // Fetch reports from the mock service
    setReports(fetchedReports);
  }, []);

  const handleDelete = (index: number) => {
    const updatedReports = reports.filter((_, i) => i !== index);
    localStorage.setItem('incidentReports', JSON.stringify(updatedReports));
    setReports(updatedReports);
  };

  return (
    <div className="report-display">
      <h1>Incident Reports</h1>
      {reports.length > 0 ? (
        <ul>
          {reports.map((report, index) => (
            <li key={index}>
              <h3>Report {index + 1}</h3>
              <p>Customer Name: {report.customerName}</p>
              <p>Unique ID: {report.uniqueId}</p>
              <p>Date of Query: {report.dateOfQuery}</p>
              <p>Description: {report.description}</p>
              <p>Status: {report.status}</p>
              <div className="button-container">
                <button onClick={() => onEdit(report)}>Modify</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reports found.</p>
      )}
    </div>
  );
};

export default ReportDisplay;
