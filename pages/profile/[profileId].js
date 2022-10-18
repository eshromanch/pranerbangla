
import React from 'react';
import Circle from '../../components/svgs/Circle'
import Cards from '../../components/GridCards'
import Header from '../../components/profile/Header';
import { ProfileDescriptions } from '../../components/profile/ProfileDescriptions';

import Link from 'next/link';

export async function getStaticPaths() {

  const res = await fetch("https://pranerbangla.com.bd/api/vb1/author-list")
  const data = await res.json();

  const content = data["data"]

  const paths = content.map(pageName =>{

      return {
          params: {profileId: pageName.id.toString()}
      }
   
  })
  return {
    paths,
    fallback: false // true or 'blocking'
  };

}

export async function getStaticProps(context) {
  const id = context.params.profileId

  const res = await fetch("https://pranerbangla.com.bd/api/vb1/author-post/" + id)
  const data = await res.json();
const content = data["data"]
const authorInfo = data["authorInfo"]
const totalPost = data["countPost"]

  return {
    // Passed to the page component as props
    props: { 
      cardsData: content, 
      ids: id,
      totalPost,
      authorInfo
    },
  }
}
function Profile({cardsData,ids,totalPost,authorInfo}) {
    return (
        <div className='flex flex-col justify-center items-center '>
          <Header totalPost={totalPost} author={authorInfo}/>
<ProfileDescriptions    about={authorInfo.about} />
            <div className=' my-12'>
<div className='mx-48  md:mx-10'>
<div className='flex justify-between items-center'><b><h1 className='flex   items-center text-base text-lg text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>লেখা সমুহ    </h1></b>
<b><a className='btn btn-ghost text-lg text-base-100 mb-4 dark:text-white' href="#">

  </a></b>
</div>
</div>
<div className='grid grid-cols-4 mb-4  gap-10 mx-48 md:mx-10 md:grid-cols-2'>
{cardsData?.map(pageItem =>{
  return <Link href={`/categories/${ids}/articles/${pageItem.id}`}><a ><Cards title={pageItem.title_bn} catagory={pageItem.category_name_bn} time={pageItem.created_at} imgSrc={pageItem.image} route={pageItem.id} status={pageItem.status}/></a></Link>
})}
{/* <Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/> */}
</div>
</div>
        </div>
    );
}


   
  export default Profile;