import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";
import "./callHistoryDetails.scss";

interface CallDetails {
  contactName: string;
  phNumber: string;
  callDuration: string;
  callType: string;
  callDate: string;
  callTime: string;
}

const TopBox = () => {
  const [callHistory, setCallHistory] = useState<any>(null);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof CallDetails | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });

  useEffect(() => {
    const callLogRef = ref(db, "CallLog/TECNO LH8n");
    
    onValue(callLogRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setCallHistory(data);
      }
    });
  }, []);

  // Function to format the call history data into a flat array
  const getFormattedCallHistory = () => {
    if (!callHistory) return [];

    const flattenedCalls: CallDetails[] = [];
    Object.entries(callHistory).forEach(([date, calls]: [string, any]) => {
      Object.entries(calls).forEach(([time, details]: [string, any]) => {
        flattenedCalls.push({
          ...details,
          callDate: details.callDate || date,
          callTime: details.callTime || time,
        });
      });
    });

    // Sort the data if a sort configuration exists
    if (sortConfig.key) {
      flattenedCalls.sort((a, b) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return flattenedCalls;
  };

  // Function to handle column sorting
  const handleSort = (key: keyof CallDetails) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === 'asc'
          ? 'desc'
          : 'asc',
    });
  };

  if (!callHistory) {
    return (
      <div className="topBox">
        <div className="loading">Loading call history...</div>
      </div>
    );
  }

  return (
    <div className="topBox">
      <h1>Call History</h1>
      <div className="tableContainer">
        <table className="callTable">
          <thead>
            <tr>
              <th onClick={() => handleSort('contactName')}>
                Contact Name
                {sortConfig.key === 'contactName' && (
                  <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
              <th onClick={() => handleSort('phNumber')}>
                Phone Number
                {sortConfig.key === 'phNumber' && (
                  <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
              <th onClick={() => handleSort('callType')}>
                Call Type
                {sortConfig.key === 'callType' && (
                  <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
              <th onClick={() => handleSort('callDuration')}>
                Duration
                {sortConfig.key === 'callDuration' && (
                  <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
              <th onClick={() => handleSort('callDate')}>
                Date
                {sortConfig.key === 'callDate' && (
                  <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
              <th onClick={() => handleSort('callTime')}>
                Time
                {sortConfig.key === 'callTime' && (
                  <span>{sortConfig.direction === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {getFormattedCallHistory().map((call, index) => (
              <tr key={index}>
                <td>{call.contactName || 'Unknown'}</td>
                <td>{call.phNumber}</td>
                <td>
                  <span className={`callType ${call.callType.toLowerCase()}`}>
                    {call.callType}
                  </span>
                </td>
                <td>{call.callDuration}</td>
                <td>{call.callDate}</td>
                <td>{call.callTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopBox;