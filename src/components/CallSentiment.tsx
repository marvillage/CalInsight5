import { callSentimentData } from '../data/callSentiment';
import './CallSentiment.scss';
import { useState, useEffect } from 'react';





interface CallSentimentData {
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

const CallSentiment: React.FC = () => {
  const [sentimentData, setSentimentData] = useState<CallSentimentData | null>(null);

  useEffect(() => {
    // Simulate fetching sentiment data
    setSentimentData(callSentimentData as unknown as CallSentimentData);
  }, []);

  if (!sentimentData) {
    return <div>Loading sentiment data...</div>;
  }

  return (
    <div className="callSentiment">
      <h1>Call Sentiment Analysis</h1>
      {Object.entries(sentimentData).map(([device, dates]) => (
        <div key={device} className="deviceSection">
          <h2>Device: {device}</h2>
          {Object.entries(dates).map(([date, times]) => (
            <div key={date} className="dateSection">
              <h3>Date: {date}</h3>
              {Object.entries(times).map(([time, data]) => (
                <div key={time} className="timeSection">
                  <h4>Time: {time}</h4>
                  <p>Sentiment: {data.sentiment}</p>
                  <p>Confidence: {data.confidence}</p>
                  <div className="emotions">
                    <h5>Emotions:</h5>
                    {Object.entries(data.emotions).map(([emotion, score]) => (
                      <div key={emotion} className="emotionScore">
                        <span>{emotion}:</span>
                        <span>{score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CallSentiment;
