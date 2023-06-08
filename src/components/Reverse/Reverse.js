import React from 'react';

const Reverse = ({ children }) => {
  const reversedText = children.split('').reverse().join('');

  return (
    <div>
      <p>Texto original: {children}</p>
      <p>Texto invertido: {reversedText}</p>
    </div>
  );
};

export default Reverse;
