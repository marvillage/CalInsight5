import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';  // Firebase imports
import { db } from '../firebase';  // Firebase database instance
import './FrequentCallDetector.scss';

const FrequentCallDetector: React.FC = () => {
    const [callers, setCallers] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        // Create a reference to the entire CallLog data in Firebase
        const callLogRef = ref(db, 'CallLog/TECNO LH8n');

        // Fetch the data in real-time
        onValue(callLogRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const callCounts: { [key: string]: number } = {};
                
                // Loop through the call data and count occurrences of each contact
                Object.keys(data).forEach((date) => {
                    const callsAtDate = data[date];
                    Object.keys(callsAtDate).forEach((time) => {
                        const call = callsAtDate[time];
                        const contactName = call.contactName || call.phNumber;

                        // Count the occurrences of each caller
                        if (contactName) {
                            callCounts[contactName] = (callCounts[contactName] || 0) + 1;
                        }
                    });
                });

                // Update state with the calculated frequent callers
                setCallers(callCounts);
            }
        });
    }, []);

    return (
        <div className="frequent-call-detector">
            <h1>Frequent Callers</h1>
            <ul>
                {Object.entries(callers).length > 0 ? (
                    // Sort the frequent callers in descending order based on the number of calls
                    Object.entries(callers)
                        .sort(([, countA], [, countB]) => countB - countA)  // Sort by count in descending order
                        .map(([caller, count]) => (
                            <li key={caller}>
                                {caller}: {count} calls
                            </li>
                        ))
                ) : (
                    <p>No frequent callers found.</p>
                )}
            </ul>
        </div>
    );
};

export default FrequentCallDetector;
