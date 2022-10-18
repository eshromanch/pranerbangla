import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../components/Carousel'
import Cards from "../components/GridCards"
import Plus from '../components/svgs/Plus'
import LongCarousel from '../components/LongCarousel'
import Circle from '../components/svgs/Circle'
import styles from '../styles/Home.module.css'
import CardImage from "../public/anna-kolosyuk-D5nh6mCW52c-unsplash.jpg"
import StagedImages from '../components/HomepageComponents/StagedImages'
import Video from '../components/HomepageComponents/Video'
import Gridimages from '../components/HomepageComponents/Gridimages'
import Link from "next/link"
// import PostDetails from './categories/post'
import React, { useEffect,useState } from 'react'


export async function getStaticProps() {

  const res = await fetch('https://pranerbangla.com.bd/api/vb1/cover-post/cover')
  const featuredRes = await fetch("https://pranerbangla.com.bd/api/vb1/featured-post/featuredPost")
  const featured = await featuredRes.json()
  const featuredData = featured["data"]
  const posts = await res.json()
  const carouselItems = posts["data"]
  const resHome = await fetch("https://pranerbangla.com.bd/api/vb1/home-layout")
  const home = await resHome.json()
  const homeData = home["data"] 
 const resVideo = await fetch('https://pranerbangla.com.bd/api/vb1/video-all')
 const video = await resVideo.json()
 const allVideo = video["data"]

 const resImages = await fetch('https://pranerbangla.com.bd/api/vb1/image-gallery')
 const images = await resImages.json()
 const galleries = images["data"]

 const resAdd = await fetch("http://pranerbangla.com.bd/api/vb1/advertisement")
 const adData = await resAdd.json()
 const contentAd = adData["data"]

 
 const gallery = galleries.reverse()


const adds = contentAd.filter(items=> items.add_space==="home")
const allVideos = allVideo.filter(items=> items.add_to_featured=="1")



  return {
    props: {
      carouselItems,
      featuredData,
      homeData,
      allVideos,
      gallery,
      adds
      
    },
  }
}

let ids;
export default function Home({carouselItems, featuredData,homeData,allVideos,gallery, adds}) {


  const [mounted,setMounted] = useState(false)
  useEffect(()=> {
    setMounted(true)
},[])
if(!mounted) return null

const section_three_to_eight= homeData?.slice(3,8) 

const sliceArrayIntoGroups = (arr, size) => {
  var step = 0, sliceArr = [], len = arr.length;
 
  while (step < len ) {
    sliceArr.push(arr.slice(step, step += size));
  
  }
  return sliceArr;
}
const groupArticle = sliceArrayIntoGroups(section_three_to_eight, 1);
const dataAll = groupArticle.map((item, index) => ({

  articles: item,
  ad: adds[index]
  
}))
const section_eight_to_ten= homeData?.slice(8,10) 
const groupArticle2 = sliceArrayIntoGroups(section_eight_to_ten, 1);
const dataAll2 = groupArticle2.map((item, index) => ({

  articles: item,
  ad: adds[index]
  
}))

  return (
    <div className='bg-gray-50 h-full  dark:bg-slate-800 ' >
     {[carouselItems[0]].map(items=> {

      return  <Carousel key={items.id} mainTitle={items.title_bn} mainImage={items.image} route={items.post_to_cat}/>
     })}
{/*      
     {advertisement?.map(items=>{
  return <a href={items.add_url}><img className=' w-[60.625rem] my-24 object-cover' src= {`https://pranerbangla.com.bd/${items.image}`} alt="" srcset="" /></a>
})}    */}

     

<div className='mx-48 lg:mx-10'>

<div className='my-12 w-full grid grid-cols-3 gap-20 sm:flex sm:flex-col'>
<div className='col-span-2'><div><b><h1 className='flex   items-center text-base text-lg text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 "/> শেষ সংযুক্তি </h1></b></div>
<div className='grid grid-cols-3 gap-4'>
      <div className='col-span-2 w-full h-full'>
{[featuredData[0]].map(items=>{
  return <StagedImages key={items.id} image={items.image} title= {items.title_bn} route={items.post_to_cat}/>
})}
         </div>
{featuredData.slice(1,5).map(items =>{
  return  <div key={items.id} className=' w-full h-full '>
  <StagedImages image={items.image} title= {items.title_bn}/>
  </div>
})}
    </div>
    
  </div>
  <div className='flex flex-col '><b><h1 className='mb-4 text-lg text-black dark:text-white'>সম্পাদকীয়</h1></b>
  <div className='flex flex-col'>
    <div className='h-40 w-40 bg-gray-500'></div>
    <p className='mb-4 text-base text-black dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt similique repellat dolore quibusdam corporis, excepturi magnam modi nostrum, vitae ipsum quos rem, aspernatur consequatur? Laborum fugiat illo placeat facilis.</p>
  </div>
  </div>
</div>
</div>

{homeData?.slice(0,2).map(homeDatas=>{

  return <div key={homeDatas.id} className='my-12 mx-48 lg:mx-10 '>
    {adds.slice(0,1).map(items=>{
  return <div key={items.id} className='w-full flex justify-center'><a href={items.add_url}><img className=' w-[60.625rem] mb-12 object-cover' src= {`${items.image}`} alt=""/></a></div>
})}   
  <div key={homeDatas.id}>

{[homeDatas.category]?.map((cat)=>{
  ids= cat?.id;
  return   <div key={cat.id} className='flex  justify-between items-center'>
  
  <b><h1 className='flex   items-center text-base text-lg text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>{cat?.name_bn} </h1></b>
<b><Link href={`/categories/`+ids}><a className='btn btn-ghost text-lg text-base-100  dark:text-white' href="#">
<h4 className='flex -mt-5'><Plus className="h-5 pr-2 mt-1"/> আরো পড়ুন </h4>
  </a></Link></b>
</div>

})}
  </div>
  <div className='grid grid-cols-4  gap-10 md:grid-cols-2'>
{[homeDatas.category]?.map(catItems=>{
  const rows = homeDatas.num_of_row * 4
 return catItems?.post_to_category?.slice(0,rows).map(post=>{
   

      return <Link key={homeDatas.id} href={`/categories/${catItems.category_id}/articles/${post.post_id}`}><a ><Cards title={post?.post?.title_bn} catagory={catItems.name_bn} time={post.created_at} imgSrc={post?.post?.image} route={post?.post?.id} status={homeDatas.status} ids={ids} postId={post.post_id}/></a></Link>

  })
})}



  </div>
  
  </div>
  
})}

{adds.slice(1,2).map(items=>{
  return <div  key={items.id} className='w-full flex justify-center'><a href={items.add_url}><img className=' w-[60.625rem] mb-12 object-cover' src= {`${items.image}`} alt=""  /></a></div>
})}   
{/* {homeData?.map(homeDatas=>{

if (homeDatas.section_name === "Section 3") {
  return <div className='mx-48 lg:mx-10 '>
<div key={homeDatas.id}>

{[homeDatas.category]?.map((cat)=>{
ids= cat.id;
return   <div className='flex  justify-between items-center'>

<b><h1 className='flex   items-center text-base text-lg text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>{cat.name_bn} </h1></b>
<b><Link href={`/categories/`+ids}><a className='btn btn-ghost text-lg text-base-100  dark:text-white' href="#">
<h4 className='flex '><Plus className="h-5 pr-2 mt-1"/> আরো পড়ুন </h4>
</a></Link></b>
</div>

})}
</div>
<div className='grid grid-cols-4  gap-10 md:grid-cols-2'>
{[homeDatas.category]?.map(catItems=>{
const rows = homeDatas.num_of_row * 4
return catItems.post_to_category?.slice(0,rows).map(post=>{

    return <Link key={homeDatas.id} href={`/categories/${catItems.category_id}/articles/${post.post_id}`}><a ><Cards title={post?.post?.title_bn} catagory={catItems.name_bn} time={post.created_at} imgSrc={post?.post?.image} route={post?.post?.id} status={homeDatas.status} ids={ids}/></a></Link>

})
})}



</div>
</div>
}

})} */}



{homeData?.map(homeDatas =>{
  if (homeDatas.section_name === "Section 3") {
    return <div className='mb-12 bg-[#F1F1F6] w-full h-full p-10 dark:bg-[#202426] '>
      {[homeDatas.category]?.map((cat)=>{
const ids= cat?.id;
return <div  key={cat.id}  className='mx-80 flex justify-between items-center lg:mx-24 md:mx-0'><b><h1 className='flex  justify-between items-center text-lg  text-black mb-4 dark:text-white'><Circle className=" h-3  pr-2 mb-1"/>{cat?.name_bn}  </h1></b>
<b><Link href={`/categories/`+ids}><a className='btn btn-ghost text-lg text-base-100  dark:text-white' href="#">
<h4 className='flex -mt-5'><Plus className="h-5 pr-2 mt-1"/> আরো পড়ুন </h4>
</a></Link></b>
    </div>

})}
{[homeDatas.category]?.map(catItems=>{
  
return     <div  key={catItems.id}  className='mx-80 h-[40vh]  grid grid-cols-4  gap-10 lg:mx-0 md:gap-2 md:flex md:flex-col'>
{   [ catItems?.post_to_category[0]]?.map(post=>{
 return<div  key={post.id}  className=''>
 <Link key={homeDatas.id} href={`/categories/${catItems?.category_id}/articles/${post?.post_id}`}><a><div className="relative card card-compact w-full h-full bg-transparent  ">
 
 <figure className='h-full w-full'>
 {/* <Image src={post?.post?.image} layout="fill" objectFit='cover' /> */}
 <img src={post?.post?.image} className='w-full h-full object-cover' alt="" />
 </figure>
 <div className="absolute card-body w-full mt-52 items-center">
 <h2 className="card-title font-bold ">{post?.post?.title_bn}</h2>
 {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
 
 </div>
 </div></a></Link>
 </div>


 })}

{   [ catItems?.post_to_category[1]]?.map(post=>{
 return <div  key={post?.post_id}  className='col-span-2'>
  <Link key={homeDatas.id} href={`/categories/${catItems?.category_id}/articles/${post?.post_id}`}><a><div className="relative card card-compact w-full h-full bg-transparent  ">
 
 <figure className='h-full w-full'>
 {/* <Image src={post?.post?.image} layout="fill" objectFit='cover' /> */}
 <img src={post?.post?.image} className='w-full h-full' alt="" />
 </figure>
 <div className="absolute card-body w-full mt-52 items-center">
 <h2 className="card-title font-bold ">{post?.post?.title_bn}</h2>
 {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
 
 </div>
 </div></a></Link>
 </div>


 })}

{   [ catItems?.post_to_category[2]]?.map(post=>{
 return <Link key={homeDatas.id} href={`/categories/${catItems?.category_id}/articles/${post?.post_id}`}><a><div className="relative card card-compact w-full h-full bg-transparent  ">
 
 <figure className='h-full w-full'>
 {/* <Image src={post?.post?.image} layout="fill" objectFit='cover' /> */}
 <img src={post?.post?.image} className='w-full h-full' alt="" />
 </figure>
 <div className="absolute card-body w-full mt-52 items-center">
 <h2 className="card-title font-bold ">{post?.post?.title_bn}</h2>
 {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
 
 </div>
 </div></a></Link>

 })}

</div>

})}
    </div>
  }
})}
{/* {adds.slice(2,3).map(items=>{
  return <div className='w-full flex justify-center'><a href={items.add_url}><img className=' w-[60.625rem] my-24 object-cover' src= {`${items.image}`} alt="" srcset="" /></a></div>
})}    */}

{/* <div className='mx-48 my-12'>
<div>
<div className='flex justify-between items-center'><b><h1 className='flex  justify-between items-center text-lg  text-black mb-4 dark:text-white'><Circle className=" h-3  pr-2 mb-1"/>খোলা জানালা  </h1></b>
<b><a className='btn btn-ghost text-base text-base-100 mb-4 dark:text-white' href="#">
<h4 className='flex '><Plus className="h-5 pr-2 mt-0"/> আরো পড়ুন </h4>
  </a></b>
</div>
</div>
<div className='grid grid-cols-4 mb-4  gap-10'>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
</div>
</div> */}

{/* original */}
{/* {homeData?.slice(3,7).map(homeDatas=>{

return <div className='my-12 mx-48 lg:mx-10 '>
<div key={homeDatas.id}>

{[homeDatas.category]?.map((cat)=>{
ids= cat.id;
return   <div className='flex  justify-between items-center'>

<b><h1 className='flex   items-center text-base text-lg text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>{cat.name_bn} </h1></b>
<b><Link href={`/categories/`+ids}><a className='btn btn-ghost text-lg text-base-100  dark:text-white' href="#">
<h4 className='flex -mt-5'><Plus className="h-5 pr-2 mt-1"/> আরো পড়ুন </h4>
</a></Link></b>
</div>

})}
</div>
<div className='grid grid-cols-4  gap-10 md:grid-cols-2'>
{[homeDatas.category]?.map(catItems=>{
const rows = homeDatas.num_of_row * 4
return catItems.post_to_category?.slice(0,rows).map(post=>{
 
    return <Link key={homeDatas.id} href={`/categories/${catItems.category_id}/articles/${post.post_id}`}><a ><Cards title={post?.post?.title_bn} catagory={catItems.name_bn} time={post.created_at} imgSrc={post?.post?.image} route={post?.post?.id} status={homeDatas.status} ids={ids}/></a></Link>

})
})}



</div>

</div>

})} */}

{adds.slice(2,3).map(items=>{
  return <div  key={items.id}  className='w-full flex justify-center'><a href={items.add_url}><img className=' w-[60.625rem]  object-cover' src= {`${items.image}`} alt=""/></a></div>
})}   

{/* original */}

{dataAll.map(homeDatas=>{


return <div  key={homeDatas.id}  className='my-12 mx-48 lg:mx-10 '>
  {/* {adds.slice(2,3).map(items=>{
return <div className='w-full flex justify-center'><a href={items.add_url}><img className=' w-[60.625rem] my-24 object-cover' src= {`${items.image}`} alt="" srcset="" /></a></div>
})}    */}
<div key={homeDatas.id}>

{
homeDatas.articles.map(item=>{

    ids=  item.category?.id
  return   <div  key={item.id}  className='flex  justify-between items-center'>
    
  <b><h1 className='flex   items-center text-base text-lg text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>{item.category?.name_bn} </h1></b>
  <b><Link href={`/categories/`+ids}><a className='btn btn-ghost text-lg text-base-100  dark:text-white'>
  <h4 className='flex -mt-5'><Plus className="h-5 pr-2 mt-1"/> আরো পড়ুন </h4>
  </a></Link></b>
  </div>
  // item.category?.map((cat)=>{
  //   ids= cat.id;
  //   return   <div className='flex  justify-between items-center'>
    
  //   <b><h1 className='flex   items-center text-base text-lg text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>{cat.name_bn} </h1></b>
  //   <b><Link href={`/categories/`+ids}><a className='btn btn-ghost text-lg text-base-100  dark:text-white' href="#">
  //   <h4 className='flex -mt-5'><Plus className="h-5 pr-2 mt-1"/> আরো পড়ুন </h4>
  //   </a></Link></b>
  //   </div>
    
  //   })
})
}
</div>
<div className='grid grid-cols-4  gap-10 md:grid-cols-2'>
{homeDatas.articles?.map(catItems=>{
  // console.log(catItems.num_of_row)
const rows = catItems.num_of_row * 4

return catItems.category?.post_to_category.slice(0,rows).map(post=>{


  return <Link  key={post.id}   href={`/categories/${catItems.category.category_id}/articles/${post.post_id}`}><a ><Cards title={post.post.title_bn} catagory={catItems.category.name_bn} time={post.created_at} imgSrc={post?.post?.image} route={post?.post?.id} status={catItems.status} ids={ids}  postId={post.post_id}/></a></Link>

  // return <Link href={`/categories/${catItems.category.category_id}/articles/${post.post_id}`}><a href=""><div><h1 className='text-black'>{post.post.title_bn}</h1>
  // <h1 className='text-black'>{catItems.category.name_bn}</h1>
  // </div></a></Link>
// console.log(catItems.id)
//     return <Link  key={catItems.id}  href={`/categories/${catItems.category.category_id}/articles/${post.post_id}`}><a ><Cards title={post.post.title_bn} catagory={catItems.category.name_bn} time={post.created_at} imgSrc={post?.post?.image} route={post?.post?.id} status={homeDatas.articles.status} ids={ids}/></a></Link>
})
// catItems.category.map(cats=>{
//   console.log(cats)
// })



// return catItems.category.post_to_category?.slice(0,rows).map(post=>{
 
//     console.log(`/categories/${catItems.category_id}/articles/${post.post_id}`);
//     console.log( post?.post?.title_bn, post?.post?.created_at,post?.post?.image);
//     return <Link key={homeDatas.articles.id} href={`/categories/${catItems.category.category_id}/articles/${post.post_id}`}><a ><Cards title={post?.post?.title_bn} catagory={catItems.category.name_bn} time={post.created_at} imgSrc={post?.post?.image} route={post?.post?.id} status={homeDatas.articles.status} ids={ids}/></a></Link>

// })
})}



</div>
<div className='mx-48 flex justify-center items-center lg:mx-10'>   
        {/* {dataAll.map((ads) =>{
          if (ads.ad.add_space ==="categoty") {
            
           return <img className='h-32 w-full object-fill' src= {`https://pranerbangla.com.bd/${ads.ad.image}`} alt="" srcset="" />
          }
        })} */}
        <a href={homeDatas.ad?.add_url}><img className=' w-full my-6 object-cover' src= {`${homeDatas.ad?.image}`} alt=""/></a>
        </div>
</div>

})}




<div className='w-full bg-[#202426] p-10 mb-4'>
<div className='mx-80 flex justify-between items-center lg:mx-24'><b><h1 className='flex  justify-between items-center text-lg  text-white mb-4 dark:text-white'><Circle className=" h-3  pr-2 mb-1"/>ভিডিও   </h1></b>
<b><Link href={"Allvideos"}><a className='btn btn-ghost text-base text-white mb-4 dark:text-white' href="#">
<h4 className='flex '><Plus className="h-5 pr-2 mt-0"/> আরো দেখুন </h4>
  </a></Link></b>
</div>
<div className='mx-80 grid grid-cols-4 gap-10 md:mx-32'>
  <div className='col-span-2'>
    {
      allVideos?.slice(0,1).map(items =>{
        if (items.add_to_featured=="1") {
          return <Video link={items.video_url} img={items.image}/>
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
  {/* <div><Video/></div>
  <div><Video/></div>
  <div><Video/></div> */}
</div>
</div>

{/* <div className='mx-48 my-12'>
<div>
<div className='flex justify-between items-center'><b><h1 className='flex  justify-between items-center text-lg  text-black mb-4 dark:text-white'><Circle className=" h-3  pr-2 mb-1"/>নির্বাচিত </h1></b>
<b><a className='btn btn-ghost text-base text-base-100  dark:text-white' href="#">
<h4 className='flex '><Plus className="h-5 pr-2 mt-0"/> আরো দেখুন  </h4>
  </a></b>
</div>
</div>
<div className='grid grid-cols-4  gap-10'>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
</div>
</div> */}

{dataAll2.map(homeDatas=>{


return <div  key={homeDatas.id}  className='my-12 mx-48 lg:mx-10 '>
  {/* {adds.slice(2,3).map(items=>{
return <div className='w-full flex justify-center'><a href={items.add_url}><img className=' w-[60.625rem] my-24 object-cover' src= {`${items.image}`} alt="" srcset="" /></a></div>
})}    */}
<div key={homeDatas.id}>

{
homeDatas.articles.map(item=>{
  // console.log(item.category.id)
    ids=  item.category?.id
  return   <div  key={item.id}  className='flex  justify-between items-center'>
    
  <b><h1 className='flex   items-center text-base text-lg text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>{item.category?.name_bn} </h1></b>
  <b><Link href={`/categories/`+ids}><a className='btn btn-ghost text-lg text-base-100  dark:text-white'>
  <h4 className='flex -mt-5'><Plus className="h-5 pr-2 mt-1"/> আরো পড়ুন </h4>
  </a></Link></b>
  </div>
  // item.category?.map((cat)=>{
  //   ids= cat.id;
  //   return   <div className='flex  justify-between items-center'>
    
  //   <b><h1 className='flex   items-center text-base text-lg text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>{cat.name_bn} </h1></b>
  //   <b><Link href={`/categories/`+ids}><a className='btn btn-ghost text-lg text-base-100  dark:text-white' href="#">
  //   <h4 className='flex -mt-5'><Plus className="h-5 pr-2 mt-1"/> আরো পড়ুন </h4>
  //   </a></Link></b>
  //   </div>
    
  //   })
})
}
</div>
<div className='grid grid-cols-4  gap-10 md:grid-cols-2'>
{homeDatas.articles?.map(catItems=>{
  // console.log(catItems.num_of_row)
const rows = catItems.num_of_row * 4

return catItems.category?.post_to_category.slice(0,rows).map(post=>{

  // console.log(`/categories/${catItems.category_id}/articles/${post.post_id}`);
  // console.log( post?.post?.title_bn, post?.post?.created_at,post?.post?.image);
  return <Link  key={post.id}   href={`/categories/${catItems.category.category_id}/articles/${post.post_id}`}><a ><Cards title={post.post.title_bn} catagory={catItems.category.name_bn} time={post.created_at} imgSrc={post?.post?.image} route={post?.post?.id} status={catItems.status} ids={ids}  postId={post.post_id}/></a></Link>

  // return <Link href={`/categories/${catItems.category.category_id}/articles/${post.post_id}`}><a href=""><div><h1 className='text-black'>{post.post.title_bn}</h1>
  // <h1 className='text-black'>{catItems.category.name_bn}</h1>
  // </div></a></Link>
// console.log(catItems.id)
//     return <Link  key={catItems.id}  href={`/categories/${catItems.category.category_id}/articles/${post.post_id}`}><a ><Cards title={post.post.title_bn} catagory={catItems.category.name_bn} time={post.created_at} imgSrc={post?.post?.image} route={post?.post?.id} status={homeDatas.articles.status} ids={ids}/></a></Link>
})
// catItems.category.map(cats=>{
//   console.log(cats)
// })



// return catItems.category.post_to_category?.slice(0,rows).map(post=>{
 
//     console.log(`/categories/${catItems.category_id}/articles/${post.post_id}`);
//     console.log( post?.post?.title_bn, post?.post?.created_at,post?.post?.image);
//     return <Link key={homeDatas.articles.id} href={`/categories/${catItems.category.category_id}/articles/${post.post_id}`}><a ><Cards title={post?.post?.title_bn} catagory={catItems.category.name_bn} time={post.created_at} imgSrc={post?.post?.image} route={post?.post?.id} status={homeDatas.articles.status} ids={ids}/></a></Link>

// })
})}



</div>
<div className='mx-48 flex justify-center items-center lg:mx-10'>   
        {/* {dataAll.map((ads) =>{
          if (ads.ad.add_space ==="categoty") {
            
           return <img className='h-32 w-full object-fill' src= {`https://pranerbangla.com.bd/${ads.ad.image}`} alt="" srcset="" />
          }
        })} */}
        <a href={homeDatas.ad?.add_url}><img className=' w-full my-6 object-cover' src= {`${homeDatas.ad?.image}`} alt=""/></a>
        </div>
</div>

})}


<div className='w-full bg-[#202426] p-10 mb-4  '>
<div className='mx-80 flex justify-between items-center lg:mx-10'><b><h1 className='flex  justify-between items-center text-lg  text-white mb-4 dark:text-white'><Circle className=" h-3  pr-2 mb-1"/>ছবির গল্প </h1></b>
<b><Link href={"Allimages"}><a className='btn btn-ghost text-base text-white mb-4 dark:text-white' href="#">
<h4 className='flex '><Plus className="h-5 pr-2 mt-0"/> আরো দেখুন  </h4>
  </a></Link></b>
</div>

<div className='mx-80 grid grid-cols-2 bg-white gap-4 p-4 align-center justify-center h-1/2 lg:mx-24 sm:mx-5 sm:p-2'>

  {[gallery[0]]?.map(items=>{
  return  <Link  key={items.id}  href={{pathname:`gallery/${items?.id}`}}><div className='h-full'><Gridimages img={`${items?.image}`} title={items?.title_bn}/> </div></Link>
})}
 
<div className='grid grid-cols-2 gap-4 '>
<div className='col-span-2'>
{[gallery[1]]?.map(items=>{
  return  <Link  key={items.id}  href={{pathname:`gallery/${items?.id}`}}><div className='h-full'><Gridimages img={`${items?.image}`} title={items?.title_bn}/> </div></Link>
})}
 
   </div>
  <div >{[gallery[2]]?.map(items=>{
  return  <Link  key={items.id}  href={{pathname:`gallery/${items?.id}`}}><div className='h-full'><Gridimages img={`${items?.image}`} title={items?.title_bn}/> </div></Link>
})}</div>
  <div>{[gallery[3]]?.map(items=>{
  return  <Link  key={items.id}  href={{pathname:`gallery/${items?.id}`}}><div className='h-full'><Gridimages img={`${items?.image}`} title={items?.title_bn}/> </div></Link>
})}</div>
</div>

</div>
</div>

<div className=' my-12'>
<div className='flex justify-center items-center w-full '>
  <div className=' border-b-4 my-12 p-4 w-1/2'>  <b><h1 className='text-base text-center text-black dark:text-white  '>প্রচ্ছেদ </h1></b>
  
  {/* <span className='color-primary w-10 h-4/6'></span> */}
  </div>

</div>
<LongCarousel/>
</div>

    </div>





  )
}
