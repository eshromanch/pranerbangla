import Image from 'next/image'
import React from 'react'
import Icons from "../svgs/GalleryIcon"

function Gridimages(props) {
  return (
    <div className='h-full overflow-hidden flex'>

<figure className='group h-full w-full relative traansform transition cursor-pointer  hover:scale-110 group-hover:shadow hover:shadow-inner-lg '><Icons className="absolute h-12 m-2 group-hover:m-10  duration-300 md:h-5"/> 
<Image className='w-full h-full object-fill'  src={props.img}  width='500' height='500'></Image>
{/* <img  className='h-ful object-fill  ' src={props.img} alt="" /> */}
      <div className=' absolute bottom-8 w-full  opacity-0 group-hover:opacity-100 group-hover:mx-10    duration-300'><h1 className='text-white text-2xl'>{props.title}</h1>
      
      </div>
      {/* <div className='absolute transition transform  w-full h-full opacity-25 group-hover:bg-primary group-hover:-translate-y-full group-hover:top-0 duration-300 '></div> */}
      {/* <div className='absolute  w-0 h-0  ease-in-out transition-all group-hover:w-full group-hover:h-full opacity-0 group-hover:opacity-25 group-hover:bg-primary   group-hover:top-0 duration-500'></div> */}
      </figure>

    </div>
  )
}

export default Gridimages