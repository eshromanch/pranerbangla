import React from 'react';

const SvgComponent = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      {...props}
    >
      <circle fill="red" cx={12} cy={12} r={11.6} />
      <g
        fill="none"
        stroke="#FFF"
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.6 5.3h8.9c.7 0 1.3.6 1.3 1.3v8.9c0 .7-.6 1.3-1.3 1.3H6.6c-.7 0-1.3-.6-1.3-1.3v-9c0-.7.6-1.2 1.3-1.2z" />
        <circle cx={8.8} cy={8.8} r={0.9} />
        <path d="m16.7 12.9-3.2-3.2-6.9 7" />
      </g>
      <path
        fill="#FFF"
        d="M17.5 6.6v.7c.3.1.6.5.6 1v8.5c0 .6-.4 1.1-.8 1.1H8.1c-.3 0-.5-.2-.6-.5h-.8c.2.7.7 1.3 1.4 1.3h9.1c.8 0 1.5-.8 1.5-1.8V8.3c0-.9-.5-1.6-1.2-1.7z"
      />
    </svg>
  )
  
  export default SvgComponent
  