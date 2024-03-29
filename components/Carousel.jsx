import React from 'react';
import Image from 'next/image';
import CardImage from "../public/anna-kolosyuk-D5nh6mCW52c-unsplash.jpg"
import {useState, useEffect} from "react"
import Link from "next/link"
function Carousel(props) {

const [data, setData]=useState();


useEffect(()=>{
    async function fetchData() {
      const res = await fetch(
        'https://pranerbangla.com.bd/api/vb1/cover-post/cover'
      );
      const {data} = await res.json();
      setData(data)
    }
    fetchData()
  },[]);
  
  

    return (

      <div className={`hero relative h-[75vh] w-full overflow-hidden `} > 
       <img className='absolute -z-1 object-fit w-full h-full lg:object-cover' src={`${data?.[0]['image']}`} alt="" /> 



       <div className="grid-rows-2  h-full w-full hero-content  text-neutral-content sm:flex sm:flex-col sm:ml-[80%]">
         <div className="w-full">

       <Link
         key={data?.[0]['id']}
         href={`categories/${data?.[0]['post_to_cat'][0]["category_id"]}/articles/${data?.[0]['post_to_cat'][0]["post_id"]}`}
         legacyBehavior><h1 className="text-5xl text-white  group transition duration-300 cursor-pointer drop-shadow-xl sm:text-xl">{data?.[0]['title_bn']}<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span></h1></Link>
         
         </div>
         <div className="flex flex-col translate-x-1/2 w-full gap-4 lg:translate-x-0 lg:justify-center ">
     {
       data?.slice(1,5).map(item =>{
        
     if (item.status==="1") {
       return item.post_to_cat.map(cat=>{
         return (
           <div key={item.id} className='flex justify-center items-center h-full  gap-4  ' >
       <Image   className='w-28 h-28 sm:w-14 sm:h-14 object-cover' src={`${item.image}`} width="100" height="100" quality={75}></Image>
           {/* <img className='w-32 h-32 sm:w-14 sm:h-14 object-cover' src={`${item.image}`} alt="" /> */}
           <Link
             href={`categories/${cat.category_id}/articles/${cat.post_id}`}
             legacyBehavior><h1 className="text-2xl text-white w-full font-semibold group transition duration-300 cursor-pointer sm:text-xs sm:font-normal drop-shadow-xl ">{item.title_bn}<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary "></span></h1></Link>
         </div>
         ); 
       }); 
     } 
       })
     }
         </div>
       </div>
       {/* <div className='absolute w-full h-full bottom-0 bg-black opacity-5 '></div> */}
     </div>
    );
}

export default Carousel;