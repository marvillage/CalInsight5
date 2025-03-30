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

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
} 