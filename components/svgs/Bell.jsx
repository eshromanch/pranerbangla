import React from 'react'

// const SvgComponent = (props) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={24}
//       height={24}
//       fill="none"
//       stroke="black"
//       strokeWidth={2}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="feather feather-bell"
//       {...props}
//     >
//       <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
//     </svg>
//   )
  
//   export default SvgComponent

// const SvgComponent = (props) => (
//   <svg
//     data-name="Layer 1"
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 20 22"
//     {...props}
//   >
//     <path
//       d="M16 7A6 6 0 0 0 4 7c0 7-3 9-3 9h18s-3-2-3-9M11.7 20a1.9 1.9 0 0 1-2.7.7 1.2 1.2 0 0 1-.7-.7"
//       style={{
//         fill: "none",
//         stroke: "#000",
//         strokeLinecap: "round",
//         strokeLinejoin: "round",
//         strokeWidth: 2,
//       }}
//     />
//   </svg>
// )

// export default SvgComponent

const SvgComponent = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 22"
      //     width={24}
      // height={24}
    fill="none"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <path
      d="M16 7A6 6 0 0 0 4 7c0 7-3 9-3 9h18s-3-2-3-9M11.7 20a1.9 1.9 0 0 1-2.7.7 1.2 1.2 0 0 1-.7-.7"
 
    />
  </svg>
)

export default SvgComponent