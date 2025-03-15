// CallBackData.ts

export interface CallBackData {
    employeeName: string;
    customerName: string;
    callTime: string; // Timestamp of when the callback happened
    callDuration: string; // Duration of the callback
    callReason: string; // Reason for callback
  }
  
  export const callBackData: CallBackData[] = [
    {
      employeeName: 'Michael Green',
      customerName: 'Sara Lee',
      callTime: '2024-10-01 11:45 AM',
      callDuration: '7:30',
      callReason: 'Missed initial call, returned for appointment confirmation',
    },
    {
      employeeName: 'Robert Black',
      customerName: 'Chris Red',
      callTime: '2024-10-01 01:00 PM',
      callDuration: '4:20',
      callReason: 'Missed call, called back to resolve account issue',
    },
    {
      employeeName: 'Alice Johnson',
      customerName: 'Tom White',
      callTime: '2024-10-02 09:30 AM',
      callDuration: '6:10',
      callReason: 'Missed call, callback to clarify billing details',
    },
    {
      employeeName: 'Emma White',
      customerName: 'David Brown',
      callTime: '2024-10-02 02:15 PM',
      callDuration: '8:05',
      callReason: 'Missed call, callback to confirm delivery address',
    },
    {
      employeeName: 'John Doe',
      customerName: 'Jessica Blue',
      callTime: '2024-10-03 10:00 AM',
      callDuration: '5:50',
      callReason: 'Missed call, callback to discuss product inquiry',
    },
  ];
  