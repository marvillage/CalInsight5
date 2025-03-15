import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';  // Firebase imports
import { db } from '../../firebase';  // Import the Firebase database instance
import './OutgoingCalls.scss';  // Import SCSS file

const OutgoingCalls: React.FC = () => {
  const [outgoingCallData, setOutgoingCallData] = useState<any>(null);  // Use state to store outgoing call data

  useEffect(() => {
    // Create a reference to the outgoing call data in Firebase
    const outgoingCallRef = ref(db, 'CallLog/TECNO LH8n');  // Use the correct path for your data

    // Listen to changes in the outgoing call data in real-time
    onValue(outgoingCallRef, (snapshot) => {
      const data = snapshot.val();  // Extract the data from the snapshot
      if (data) {
        setOutgoingCallData(data);  // Update state with the fetched data
      }
    });
  }, []);

  if (!outgoingCallData) {
    return <div>Loading...</div>;  // Show loading indicator while data is being fetched
  }

  // Sorting dates in descending order (most recent first)
  const sortedDates = Object.keys(outgoingCallData).sort((a, b) => {
    return new Date(b).getTime() - new Date(a).getTime();
  });

  return (
    <div className="outgoingCalls">
      <h2>Outgoing Calls</h2>
      {sortedDates.map(date => (
        <div key={date} className="date">
          <h3>Date: {date}</h3>
          {/* Sorting times in descending order (most recent first) */}
          {Object.keys(outgoingCallData[date]).sort((a, b) => {
            return new Date(`${date} ${b}`).getTime() - new Date(`${date} ${a}`).getTime();
          }).map(time => {
            const call = outgoingCallData[date][time];
            return (
              <div key={time} className="callInfo">
                <p><strong>Time:</strong> {call.callTime}</p>
                <p><strong>Contact Name:</strong> {call.contactName}</p>
                <p><strong>Phone Number:</strong> {call.phNumber}</p>
                <p><strong>Duration:</strong> {call.callDuration}</p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default OutgoingCalls;
