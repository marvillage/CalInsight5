// report.ts

export interface Incident {
    customerName: string;
    uniqueId: string;
    dateOfQuery: string;
    description: string;
    status: 'Pending' | 'Completed';
  }
  
  // Function to save the incident report to localStorage (you can change this to use an API later)
  export const saveReport = (incident: Incident) => {
    const reports = getReports();
    reports.push(incident);
    localStorage.setItem('incidentReports', JSON.stringify(reports));
  };
  
  // Function to fetch all incident reports
  export const getReports = (): Incident[] => {
    const reports = localStorage.getItem('incidentReports');
    return reports ? JSON.parse(reports) : [];
  };
  