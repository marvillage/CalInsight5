export interface Incident {
  customerName: string;
  uniqueId: string;
  dateOfQuery: string;
  description: string;
  status: 'Pending' | 'Completed';
}

export const saveReport = (incident: Incident): void => {
  // Mock implementation - in a real app, this would save to a database
  console.log('Saving incident:', incident);
};

export const getReports = (): Incident[] => {
  // Mock implementation - in a real app, this would fetch from a database
  return [];
};
