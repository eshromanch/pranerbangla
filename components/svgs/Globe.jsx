import React from 'react';

// const SvgComponent = (props) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={24}
//       height={24}
//       fill="none"
//       stroke="currentColor"
//       strokeWidth={2}
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="feather feather-globe"
//       {...props}
//     >
//       <circle cx={12} cy={12} r={10} />
//       <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
//     </svg>
//   )
  
// export default SvgComponent

const SvgComponent = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19 19"
    {...props}
    fill="none"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
  >
    <circle
      cx={9.5}
      cy={9.5}
      r={8.5}
      // fill="none"
      // stroke="#000"
      // strokeLinecap="round"
      // strokeLinejoin="round"
      strokeWidth={2}
    />
    <path
     
      d="M1 9.5h17M9.5 1a13.2 13.2 0 0 1 3.4 8.5A13.2 13.2 0 0 1 9.5 18a13.2 13.2 0 0 1-3.4-8.5A13.2 13.2 0 0 1 9.5 1Z"
    />
  </svg>
)

export default SvgComponent