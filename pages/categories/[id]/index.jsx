
import Advertisement from '../../../components/Advertisement';
import Cards from '../../../components/GridCards'
import Circle from '../../../components/svgs/Circle'
import React, { useEffect,useState } from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router'
 
import Head from 'next/head'
let token;

if (typeof window !== 'undefined') {
  token = localStorage.getItem("token") ; 
 
}

export async function getStaticPaths() {
  const res = await fetch("https://pranerbangla.com.bd/api/vb1/category-tree")
  const data = await res.json();

  const content = data["data"]

  const paths = content.map(pageName =>{

      return {
          params: {id: pageName.id.toString()}
      }
   
  })
  return {
    paths,
    fallback: true // true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const id = context.params.id
  //  console.log(id)
//   const res = await fetch("https://pranerbangla.com.bd/api/vb1/category-to-post/" + id ,{
//     headers: {
//       "x-auth-token": token,
//       "Content-Type": "application/json",
//     },
//   } )
//   const data = await res.json()
//   const resAdd = await fetch("http://pranerbangla.com.bd/api/vb1/advertisement")
//   const adData = await resAdd.json()

//   const resChilds = await fetch("https://pranerbangla.com.bd/api/vb1/category-tree/" )
//   const childData = await resChilds.json()

//   const resData = await fetch(
//     'http://pranerbangla.com.bd/api/vb1/language'
//   );
//   const langData = await resData.json();

//   const content = data["data"]
//   const contentAd = adData["data"]
// const childContents = childData["data"]

// const language =langData["data"]





// let newNavIds=[]
//  childContents.map(e=>{
// if (e.id===parseInt(id)) {
//   e.childs?.map(i=>{
//     newNavIds.push(i.id)
//     })
// }
// })


// let childNavContentPage=[]
// // const resChildNav = await fetch("https://pranerbangla.com.bd/api/vb1/category-to-post/" + secondNavId  )
// // const resChildNavData = await resChildNav.json();
// for (let index = 0; index < newNavIds.length; index++) {
//   const resChildNav = await fetch("https://pranerbangla.com.bd/api/vb1/category-to-post/" + newNavIds[index]  )
// const resChildNavData = await resChildNav.json();
//   const element = resChildNavData["data"];
//   element?.map(items=>{
//     childNavContentPage.push(items)
//   })
// }


  // return {
  //   props: {
  //     pages:content,
  //     advertise: contentAd,
  //     childNav :childContents,
  //     ids:id,
  //     childNavContents:childNavContentPage,
  //     language
  //   },
  // }
  try {

    const res = await fetch("https://pranerbangla.com.bd/api/vb1/category-to-post/" + id ,{
    headers: {
      "x-auth-token": token,
      "Content-Type": "application/json",
    },
  } )
  const data = await res.json()
  const resAdd = await fetch("http://pranerbangla.com.bd/api/vb1/advertisement")
  const adData = await resAdd.json()

  const resChilds = await fetch("https://pranerbangla.com.bd/api/vb1/category-tree/" )
  const childData = await resChilds.json()

  const resData = await fetch(
    'http://pranerbangla.com.bd/api/vb1/language'
  );
  const langData = await resData.json();

  const content = data["data"]
  const contentAd = adData["data"]
const childContents = childData["data"]

const language =langData["data"]





let newNavIds=[]
 childContents.map(e=>{
if (e.id===parseInt(id)) {
  e.childs?.map(i=>{
    newNavIds.push(i.id)
    })
}
})


let childNavContentPage=[]
// const resChildNav = await fetch("https://pranerbangla.com.bd/api/vb1/category-to-post/" + secondNavId  )
// const resChildNavData = await resChildNav.json();
for (let index = 0; index < newNavIds.length; index++) {
  const resChildNav = await fetch("https://pranerbangla.com.bd/api/vb1/category-to-post/" + newNavIds[index]  )
const resChildNavData = await resChildNav.json();
  const element = resChildNavData["data"];
  element?.map(items=>{
    childNavContentPage.push(items)
  })
}
      if (!data) {
        return { notFound: true };
      }
        return {
    props: {
      pages:content,
      advertise: contentAd,
      childNav :childContents,
      ids:id,
      childNavContents:childNavContentPage,
      language
    },
  }
    } catch (err) {
      return { notFound: true };
    }
}





function CatagoryPage({pages,advertise , childNav,ids,childNavContents,language}) {

  const router = useRouter()
  const {id} = router.query



  const hedarCount = childNav?.find(e => e?.id === parseInt(id))




  const mergedArrayOfArticles = pages?.concat(childNavContents)

  const sortedActivities = mergedArrayOfArticles?.sort((a, b) =>new Date(b?.created_at ).getTime()- new Date(a?.created_at ).getTime())



  const [mounted,setMounted] = useState(false)
  useEffect(()=> {
    setMounted(true)
},[])
if(!mounted) return null

  const sliceArrayIntoGroups = (arr, size) => {
    var step = 0, sliceArr = [], len = arr.length;
   
    while (step < len ) {
      sliceArr.push(arr.slice(step, step += size));
    
    }
    return sliceArr;
}

const groupArticle = sliceArrayIntoGroups(sortedActivities, 8);

var newAdArray=[]
 advertise?.map((ads) =>{
 
  if (ads.add_space==="categoty") {
    newAdArray.push(ads)
  }
})


const dataAll = groupArticle.map((item, index) => ({

  articles: item,
  ad: newAdArray[index]
  
}))

const num  = parseInt(ids)


    return (
      <div className='w-full'>
         {[advertise[0]].map((ad)=> {
if (ad?.add_space==="categoty") {
return <div key={ad.id} className='-my-12 flex justify-center items-center lg:mx-10 md:mx-2 '>
            
 <a href={ad?.add_url}><img className=' w-[60.625rem] my-24 object-cover' src= {`${ad?.image}`} alt=""  /></a>
 </div>
}
          })}

          <div className='flex justify-between mx-48 border-b-2 my-8 lg:mx-10 md:mx-5'>
         
          {[pages[0]]?.map((pageItem)=>{
     return  <h1 key={pageItem.id} className='flex   items-center text-base text-3xl text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>{pageItem?.category_name_bn}</h1>
    })}
     { [language]?.map(e=>{
      if (e?.language_name==="Bangla") {
        // [hedarCount?]?.map(count=> {
        //   return <h1 className='flex   items-center text-base text-lg text-black mb-4 dark:text-white'>সাম্প্রতিক পোস্ট  {count.post_to_category_count}</h1>
        // })
        return <h1 key={hedarCount.id} className='flex   items-center text-base text-lg text-black mb-4 dark:text-white'>{`সাম্প্রতিক পোস্ট (${hedarCount?.post_to_category_count})`}</h1>
      }
      if (e?.language_name==="English") {
        return <h1 key={hedarCount.id} className='flex   items-center text-base text-lg text-black mb-4 dark:text-white'> {`Total Post (${hedarCount?.post_to_category_count})`}</h1>
      }
     })}
         
          </div>
          {childNav?.map((main)=>{


          if (main?.id === num) {
         
            return (
              <div key={main?.id} className='flex mx-48 gap-10 mb-4'>
                        <Head>
        <title>{main?.description_bn} | Pranerbangla</title>
        <meta name="description" content={main.description_bn} />
        {/* <meta name="keywords" content={group.meta_tag} /> */}
      </Head>
              {main?.childs?.map((items)=>{
              // console.log(items?.id)
            return (
              <Link
                key={items?.id}
                href={  {pathname: `${ids}/filter/${items?.id}`, query: items?.id}}
                legacyBehavior><h1 key={items?.id} className='flex   items-center text-base text-md text-black mb-4 dark:text-white'><Circle className=" h-2 pr-2 mb-1"/>{items?.name_bn}</h1></Link>
            );
              })}

 {/* <h1 className='flex   items-center text-base text-md text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>নির্বাচিত</h1>
 <h1 className='flex   items-center text-base text-md text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>নির্বাচিত</h1>
 <h1 className='flex   items-center text-base text-md text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>নির্বাচিত</h1>
 <h1 className='flex   items-center text-base text-md text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>নির্বাচিত</h1> */}
 </div>
            );
}
          })}
         
         

          <div className='grid grid-cols-4 mb-4   gap-10 mx-48 '>
          {/* {    
pages?.map(pageItem=>{

      return  <Cards title={pageItem?.title_bn} catagory={pageItem?.category_name_bn} time={pageItem?.created_at} imgSrc={pageItem?.image} route={pageItem?.id} status={pageItem?.status}/>
     
      
    })} */}

</div>
{dataAll.map((group) => {
  return (
    <div key={group?.id} className='w-full'>
        <div className="grid grid-cols-4 mb-4 gap-10 mx-48 lg:mx-10  md:grid-cols-2 md:mx-2 md:gap-5">

{
 group?.articles.map(pageItem => {
  return <Link
  key={pageItem?.id}
  href={`${ids}/articles/${pageItem?.id}`}
  ><Cards title={pageItem?.title_bn} catagory={pageItem?.category_name_bn} time={pageItem?.created_at} imgSrc={pageItem?.image} route={pageItem?.id} status={pageItem?.status} ids={ids} readed={pageItem?.count_post} postId={pageItem?.id} is_visibility={pageItem?.is_visibility}/></Link>
 }
            
    
  )
}
        </div>
        <div className='mx-48 flex justify-center items-center lg:mx-10 md:mx-2'>   
        <a key={group?.ad?.id} href={group?.ad?.add_url}><img className=' w-full my-24 object-cover' src= {`${group?.ad?.image}`} alt=""/></a>
        </div>
    </div>
  );
})}

      </div>
    );
}

export default CatagoryPage;