// CallAcceptedRejected.ts 

export interface CallAcceptedRejectedData {
    employeeName: string;
    customerName: string;
    callStatus: 'Accepted' | 'Rejected'; // Only accepted or rejected calls
    callTime: string; // Timestamp of the call
    callDuration: string; // Duration of the call in minutes and seconds
}

export const callAcceptedRejectedData: CallAcceptedRejectedData[] = [
    {
      employeeName: 'Shahswat',
      customerName: 'Gaurav',
      callStatus: 'Accepted',
      callTime: '2024-10-01 10:30 AM',
      callDuration: '5:15',
    },
    {
      employeeName: 'Shahswat',
      customerName: 'Aparth',
      callStatus: 'Rejected',
      callTime: '2024-10-01 11:00 AM',
      callDuration: '0:00',
    },
    {
      employeeName: 'Shahswat',
      customerName: 'Snehil',
      callStatus: 'Accepted',
      callTime: '2024-10-01 12:15 PM',
      callDuration: '3:45',
    },
    {
      employeeName: 'Shahswat',
      customerName: 'Parth',
      callStatus: 'Rejected',
      callTime: '2024-10-01 01:00 PM',
      callDuration: '4:20',
    },
    {
      employeeName: 'Shahswat',
      customerName: 'Raghav',
      callStatus: 'Accepted',
      callTime: '2024-10-01 02:30 PM',
      callDuration: '6:10',
    },
    {
      employeeName: 'Shahswat',
      customerName: 'Manish',
      callStatus: 'Rejected',
      callTime: '2024-10-01 03:00 PM',
      callDuration: '0:00',
    },
    {
      employeeName: 'Shahswat',
      customerName: 'Nikhil',
      callStatus: 'Accepted',
      callTime: '2024-10-01 04:15 PM',
      callDuration: '7:25',
    },
    {
      employeeName: 'Shahswat',
      customerName: 'Rohit',
      callStatus: 'Rejected',
      callTime: '2024-10-01 05:00 PM',
      callDuration: '2:35',
    }
];
