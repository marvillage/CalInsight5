import { callQualityData } from '../../callquality';
import './CallQualityAnalysis.scss';

interface RecordingQuality {
  jitter: string;
  latency: string;
  packetLoss: string;
  MOS: string;
  SNR: string;
  bandwidthUsage: string;
  callCompletionTime: string;
  RTT: string;
  audioClarity: string;
  interruptions: string;
  responseTime: string;
}

interface CallData {
  date: string;
  name: string;
  duration: string;
  recordingQuality: RecordingQuality;
}

interface CallQualityData {
  [device: string]: {
    [date: string]: {
      [time: string]: CallData;
    };
  };
}

const CallQualityAnalysis = () => {
  const typedData = callQualityData as CallQualityData;
  
  return (
    <div className="call-quality-analysis">
      <h1>Call Recording Quality Analysis</h1>
      {Object.keys(typedData).map((device) => (
        <div key={device}>
          <h2>{device}</h2>
          {Object.keys(typedData[device]).map((date) => (
            <div key={date} className="date-section">
              <h3>Date: {date}</h3>
              {Object.keys(typedData[device][date]).map((time) => {
                const call = typedData[device][date][time];
                return (
                  <div key={time} className="call-entry">
                    <h4>Time: {time}</h4>
                    <p>Name: {call.name}</p>
                    <p>Duration: {call.duration}</p>
                    <div className="quality-metrics">
                      <p>Jitter: {call.recordingQuality.jitter}</p>
                      <p>Latency: {call.recordingQuality.latency}</p>
                      <p>Packet Loss: {call.recordingQuality.packetLoss}</p>
                      <p>MOS: {call.recordingQuality.MOS}</p>
                      <p>SNR: {call.recordingQuality.SNR}</p>
                      <p>Bandwidth Usage: {call.recordingQuality.bandwidthUsage}</p>
                      <p>Call Completion Time: {call.recordingQuality.callCompletionTime}</p>
                      <p>RTT: {call.recordingQuality.RTT}</p>
                      <p>Audio Clarity: {call.recordingQuality.audioClarity}</p>
                      <p>Interruptions: {call.recordingQuality.interruptions}</p>
                      <p>Response Time: {call.recordingQuality.responseTime}</p>
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

export default CallQualityAnalysis;
