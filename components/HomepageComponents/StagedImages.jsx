import React from 'react'

import Link from 'next/link'

function StagedImages(props) {
  let catId;
  let postId

  props.route?.map(items=>{
    postId= items.post_id;
    catId = items.category_id
  })

  return (
    <Link href={`/categories/${catId}/articles/${postId}`} legacyBehavior>
        <div className="relative card card-compact  rounded-md w-full h-full bg-transparent  ">

  <figure className='h-full '>

  <img className='w-full h-full object-cover '  src= {`${props.image}`}   />
  </figure>
  <div className="absolute top-1/2 card-body w-full z-10 md:top-0">
  <h2 className="text-2xl text-center w-full lg:text-xl md:text-base ">{props.title}</h2>
  <p></p>

  </div>

  <div className='absolute w-full h-full bottom-0 bg-gradient-to-t from-black to-transparent '></div>
  </div>
      </Link>
  );
}

export default StagedImages

{/* <div>
  {
    newArray?.map((items=>{
      return  <div className="relative card card-compact rounded rounded-md w-full h-full bg-transparent  ">

      <figure className='h-full'>
      <img className='w-full h-full object-fit '  src= {`https://pranerbangla.com.bd/${items.image}`}  alt="Shoes" />
      {/* <Image src={CardImage} layout="fill" objectFit='cover' /> */}
     // </figure>
      //<div className="absolute card-body w-full mt-60 items-center">
      //<h2 className="card-title font-bold">Shoes!</h2>
      //<p>If a dog chews shoes whose shoes does he choose?</p>
      {/* <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div> */}
     // </div>
      //</div>
    //}))
  //}
//</div> */}
