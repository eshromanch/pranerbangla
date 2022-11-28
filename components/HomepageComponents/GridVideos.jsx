import Link from 'next/link';
import React , { useEffect,useState }from 'react'
import Circle from '../svgs/Circle';
import Plus from "../svgs/Plus"
import Videos from '../Video';


function GridVideos() {
    const [data, setData]=useState();


useEffect(()=>{
    async function fetchData() {
      const res = await fetch(
        'https://pranerbangla.com.bd/api/vb1/video-all'
      );
      const {data} = await res.json();
      setData(data)
    }
    fetchData()
  },[]);
  const allVideo = data?.filter(items=> items.add_to_featured=="1")

  return (
    <div className='w-full bg-[#202426] p-10 mb-4'>
    <div className='mx-80 flex justify-between items-center lg:mx-24 md:mx-5'><b><h1 className='flex  justify-between items-center text-lg  text-white mb-4 dark:text-white'><Circle className=" h-3  pr-2 mb-1"/>ভিডিও   </h1></b>
    <b><Link legacyBehavior href={"Allvideos"}><a className='btn btn-ghost text-base text-white mb-4 dark:text-white' href="#">
    <h4 className='flex '><Plus className="h-5 pr-2 mt-0"/> আরো দেখুন </h4></a></Link></b>
    </div>
    <div className='mx-80 grid grid-cols-4 gap-10 md:mx-5 md:gap-2'>
      <div className='col-span-2'>
        {
          allVideo?.slice(0,1).map(items =>{
            return <Videos key={items.id} link={items.video_url} img={items.image}/>
          })
        }
       </div>
      <div className='col-span-2'>
      {
          allVideo?.slice(1,2).map(items =>{
            console.log(items)
            return <Videos key={items.id} link={items.video_url} img={items.image}/>
          })
        }
      </div>
     {
          allVideo?.slice(2,6).map(items =>{
            return <Videos key={items.id} link={items.video_url} img={items.image} iframe={items.video_embed_code}/>
          })
        }
    
    </div>
    </div>
  )
}

export default GridVideos