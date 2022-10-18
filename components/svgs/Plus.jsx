import React from 'react'

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    fill="none"
    stroke="#ff0000"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path

      d="M12 5v14M5 12h14"
    />
  </svg>
)


export default SvgComponent
