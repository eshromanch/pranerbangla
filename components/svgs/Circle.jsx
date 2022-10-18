import React from 'react';

const SvgComponent = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    {...props}
  >
    <circle
      cx={10}
      cy={10}
      r={10}
      style={{
        fill: "red",
      }}
    />
  </svg>
)

  export default SvgComponent