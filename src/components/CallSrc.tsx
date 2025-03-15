// src/components/CallSrc.tsx
import React from 'react';

const CallSrc: React.FC = () => {
  return (
    <div>
      <iframe
        src="../../call_rec.html"  // Make sure this path is correct based on your project structure
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="Call Source"
      />
    </div>
  );
};

export default CallSrc;
