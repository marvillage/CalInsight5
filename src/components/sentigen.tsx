import React, { useEffect } from 'react';

const Sentigen: React.FC = () => {
  useEffect(() => {
    window.location.href = "http://192.168.108.23:8501"; // Replace this with the actual URL
  }, []);

  return null; // No UI needed as it will redirect automatically
};

export default Sentigen;
