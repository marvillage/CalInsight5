import { callSentimentData } from '../data/callSentiment';
import './CallSentiment.scss';

interface EmotionScores {
  joy: number;
  anger: number;
  sadness: number;
  fear: number;
  surprise: number;
}

interface SentimentAnalysis {
  sentimentScore: number;
  comparative: number;
  keywords: string[];
  comments: string;
  emotionScores: EmotionScores;
  overallSentiment: string;
  context: string;
  conclusion: string;
}

interface CallData {
  date: string;
  name: string;
  duration: string;
  sentimentAnalysis: SentimentAnalysis;
}

interface CallSentimentData {
  [device: string]: {
    [date: string]: {
      [time: string]: CallData;
    };
  };
}

const CallSentiment = () => {
  const typedData = callSentimentData as CallSentimentData;
  
  return (
    <div className="call-sentiment-container">
      {Object.keys(typedData).map((device) => (
        <div key={device} className="device-section">
          <h2>{device}</h2>
          {Object.keys(typedData[device]).map((date) => (
            <div key={date} className="date-section">
              <h3>{date}</h3>
              {Object.keys(typedData[device][date]).map((time) => {
                const call = typedData[device][date][time];
                return (
                  <div key={time} className="call-card">
                    <h4>{call.name} - {call.duration}</h4>
                    <p><strong>Sentiment Score:</strong> {call.sentimentAnalysis.sentimentScore}</p>
                    <p><strong>Overall Sentiment:</strong> {call.sentimentAnalysis.overallSentiment}</p>
                    <p><strong>Context:</strong> {call.sentimentAnalysis.context}</p>
                    <p><strong>Conclusion:</strong> {call.sentimentAnalysis.conclusion}</p>
                    <p><strong>Keywords:</strong> {call.sentimentAnalysis.keywords.join(', ')}</p>
                    <p><strong>Comments:</strong> {call.sentimentAnalysis.comments}</p>
                    <div className="emotion-scores">
                      <h5>Emotion Scores</h5>
                      <p>Joy: {call.sentimentAnalysis.emotionScores.joy}</p>
                      <p>Anger: {call.sentimentAnalysis.emotionScores.anger}</p>
                      <p>Sadness: {call.sentimentAnalysis.emotionScores.sadness}</p>
                      <p>Fear: {call.sentimentAnalysis.emotionScores.fear}</p>
                      <p>Surprise: {call.sentimentAnalysis.emotionScores.surprise}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CallSentiment;
