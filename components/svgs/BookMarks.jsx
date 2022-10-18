import React from 'react'

const SvgComponent = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 20"
    fill= "none"
    stroke= "#000"
    strokeLinecap= "round"
    strokeLinejoin= "round"
    strokeWidth= {2}
    {...props}
  >
    <path
      d="m17 20-7-5-7 5V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"
      transform="translate(-2 -1)"

    />
  </svg>
)
  
  export default SvgComponent
  