import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import './Contact.scss';
import { CallData, CallHistoryData } from '../types/firebase';

interface Contact {
  contactName: string;
  phNumber: string;
}

const Contact: React.FC = () => {
  const [contacts, setContacts] = useState<{ [name: string]: string }>({});  // State to hold unique contacts

  useEffect(() => {
    // Reference the path in Firebase Realtime Database
    const callLogsRef = ref(db, 'CallLog/TECNO LH8n');

    // Use 'onValue' to fetch the data in real-time
    onValue(callLogsRef, (snapshot) => {
      const data = snapshot.val();  // Get the data from snapshot
      console.log('Fetched data:', data);  // Log the data for debugging

      if (data) {
        const contactMap: { [name: string]: string } = {};  // To store unique contacts

        // Loop through dates
        Object.values(data).forEach((dateEntry: any) => {
          // Loop through each time entry within the date
          Object.values(dateEntry).forEach((timeEntry: any) => {
            const { contactName, phNumber } = timeEntry;

            // Ensure the contact name and phone number are valid and not already in the map
            if (contactName && phNumber && !contactMap[contactName]) {
              contactMap[contactName] = phNumber;  // Add contact to the map
            }
          });
        });

        console.log('Contact map:', contactMap);  // Log the contacts for debugging
        setContacts(contactMap);  // Update the state with unique contacts
      }
    });
  }, []);  // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div className="contactList">
      <h2>Contacts</h2>
      {Object.keys(contacts).length > 0 ? (
        <ul>
          {Object.keys(contacts).map((name) => (
            <li key={name}>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Phone Number:</strong> {contacts[name]}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

export default Contact;