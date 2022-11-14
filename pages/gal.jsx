import React from 'react';
import Circle from '../components/svgs/Circle'
import Plus from '../components/svgs/Plus'
import Gridimages from '../components/HomepageComponents/Gridimages'
import Link from "next/link"
function gal(props) {
    return (

<div className='w-full h-1/2 bg-[#202426] p-10 mb-4  '>
<div className='mx-80 flex justify-between items-center lg:mx-10'><b><h1 className='flex  justify-between items-center text-lg  text-white mb-4 dark:text-white'><Circle className=" h-3  pr-2 mb-1"/>ছবির গল্প </h1></b>
<b><Link legacyBehavior href={"Allimages"}><a className='btn btn-ghost text-base text-white mb-4 dark:text-white' href="#">
<h4 className='flex '><Plus className="h-5 pr-2 mt-0"/> আরো দেখুন</h4></a></Link></b>
</div>

<div className='mx-80 grid grid-cols-2 bg-white gap-4 p-4 align-center justify-center h-1/2 lg:mx-24 sm:mx-5 sm:p-2'>

  {[gallery[0]]?.map(items=>{
  return  <Link legacyBehavior  key={items.id}  href={`gallery/${items?.id}`}><Gridimages img={`${items?.image}`} title={items?.title_bn}/></Link>
})}
 
<div className='grid grid-cols-2 gap-4 '>
<div className='col-span-2'>
{[gallery[1]]?.map(items=>{
  return  <Link legacyBehavior  key={items.id}  href={`gallery/${items?.id}`}><Gridimages img={`${items?.image}`} title={items?.title_bn}/></Link>
})}
 
   </div>
  <div >{[gallery[2]]?.map(items=>{
  return  <Link legacyBehavior  key={items.id}  href={`gallery/${items?.id}`}><Gridimages img={`${items?.image}`} title={items?.title_bn}/></Link>
})}</div>
  <div>{[gallery[3]]?.map(items=>{
  return  <Link legacyBehavior  key={items.id}  href={`gallery/${items?.id}`}><Gridimages img={`${items?.image}`} title={items?.title_bn}/></Link>
})}</div>
</div>

</div>
</div>

    );
}

export default gal;