import React, { useEffect,useState } from 'react'
import Cards from '../components/About/Cards'

import Link from 'next/link';
export async function getStaticProps() {

  const res = await fetch('https://pranerbangla.com.bd/api/vb1/team-member')
  const posts = await res.json()
  const data = posts["data"]
  const resAbout = await fetch('https://pranerbangla.com.bd/api/vb1/about-us')
  const postsAbout = await resAbout.json()
  const aboutData = postsAbout["data"]
  const resLogo = await fetch('https://pranerbangla.com.bd/api/vb1/logo-info')
  const postsLogo = await resLogo.json()
  const aboutLogo = postsLogo["data"]


  return {
    props: {
      data,
      aboutData,

      aboutLogo
    },
  }
}


function About({data,aboutData,aboutLogo}) {
  const [mounted,setMounted] = useState(false)
  useEffect(()=> {
    setMounted(true)
},[])
if(!mounted) return null
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='h-full w-full flex justify-center items-center  md:hidden  '>
{aboutData?.map(items=>{
  return         <div key={items?.id} className='grid grid-cols-2 w-4/6  my-24 gap-5 p-10 bg-[#ede1be]'>
  <div className='flex flex-col'>
  <h1 className='text-4xl font-medium text-primary flex flex-col '>{items?.title_bn} </h1>
    {/* <h1 className='text-4xl font-medium text-primary flex flex-col '>{items?.title_bn} <br /> <span className='text-black text-4xl'>কেন  ?  </span></h1> */}
    <p className='text-black'  dangerouslySetInnerHTML={{ __html: items?.content_bn }}></p>
  </div>
{aboutLogo?.map(e=>{
  return  <div key={e.id} className='flex flex-col'>
  <div className='w-full h-full bg-[#f2eddc] top-0 -translate-y-32'> <img src={e.logo} className="w-full"></img> </div>
  {/* <h1 className='text-4xl font-medium text-primary flex flex-col '></h1> */}
  <p className='text-black '   dangerouslySetInnerHTML={{ __html: e.content_bn}}></p>
</div>
})}
</div>
})}


      </div>

      <div className='h-full w-full  justify-center hidden items-center  md:flex  '>
{aboutData?.map(items=>{
  return         <div key={items?.id}  className='flex flex-col w-4/6 my-24 gap-5 p-10 bg-[#ede1be]'>
  <div className='flex flex-col'>
  <h1 className='text-4xl font-medium text-primary flex flex-col '>{items?.title_bn} </h1>
    {/* <h1 className='text-4xl font-medium text-primary flex flex-col '>{items?.title_bn} <br /> <span className='text-black text-4xl'>কেন  ?  </span></h1> */}
    <p className='text-black'  dangerouslySetInnerHTML={{ __html: items?.content_bn }}></p>
  </div>
{aboutLogo?.map(e=>{
  return  <div key={e.id} className='flex flex-col'>
  <div className='w-full h-full bg-[#f2eddc] '> <img src={e.logo} className="w-full"></img> </div>
  {/* <h1 className='text-4xl font-medium text-primary flex flex-col '></h1> */}
  <p className='text-black my-12'   dangerouslySetInnerHTML={{ __html: e.content_bn}}></p>
</div>
})}
</div>
})}


      </div>

      <h1 className='text-6xl text-base-100 p-5'>প্রাণসঞ্চালক </h1>
      <div className='grid grid-cols-4 gap-4 mx-48 md:grid-cols-2 md:mx-10 '>
    {
      data?.map(item =>{
        return <Link key={item.id} href={`profile/${item.id}`}><Cards   image={item.image} title={item.name}  designations={item.designation} facebookLink={item.facebook}/></Link>;
      })
    }
      {/* <Cards img="https://images.pexels.com/photos/6507483/pexels-photo-6507483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Cards img="https://images.pexels.com/photos/6507483/pexels-photo-6507483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Cards img="https://images.pexels.com/photos/6507483/pexels-photo-6507483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Cards img="https://images.pexels.com/photos/6507483/pexels-photo-6507483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Cards img="https://images.pexels.com/photos/6507483/pexels-photo-6507483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> */}
      </div>
    </div>
  );
}

export default About