import { Database } from 'firebase/database';

declare module '../firebase' {
  export interface CallData {
    callDate: string;
    callDuration: string;
    callTime: string;
    callType: string;
    contactName: string;
    phNumber: string;
  }

  export interface CallHistoryData {
    [device: string]: {
      [date: string]: {
        [time: string]: CallData;
      };
    };
  }

  export const callHistoryData: CallHistoryData;
  export const missedCallData: CallHistoryData;
  export const outgoingCallData: CallHistoryData;
  export const db: Database;
} 