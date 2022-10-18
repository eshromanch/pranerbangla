import React from "react"

const SvgComponent = (props) => (
  <svg
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 24 24"
    stroke="currentColor"
    style={{
      enableBackground: "new 0 0 24 24",
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>
      {
        ".st0{fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}"
      }
    </style>
    <path className="st0" d="M18 6 6 18M6 6l12 12" />
  </svg>
)

export default SvgComponent