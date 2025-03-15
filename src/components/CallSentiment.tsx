import React from 'react';
import { callSentimentData } from '../../callSentiment'; // Adjust the import path as needed
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

const CallSentiment: React.FC = () => {
  return (
    <div className="call-sentiment-container">
      {Object.keys(callSentimentData).map((device) => (
        <div key={device} className="device-section">
          <h2>{device}</h2>
          {Object.keys(callSentimentData[device]).map((date) => (
            <div key={date} className="date-section">
              <h3>{date}</h3>
              {Object.keys(callSentimentData[device][date]).map((time) => {
                const call = callSentimentData[device][date][time];
                return (
                  <div key={time} className="call-card">
                    <h4>{call.name} - {call.duration}</h4>
                    <p><strong>Sentiment Score:</strong> {call.sentimentAnalysis.sentimentScore}</p>
                    <p><strong>Overall Sentiment:</strong> {call.sentimentAnalysis.overallSentiment}</p>
                    <p><strong>Context:</strong> {call.sentimentAnalysis.context}</p>
                    <p><strong>Conclusion:</strong> {call.sentimentAnalysis.conclusion}</p>
                    <p><strong>Keywords:</strong> {call.sentimentAnalysis.keywords.join(', ')}</p>
                    <p><strong>Comments:</strong> {call.sentimentAnalysis.comments}</p>

                    {/* Emotion Scores Table */}
                    <table className="emotion-scores-table">
                      <thead>
                        <tr>
                          <th>Emotion</th>
                          <th>Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Joy</td>
                          <td>{call.sentimentAnalysis.emotionScores.joy}</td>
                        </tr>
                        <tr>
                          <td>Anger</td>
                          <td>{call.sentimentAnalysis.emotionScores.anger}</td>
                        </tr>
                        <tr>
                          <td>Sadness</td>
                          <td>{call.sentimentAnalysis.emotionScores.sadness}</td>
                        </tr>
                        <tr>
                          <td>Fear</td>
                          <td>{call.sentimentAnalysis.emotionScores.fear}</td>
                        </tr>
                        <tr>
                          <td>Surprise</td>
                          <td>{call.sentimentAnalysis.emotionScores.surprise}</td>
                        </tr>
                      </tbody>
                    </table>
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
