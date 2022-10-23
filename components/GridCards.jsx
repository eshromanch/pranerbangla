import React, { useEffect,useState } from 'react';
import Link from "next/link"
import BookmarksIcon from "./svgs/BookMarks"
import BookMarkComp from './BookMarkComp'
import Paid from "./svgs/Paid"


let token;
if (typeof window !== 'undefined') {
   token = localStorage.getItem("token")

}

function GridCards(props) {
  
  // function HandleClick(e) {

  //   e.preventDefault()
  //   console.log( props?.route)
  //   console.log(`/${props?.ids}/articles/${props?.route}`)
  //   bookmarksData.push({
  //     id: props?.route,
  //     name: props?.title,
  //     route:`/categories/${props?.ids}/articles/${props?.route}`,
  //     image:props?.imgSrc
  // })

  // localStorage.setItem('bookMarks', JSON.stringify(bookmarksData));
  
  //   console.log(bookmarksData)
  // }
  const bookmark = async (event) => {
    event.preventDefault()
    const endpoint = `https://pranerbangla.com.bd/api/vb1/bookmark/${props?.postId}`
  
  
    const options = {
  
      method: 'GET',
      
      headers: {
        // "Content-Type": 'application/json',
        'Accept': 'application/json',
        "Authorization": `Bearer ` + token
      },
      
    }

    const response = await fetch(endpoint, options)
  
    const result = await response.json()

    location.reload()
  }


  const date =new Date(`${props?.time}`).toLocaleString('en-uk',{day:"numeric",month:'short', year:'numeric'})

if (props?.status==="1") {
  return (

<div className="card w-full h-full bg-transparent">
   
<div className="card-body p-1">
<figure className='relative'><img className='h-52 rounded rounded-md object-cover transition ease-in-out delay-150  hover:scale-220  duration-300 'src={`${props?.imgSrc} `}/>
        {(() => {
              if (props?.is_visibility === 'premium'){
                  return (
                    <div className='absolute top-0 right-0 rounded-full h-8 w-8 bg-primary flex justify-center items-center m-2'> <Paid className="h-3 "/>   </div>
                  )
              }
              
            })()}
</figure>
{/* <figure ><img className='rounded rounded-md transition ease-in-out delay-150 object-cover hover:scale-220  duration-300'src="https://picsum.photos/seed/picsum/200" alt="Shoes" /></figure> */}
<div className='flex justify-between'>
<h2 className="card-title font-normal  text-xs text-gray-900 dark:text-white ">
   {props?.catagory}

  </h2>

<button onClick={bookmark}><BookmarksIcon className="h-5 dark:stroke-white"/></button>
</div>
  <p className='text-black dark:text-white'>{props?.title}</p>
  <div className="card-actions justify-between">
    <div className=""><p className='text-sm text-base-100 dark:text-white'>{date}</p></div> 
    <div className=""><p className='text-sm text-base-100 dark:text-white'>{props?.readed} বার পড়া হয়েছে</p></div>

  </div>
</div>
</div>
  )
}
}

export default GridCards

//     <Link href={`/articles/${props?.route}`}>
          
//       <a href="">
//        <div className="card w-full h-full bg-transparent">
   
//    <div className="card-body p-1">
//    <figure ><img className='h-52 rounded rounded-md object-cover transition ease-in-out delay-150  hover:scale-220  duration-300 'src={`https://pranerbangla.com.bd/${props?.imgSrc} `}/></figure>
//    {/* <figure ><img className='rounded rounded-md transition ease-in-out delay-150 object-cover hover:scale-220  duration-300'src="https://picsum.photos/seed/picsum/200" alt="Shoes" /></figure> */}
// <div className='flex justify-between'>
// <h2 className="card-title font-normal  text-xs text-gray-900 dark:text-white ">
//       {props?.catagory}

//      </h2>
//      <button className='text-sm'><BookmarksIcon className="h-5 dark:stroke-white"/></button>

// </div>
//      <p className='text-black dark:text-white'>{props?.title}</p>
//      <div className="card-actions justify-between">
//        <div className=""><p className='text-sm text-base-100 dark:text-white'>{date}</p></div> 
//        <div className=""><p className='text-sm text-base-100 dark:text-white'>3.4k বার পড়া হয়েছে</p></div>
//      </div>
//    </div>
//  </div>
//  </a>
//     </Link>