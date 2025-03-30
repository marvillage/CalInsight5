export interface CallSentimentData {
  [device: string]: {
    [date: string]: {
      [time: string]: {
        sentiment: string;
        confidence: number;
        emotions: {
          [emotion: string]: number;
        };
      };
    };
  };
}

export const callSentimentData: CallSentimentData = {
  "Device1": {
    "2024-03-20": {
      "10:00": {
        sentiment: "Positive",
        confidence: 0.85,
        emotions: {
          happy: 0.7,
          neutral: 0.2,
          sad: 0.1
        }
      }
    }
  }
}; 