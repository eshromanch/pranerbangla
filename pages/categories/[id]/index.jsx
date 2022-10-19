
import Advertisement from '../../../components/Advertisement';
import Cards from '../../../components/GridCards'
import Circle from '../../../components/svgs/Circle'
import React, { useEffect,useState } from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router'
 

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
    fallback: false // true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const id = context.params.id
  //  console.log(id)
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
}





function CatagoryPage({pages,advertise , childNav,ids,childNavContents,language}) {

  const router = useRouter()
  const {id} = router.query



  const hedarCount = childNav.find(e => e.id === parseInt(id))




  const mergedArrayOfArticles = pages.concat(childNavContents)

  const sortedActivities = mergedArrayOfArticles.sort((a, b) =>new Date(b.created_at ).getTime()- new Date(a.created_at ).getTime())



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
 advertise.map((ads) =>{
 
  if (ads.add_space==="categoty") {
    newAdArray.push(ads)
  }
})
// console.log(newAdArray)

const dataAll = groupArticle.map((item, index) => ({

  articles: item,
  ad: newAdArray[index]
  
}))
// var newNavData =[]

// childNav.map((i)=>{
// if ( i.id ===ids) {
//   newNavData.push(i)
// }
// })
const num  = parseInt(ids)
// console.log(num)

// let newNavData = childNav.filter(x=> num=== x.id )
// console.log(newNavData)

// console.log(dataAll) 


    return (
        <div className='w-full'>
           {[advertise[0]].map((ad)=> {
if (ad?.add_space==="categoty") {
  return <div className='-my-12 flex justify-center items-center lg:mx-10  '>
              
   <a href={ad?.add_url}><img className=' w-[60.625rem] my-24 object-cover' src= {`${ad?.image}`} alt=""  /></a>
   </div>
}
            })}

            <div className='flex justify-between mx-48 border-b-2 my-8 lg:mx-10'>
           
            {[pages[0]]?.map((pageItem,i)=>{
       return  <h1 key={i} className='flex   items-center text-base text-3xl text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>{pageItem?.category_name_bn}</h1>
      })}
       { [language]?.map(e=>{
        if (e.language_name==="Bangla") {
          // [hedarCount?]?.map(count=> {
          //   return <h1 className='flex   items-center text-base text-lg text-black mb-4 dark:text-white'>সাম্প্রতিক পোস্ট  {count.post_to_category_count}</h1>
          // })
          return <h1 className='flex   items-center text-base text-lg text-black mb-4 dark:text-white'>{`সাম্প্রতিক পোস্ট (${hedarCount?.post_to_category_count})`}</h1>
        }
        if (e.language_name==="English") {
          return <h1 className='flex   items-center text-base text-lg text-black mb-4 dark:text-white'> {`Total Post (${hedarCount?.post_to_category_count})`}</h1>
        }
       })}
           
            </div>
            {childNav.map((main)=>{


            if (main.id === num) {
              // console.log(main.childs)
              return <div className='flex mx-48 gap-10 mb-4'>
              {main.childs?.map((items)=>{
              // console.log(items?.id)
            return <Link key={items?.id} href={  {pathname: `${ids}/filter/${items?.id}`, query: items?.id}}><a href=""><h1 className='flex   items-center text-base text-md text-black mb-4 dark:text-white'><Circle className=" h-2 pr-2 mb-1"/>{items?.name_bn}</h1></a></Link>
              })}

 {/* <h1 className='flex   items-center text-base text-md text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>নির্বাচিত</h1>
 <h1 className='flex   items-center text-base text-md text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>নির্বাচিত</h1>
 <h1 className='flex   items-center text-base text-md text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>নির্বাচিত</h1>
 <h1 className='flex   items-center text-base text-md text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>নির্বাচিত</h1> */}
 </div>
}
            })}
           
           

            <div className='grid grid-cols-4 mb-4   gap-10 mx-48 '>
            {/* {    
pages?.map(pageItem=>{

        return  <Cards title={pageItem?.title_bn} catagory={pageItem?.category_name_bn} time={pageItem?.created_at} imgSrc={pageItem?.image} route={pageItem?.id} status={pageItem?.status}/>
       
        
      })} */}

</div>
{dataAll.map((group) => {
    return <div key={group.id} className='w-full'>
        <div className="grid grid-cols-4 mb-4 gap-10 mx-48 lg:mx-10  md:grid-cols-2">
         
{
  [language]?.map(e=>{

    if (e.language_name==="English") {
     return group.articles.map(pageItem =>  <Link key={pageItem?.id} href={`${ids}/articles/${pageItem?.id}`}><a ><Cards title={pageItem?.title_en} catagory={pageItem?.category_name_en} time={pageItem?.created_at} imgSrc={pageItem?.image} route={pageItem?.id} status={pageItem?.status} ids={ids} readed={pageItem?.count_post}/></a></Link>
            
      )
    }
    if (e.language_name==="Bangla") {
    return  group.articles.map(pageItem =>  <Link key={pageItem?.id} href={`${ids}/articles/${pageItem?.id}`}><a ><Cards title={pageItem?.title_bn} catagory={pageItem?.category_name_bn} time={pageItem?.created_at} imgSrc={pageItem?.image} route={pageItem?.id} status={pageItem?.status} ids={ids} readed={pageItem?.count_post} postId={pageItem?.id} is_visibility={pageItem?.is_visibility}/></a></Link>
            
      )
    }
  })
}
        </div>
        <div className='mx-48 flex justify-center items-center lg:mx-10'>   
        <a href={group.ad?.add_url}><img className=' w-full my-24 object-cover' src= {`${group.ad?.image}`} alt=""/></a>
        </div>
    </div>
})}

        </div>
    );
}

export default CatagoryPage;