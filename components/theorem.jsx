import React from 'react';
import 'katex/dist/katex.min.css';

const MathTheorem = ({ title, children }) => {
  return (
    <div style={{ backgroundColor: '#f0f8f0', padding: '1em', borderRadius: '8px' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* <img src="path-to-your-icon.png" alt="Checkmark Icon" style={{ width: '24px', height: '24px', marginRight: '8px' }} /> */}
        <h3 style={{ textDecoration: 'underline', textDecorationColor: 'red' }}>{title}</h3>
    </div>
    {children}
    </div>
  );
};
export default MathTheorem;
