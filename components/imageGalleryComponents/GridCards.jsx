import React, { useEffect,useState } from 'react';


function GridCards(props) {
  const date =new Date(`${props.time}`).toLocaleString('en-uk',{day:"numeric",month:'short', year:'numeric'})
  console.log(date)
if (props.status==="1") {
  return (

<div className="card w-full h-full bg-transparent">
   
<div className="card-body p-1">
<figure className='relative'><img className='h-52 rounded rounded-md object-cover transition ease-in-out delay-150  hover:scale-220  duration-300 'src={`${props.imgSrc} `}/>
</figure>

  <p className='text-black dark:text-white'>{props.title}</p>
  <div className="card-actions justify-between">
    <div className=""><p className='text-sm text-base-100 dark:text-white'>{date}</p></div> 
    {/* <div className=""><p className='text-sm text-base-100 dark:text-white'>{props.readed} বার পড়া হয়েছে</p></div> */}

  </div>
</div>
</div>
  )
}
}

export default GridCards

