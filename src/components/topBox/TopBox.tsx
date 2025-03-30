import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";  // Import ref and onValue for database interaction
import { db } from "../../firebase";  // Import the initialized db
import "./topBox.scss";
import { Link } from "react-router-dom";

interface CallDetails {
  callDate: string;
  callTime: string;
  contactName: string;
  phNumber: string;
  callType: string;
  callDuration: string;
  callDateTime?: Date;
}

const TopBox = () => {
  const [callHistory, setCallHistory] = useState<CallDetails[]>([]);

  useEffect(() => {
    // Create a reference to the call history for "TECNO LH8n" in the database
    const callLogRef = ref(db, "CallLog/TECNO LH8n");

    // Listen to changes in real-time
    onValue(callLogRef, (snapshot) => {
      const data = snapshot.val();  // Get data from the snapshot
      if (data) {
        const sortedData: CallDetails[] = [];

        // Flattening and collecting call details with date and time for sorting
        Object.entries(data).forEach(([_, calls]) => {
          Object.entries(calls as Record<string, CallDetails>).forEach(([_, callDetails]) => {
            sortedData.push({
              ...callDetails,
              callDateTime: new Date(`${callDetails.callDate} ${callDetails.callTime}`), // Combine date and time
            });
          });
        });

        // Sort the records by callDateTime in descending order
        sortedData.sort((a, b) => 
          (b.callDateTime?.getTime() || 0) - (a.callDateTime?.getTime() || 0)
        );

        // Limit to 5 latest records
        setCallHistory(sortedData.slice(0, 5));
      }
    });
  }, []);

  if (!callHistory.length) {
    return <div>Loading...</div>;  // Show loading indicator while data is being fetched
  }

  return (
    <div className="topBox">
      <h1>Call History</h1>
      <div className="list">
        {callHistory.map((callDetails, index) => (
          <div className="listItem" key={index}>
            <div className="user">
              <img src="default_image_path_or_call_icon.png" alt="" />
              <div className="userTexts">
                <span className="username">{callDetails.contactName}</span>
                <span className="email">{callDetails.phNumber}</span>
              </div>
            </div>
            <div className="callDetails">
              <span className="callDuration">Duration: {callDetails.callDuration}</span>
              <span className="callType">Type: {callDetails.callType}</span>
              <span className="callDate">Date: {callDetails.callDate}</span>
              <span className="callTime">Time: {callDetails.callTime}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Show more button */}
      <Link to="/call-history-details">
        <button className="showMoreButton">Show More</button>
      </Link>
    </div>
  );
};

export default TopBox;


