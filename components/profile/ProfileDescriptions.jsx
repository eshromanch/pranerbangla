import React from "react";
export function ProfileDescriptions(props) {
  return <div className=' my-8  w-3/6 flex justify-center items-center md:w-5/6'>
  <div className='w-2 h-24 bg-primary rouded rounded-md mx-5'></div>
  <h1 className='font-normal text-lg text-black dark:text-white md:text-sm'>{props.about}
  </h1>
  </div>;
}
  