import React from 'react'
import ShareProfileButtons from '../profile/ShareProfileButtons'
import Facebook from "../svgs/Facebook"
import Tweeter from "../svgs/Tweeter"
function Cards(props) {

  return (
    <div className='h-full overflow-hidden flex flex-col my-12  '>
    <figure className='group border  h-[21rem] w-full flex items-center relative traansform transition cursor-pointer  hover:scale-110 group-hover:shadow hover:shadow-inner-lg '><img  className='h-full object-cover w-full  ' src={props.image} alt="" />

    {/* <div className='absolute transition transform  w-full h-full opacity-25 group-hover:bg-primary group-hover:-translate-y-full group-hover:top-0 duration-300 '></div> */}
    <div className='absolute  w-0 h-0  ease-in-out transition-all group-hover:w-full group-hover:h-full opacity-0 group-hover:opacity-80 group-hover:bg-primary   group-hover:top-0 duration-500'></div>
    <div className=' absolute flex justify-center  w-full opacity-0 group-hover:opacity-100   duration-300'>
      {/* <ShareProfileButtons facebookLink={props.facebookLink}/> */}
      <a target="_blank"  href={props.facebookLink}><Facebook className="h-6  fill-[#ffffff]"/></a>
    </div>
    </figure>
    <h1 className='text-center text-black font-bold text-lg mt-5'>{props.title} </h1>
    <h1 className='text-center text-black text-lg '>{props.designations} </h1>
  </div>

  )
}

export default Cards