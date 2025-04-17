
import React from 'react';

const Logo = () => {
  return (
    <svg 
      width="160" 
      height="60" 
      viewBox="0 0 160 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20 10L30 5L40 10V40L30 45L20 40V10Z" fill="#759eb8" stroke="#3c4a5d" strokeWidth="2"/>
      <path d="M45 15L55 10L65 15V45L55 50L45 45V15Z" fill="#7392b7" stroke="#3c4a5d" strokeWidth="2"/>
      <path d="M70 10L80 5L90 10V40L80 45L70 40V10Z" fill="#b3c5d7" stroke="#3c4a5d" strokeWidth="2"/>
      <path d="M75 30H35" stroke="#3c4a5d" strokeWidth="2"/>
      <text x="95" y="30" fontFamily="Arial" fontSize="18" fill="#3c4a5d" fontWeight="bold">ДЕЙВИД</text>
      <text x="95" y="48" fontFamily="Arial" fontSize="12" fill="#759eb8" letterSpacing="1">ГРУП</text>
    </svg>
  );
};

export default Logo;
