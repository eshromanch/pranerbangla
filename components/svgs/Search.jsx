import React from 'react'

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    fill="none"
    stroke="#000"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle
      // fill="none"
      // stroke="#000"
      // strokeWidth={2}
      // strokeLinecap="round"
      // strokeLinejoin="round"
      cx={11}
      cy={11}
      r={8}
    />
    <path

      d="m21 21-4.4-4.4"
    />
  </svg>
)


export default SvgComponent
