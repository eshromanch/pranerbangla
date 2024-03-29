// import React from 'react'
// import Background from '../../components/svgs/ProfileBg'
// import ShareProfileButtons from '../profile/ShareProfileButtons';
// function Header(props) {
//   return (
//        <div className="w-full relative">
//     <Background className="w-full object-fill"/>


// <div className='absolute bottom-0 pb-8 left-[28rem] flex justify-center items-center'>
// <div className="avatar w-full h-full">
// <div className=" w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
// <img src= {props.author.image}/>
// </div>
// </div>
// <div className='flex-col mx-8 mt-5 justify-center items-center'>
// <h1 className='font-bold text-2xl text-white'>{props.author.name}</h1>
// <h1 className='font-normal text-md mb-3 text-white '>প্রযুক্তি লেখক, ঢাকা থেকে</h1>
// <ShareProfileButtons/>
// </div>
// </div>

// <div className=' flex justify-center items-center absolute bottom-0 pb-8 right-[28rem]   '>
// <div className='w-1 h-10 bg-white rouded rounded-md mx-5'></div>

// <h1 className='font-bold text-2xl text-white'>{props.totalPost} <span className='font-bold text-sm text-white'>published article</span></h1>

// </div>

// </div>
//   )
// }

// export default Header

import Image from 'next/image';
import React from 'react'
import Background from '../../components/svgs/ProfileBg'
import ShareProfileButtons from '../profile/ShareProfileButtons';

import Head from 'next/head';
function Header(props) {
  return (<>
        <Head>
        <title>{props.author.name} | Pranerbangla</title>
      </Head>
       <div className="w-full h-full relative md:hidden  ">
    <Background className=" w-full h-full object-fill "/>


<div className='absolute top-0 grid grid-cols-2 justify-center items-center w-full h-full '>
<div className=' flex justify-end items-center w-full h-full '>
<div className="avatar">
<div className=" w-32  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 lg:w-12 md:w-8">
<img src= {props.author.image}/>
</div>
</div>
<div className='flex-col mx-8 mt-5 justify-center items-center md:mt-0 '>
<h1 className='font-bold text-2xl text-white md:text-sm'>{props.author.name}</h1>
<h1 className='font-normal text-md mb-3 text-white md:text-xs '>{props.author.designation }, {props.author.address}</h1>
{/* <ShareProfileButtons/> */}
</div>
</div>

<div className='font-enbody  flex justify-center items-center  md:justify-start'>
<div className='w-1 h-10 bg-white  rouded rounded-md mx-5'></div>

<h1 className='font-bold text-2xl text-white md:text-xs'>{props.totalPost} <span className='font-bold text-base text-white md:text-xs'>published article</span></h1>

</div>
</div>

</div>
<div className="bg-[#001D37] hidden w-full h-[30vh] justify-center items-center md:flex md:flex-col ">

     <div className=" mt-6 w-28 h-28  ">
        <img src={props.author.image} alt="" className="  rounded-full object-cover border-2 border-primary "></img>
</div>
<div className='my-5'>
<h1 className='font-bold text-2xl text-white text-center md:text-sm'>{props.author.name}</h1>
<h1 className='font-normal text-md mb-3 text-center text-white md:text-xs '>{props.author.designation }, {props.author.address}</h1>

<h1 className='font-bold text-2xl text-white text-center md:text-xs'>{props.totalPost} <span className='font-bold text-base text-white md:text-xs'>published article</span></h1>
</div>


</div>
</>
  )
}

export default Header