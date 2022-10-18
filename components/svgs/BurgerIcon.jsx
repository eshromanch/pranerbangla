import * as React from "react"

const SvgComponent = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 14"
    fill= "none"
    stroke= "#000"
    strokeLinecap= "round"
    strokeLinejoin= "round"
    strokeWidth= {2}
    {...props}
  >
    <path
      style={{
        // fill: "none",
        // stroke: "#000",
        // strokeLinecap: "round",
        // strokeLinejoin: "round",
        // strokeWidth: 2,
      }}
      d="M19 5H5M19 1H1M19 9H8.1"
    />
    <path
      style={{
        fill: "none",
        stroke: "#ec1c24",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
      d="M19 13h-8.2"
    />
  </svg>
)

export default SvgComponent
