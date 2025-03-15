import React from 'react';
import customerServiceChats from '../../Transcript';
import './CallTranscript.scss';

const CustomerServiceChats: React.FC = () => {
  return (
    <div className="chat-container">
      {customerServiceChats.map((chat, index) => (
        <div key={index} className="chat-box">
          <div className="chat-header">
            <span className="chat-date">Date: {chat.date}</span>
            <span className="chat-duration">Duration: {chat.duration}</span>
          </div>
          <table className="chat-table">
            <thead>
              <tr>
                <th>Speaker</th>
                <th>Transcript</th>
              </tr>
            </thead>
            <tbody>
              {chat.speakers.map((speaker, speakerIndex) => (
                <tr key={speakerIndex}>
                  <td className="speaker-name">{speaker.name}</td>
                  <td className="transcript">
                    {speaker.transcript.map((line, lineIndex) => (
                      <p key={lineIndex} className="transcript-line">
                        {line}
                      </p>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default CustomerServiceChats;
