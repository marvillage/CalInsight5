// CustomerFeedback.tsx
import React, { useEffect, useState } from 'react';
import { customerFeedback } from '../../customerFeedback'; // Adjust the path as necessary
import './CustomerFeedback.scss'; 
const CustomerFeedback: React.FC = () => {
  const [feedbackData, setFeedbackData] = useState<any[]>([]); // Adjust type as needed

  useEffect(() => {
    // Fetching data from the customerFeedback.ts file
    setFeedbackData(customerFeedback);
  }, []);

  return (
    <div className="feedback-container">
      <h1>Customer Feedback</h1>
      <div className="card-container">
        {feedbackData.map((feedback, index) => (
          <div key={index} className="feedback-card">
            <h2>{feedback.customerName}</h2>
            <p><strong>Contact Number:</strong> {feedback.contactNumber}</p>
            <p><strong>Email:</strong> {feedback.email}</p>
            <h3>Feedback</h3>
            <p><strong>Understanding Needs:</strong> {feedback.feedback.understandingNeeds}</p>
            <p><strong>Recommendation Likelihood:</strong> {feedback.feedback.recommendationLikelihood}</p>
            <p><strong>Issue Resolution:</strong> {feedback.feedback.issueResolution}</p>
            <p><strong>Friendliness:</strong> {feedback.feedback.friendliness}</p>
            <p><strong>Issue Resolved:</strong> {feedback.feedback.issueResolved}</p>
            <p><strong>General Feedback:</strong> {feedback.feedback.generalFeedback}</p>
            <p><strong>Suggestions for Improvement:</strong> {feedback.feedback.suggestions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;



