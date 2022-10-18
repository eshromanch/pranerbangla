import React from 'react';

const SvgComponent = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19.2 19.2"
    fill= "none"
    stroke= "#000"
    strokeLinecap= "round"
    strokeLinejoin= "round"
    strokeWidth= {2}
    {...props}
  >
    <path
      d="M18.6 11.4a8.5 8.5 0 0 1-9.4 7.8A8.6 8.6 0 0 1 9.2 2a6.7 6.7 0 0 0 1.4 9.4 6.6 6.6 0 0 0 8 0Z"
      transform="translate(-.4 -1)"
  
    />
  </svg>
)
export default SvgComponent
