// CallConversion.ts

export interface CallConversionData {
    employeeName: string;
    customerName: string;
    callStatus: 'Accepted' | 'Missed' | 'Called Back'; // Defines the status of the call
    callTime: string; // Timestamp of the call
    callDuration: string; // Duration of the call in minutes and seconds
  }
  
  export const callConversionData: CallConversionData[] = [
    {
      employeeName: 'Snehil Shah',
      customerName: 'Jane Smith',
      callStatus: 'Accepted',
      callTime: '2024-10-01 10:30 AM',
      callDuration: '5:15',
    },
    {
      employeeName: 'Gaurav Sharma',
      customerName: 'Bob Brown',
      callStatus: 'Missed',
      callTime: '2024-10-01 11:00 AM',
      callDuration: '0:00',
    },
    {
      employeeName: 'Kirtan Bhavsar',
      customerName: 'Sara Lee',
      callStatus: 'Called Back',
      callTime: '2024-10-01 11:45 AM',
      callDuration: '7:30',
    },
    {
      employeeName: 'Parth singh',
      customerName: 'Tom Clark',
      callStatus: 'Accepted',
      callTime: '2024-10-01 12:15 PM',
      callDuration: '3:45',
    },
    {
      employeeName: 'Kirtan Bhavsar',
      customerName: 'Chris Red',
      callStatus: 'Called Back',
      callTime: '2024-10-01 01:00 PM',
      callDuration: '4:20',
    },
  ];
  