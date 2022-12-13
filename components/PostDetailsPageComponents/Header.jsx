import React from "react";
import Facebook from "../svgs/Facebook"
import Tweeter from "../svgs/Tweeter"
import ZoomIn from "../svgs/ZoomIn"
import ZoomOut from "../svgs/ZoomOut"
import Link from "next/link";
import ZoomBtn from "./ZoomBtn";
import ShareArticleButtons from "./ShareArticleButtons";

// {setFontSize,fontSize}
export function Header( props) {




const date =new Date(`${props.time}`).toLocaleString('en-uk',{day:"numeric",month:'short', year:'numeric'})
  return (
   <div className='grid grid-cols-2 w-full gap-8 py-8 border-b-2 md:flex md:flex-col'>
                 <div className='flex flex-col h-full w-full'>
                 {props.postCat.map(item=>{
                   
  return <Link key={item.id} href={{pathname:`/categories/${item.category.id}/filter/${item.category.id}`, query:item.category.id}} legacyBehavior><button className='btn btn-primary rounded-none text-lg font-normal w-1/4 m-4 transition ease-in-out   hover:bg-[#4b5767] hover:border-0 hover:rounded-lg duration-400'>{item.category.name_bn}</button></Link>;
 })
 }
                 <h1 className='text-5xl font-bold text-black dark:text-white  m-4 '>{props.title}</h1>

     <div className='flex  h-full justify-center items-center my-8 gap-4'>
    <Link href={`/profile/${props.writerId}`} legacyBehavior>
     <div className="cursor-pointer mt-6 w-36 h-36  ">
        <img src={props.user.image} alt="" className="  rounded-full object-cover border-2 border-primary "></img>
        
     </div>
    </Link>

     <div className='w-full'>
     <Link href={`/profile/${props.writerId}`} legacyBehavior><h1 className='font-bold text-2xl text-black cursor-pointer dark:text-white'>{props.user.name}</h1></Link>
         {/* <h1 className='font-normal text-md mb-3 text-black dark:text-white '>প্রযুক্তি লেখক, ঢাকা থেকে</h1> */}
         <h1 className='font-normal text-md mb-3 text-black dark:text-white '>{props.user.designation}, {props.user.address}  </h1>
         <div className='flex'>
         {/* <h1 className='font-normal text-sm text-black dark:text-white'>প্রকাশ: ১৩ জুন ২০২২ </h1> */}
         <h1 className='font-normal text-sm text-black dark:text-white'>প্রকাশ: {date}</h1>
         <div className='w-1 h-5 bg-primary rouded rounded-md mx-5'></div>
         {/* <h1 className='font-normal  text-sm text-black dark:text-white'>12.2K বার পড়া হয়েছে </h1> */}
         <h1 className='font-normal  text-sm text-black dark:text-white'>{props.count} বার পড়া হয়েছে </h1>
         </div>
     </div>

     </div>
     {/* <div className='flex mx-5 gap-4'>
       <a href={props.user.facebook}><Facebook className="h-7 fill-[#4867aa] transition ease-in-out  hover:-translate-y-[2px] hover:scale-80  duration-300 " /></a>
       <a><Tweeter className="h-7 fill-[#0077b5] transition ease-in-out  hover:-translate-y-[2px] hover:scale-80  duration-300" /></a>

      <button onClick={() => setFontSize(fontSize + 2)}><ZoomIn className="h-7 fill-[#0077b5] transition ease-in-out  hover:-translate-y-[2px] hover:scale-80  duration-300" /></button>
      <button onClick={() => setFontSize(fontSize - 2)}><ZoomOut className="h-7 fill-[#0077b5] transition ease-in-out  hover:-translate-y-[2px] hover:scale-80  duration-300" /></button>
     </div> */}
     <ShareArticleButtons/>
                 </div>
                 <div className='h-full w-full'>
                 <figure className='h-full w-full'><img className='w-full h-full' src={props.headImage} alt="Shoes" /></figure>
                 </div>
             </div>
  );
}
  

