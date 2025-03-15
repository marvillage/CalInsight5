import React, { useState } from 'react';

const MessageForm: React.FC = () => {
  const [subject, setSubject] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isDelivered, setIsDelivered] = useState<boolean>(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate message delivery (you can replace this with actual logic)
    setIsDelivered(true);

    // Reset form after sending message
    setSubject('');
    setDescription('');
  };

  return (
    <div style={styles.container}>
      <h2>Send Message to Shahswat</h2>

      {isDelivered && <p style={styles.successMessage}>Your message is delivered!</p>}

      <form onSubmit={handleSendMessage} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="subject" style={styles.label}>
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="description" style={styles.label}>
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.textarea}
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          Send
        </button>
      </form>
    </div>
  );
};

// Inline CSS styles (you can replace this with your CSS/SCSS)
const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#2c003e', // Dark purple background
    color: '#e0e0e0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    display: 'block',
    color: '#c39bd3', // Light purple for label
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #5d2a78', // Purple border
    backgroundColor: '#3e1f56', // Darker purple background
    color: '#e0e0e0', // Light text color
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #5d2a78',
    backgroundColor: '#3e1f56',
    color: '#e0e0e0',
    fontSize: '16px',
    height: '100px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#9b59b6', // Light purple for button
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#7d3c98', // Darker purple on hover
  },
  successMessage: {
    color: '#28a745', // Green success message
    fontWeight: 'bold' as 'bold',
    marginBottom: '20px',
  },
};

export default MessageForm;
