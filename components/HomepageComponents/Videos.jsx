import React,{useEffect,useState} from 'react';
import Video from "../HomepageComponents/Video"
function Videos(props) {
    const [data, setData]=useState();


    useEffect(()=>{
        async function fetchData() {
          const res = await fetch(
            'http://pranerbangla.com.bd/api/vb1/video-all'
          );
          const {data} = await res.json();
          setData(data)
        }
        fetchData()
      },[]);
      const allVideos = data?.filter(items=> items.add_to_featured=="1")
    return (
<div className='mx-80 grid grid-cols-4 gap-10 md:mx-32'>
  <div className='col-span-2'>
    {
      allVideos?.slice(0,1).map(items =>{
        if (items.add_to_featured=="1") {
          return <Video key={items.id} link={items.video_url} img={items.image}/>
        }
      })
    }
   </div>
  <div className='col-span-2'>
  {
      allVideos?.slice(1,2).map(items =>{
        return <Video  key={items.id}  link={items.video_url} img={items.image}/>
      })
    }
  </div>
  <div>    {
      allVideos?.slice(2,3).map(items =>{
        return <Video  key={items.id}  link={items.video_url} img={items.image} iframe={items.video_embed_code}/>
      })
    }</div>
      <div>    {
      allVideos?.slice(3,4).map(items =>{
        return <Video  key={items.id}  link={items.video_url} img={items.image} iframe={items.video_embed_code}/>
      })
    }</div>
      <div>    {
      allVideos?.slice(4,5).map(items =>{
        return <Video  key={items.id}  link={items.video_url} img={items.image} iframe={items.video_embed_code}/>
      })
    }</div>
      <div>    {
      allVideos?.slice(5,6).map(items =>{
        return <Video  key={items.id}  link={items.video_url} img={items.image} iframe={items.video_embed_code}/>
      })
    }</div>

</div>
    );
}

export default Videos;