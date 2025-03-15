// IncidentReport.tsx
import './IncidentReport.scss';
import React, { useState } from 'react';
import { saveReport, Incident } from '../../report';

const IncidentReport: React.FC = () => {
  const [incident, setIncident] = useState<Incident>({
    customerName: '',
    uniqueId: '',
    dateOfQuery: '',
    description: '',
    status: 'Pending',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setIncident((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setIncident((prev) => ({ ...prev, status: value as 'Pending' | 'Completed' }));
  };

  const generateReport = () => {
    saveReport(incident); // Save report to local storage (mock service)
    alert('Report has been generated and saved!');
  };

  return (
    <div className="incident-report">
      <h1>Incident Report Generation</h1>
      <div className="form-group">
        <label>Customer Name</label>
        <input type="text" name="customerName" value={incident.customerName} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Unique ID</label>
        <input type="text" name="uniqueId" value={incident.uniqueId} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Date of Query</label>
        <input type="date" name="dateOfQuery" value={incident.dateOfQuery} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea name="description" value={incident.description} onChange={handleChange} />
      </div>
      <div className="form-group status-select">
        <label>Status</label>
        <select name="status" value={incident.status} onChange={handleStatusChange}>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="button-container">
        <button onClick={generateReport}>Generate Report</button>
      </div>
    </div>
  );
};

export default IncidentReport;
