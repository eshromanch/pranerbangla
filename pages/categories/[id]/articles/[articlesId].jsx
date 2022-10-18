
import Circle from '../../../../components/svgs/Circle'

import Plus from '../../../../components/svgs/Plus'
import Cards from '../../../../components/GridCards'
import FaceBookComment from '../../../../components/PostDetailsPageComponents/FacebookComment';
import ShareArticleButtons from '../../../../components/PostDetailsPageComponents/ShareArticleButtons';
import LongCarousel from '../../../../components/LongCarousel'
import Clipboard from '../../../../components/PostDetailsPageComponents/ClipBoard';
import Indicator from '../../../../components/PostDetailsPageComponents/Indicator';
import { Article } from '../../../../components/PostDetailsPageComponents/Article';
import PaidArticles from '../../../../components/PostDetailsPageComponents/PaidArticles'
import { Header } from '../../../../components/PostDetailsPageComponents/Header';
import { useRouter } from 'next/router'
import Link from "next/link"
import React,{useEffect, useState} from 'react'
import ZoomBtn from '../../../../components/PostDetailsPageComponents/ZoomBtn';
// import Router from 'next/router';


// export function n(){


// }


 let catId;
 let f;
 

export async function getStaticPaths() {




  const res = await fetch("https://pranerbangla.com.bd/api/vb1/category-to-post/" + catId)
    const data = await res.json();
  
    const content = data["data"]
  
    const paths = content.map(pageName =>{
     
  
        return {
            params: {id: pageName.id.toString(),
            articlesId: pageName.id.toString()
            }
        }
     
    })
    return {
      paths,
      fallback: true // true or 'blocking'
    };
  }
  
  export async function getStaticProps(context) {
    const id = context.params.articlesId
    const cat_id = context.params.id

    // const router = useRouter()
    // const { articlesId}= router.query
    const res = await fetch('https://pranerbangla.com.bd/api/vb1/post-detail/' + id)
    const posts = await res.json()
    const data = posts["data"]

    const resAdd = await fetch("http://pranerbangla.com.bd/api/vb1/advertisement")
  const adData = await resAdd.json()
const adds = adData["data"]
    // console.log(data)
    data?.map(items=>{
      //  f = items.category_id
      items["post_to_cat"]?.map(it=>{

        f= it.category_id
      })
    
    
       })


      

    const add = adds.filter(items=> items.add_space==="post")
    const removedFirstAdd = add.slice(1)


    const resCat = await fetch(`https://pranerbangla.com.bd/api/vb1/category-to-post/${f} `  )
const catData =await resCat.json()
const catDatas= catData["data"]


const sliceArrayIntoGroups = (arr, size) => {
  var step = 0, sliceArr = [], len = arr.length;
 
  while (step < len ) {
    sliceArr.push(arr.slice(step, step += size));
  
  }
  return sliceArr;
}

const groupArticle = sliceArrayIntoGroups(catDatas, 8);


const dataAll = groupArticle.map((item, index) => ({

  articles: item,
  ad: removedFirstAdd[index]
  
}))

    return {
      props: {
        data,
        add,
        catDatas,
        dataAll
      },
    }
  }
  




function Details({data,add,catDatas,dataAll}) {

let p = 1;

// const articles = ()=>{
//   if (p===1) {
//     <Article/>
//   }else{return <PaidArticles/>}
// }

// if (p===1 ) {
//   if (typeof window !== 'undefined') {
//     document.body.style.overflow = 'hidden';
//   }

// }

  const router = useRouter()
  const {articlesId, id}= router.query

  catId =  id


const completion = Indicator();
const [fontSize, setFontSize]= useState(16)

const { asPath, pathname } = useRouter();
  return (
    
    <div className='relative'> 
{
  data?.map(items=>{

 return <div className='relative flex flex-col mx-48 lg:mx-10'>
    <span
style={{ transform: `translateX(${completion - 100}%)` }}
className="absolute -mx-48 bg-primary z-10 h-1 w-[100vw] top-0 sticky overflow-hidden"
/>
<Header writerId={items.writer_id} title={items.title_bn} setFontSize={setFontSize} fontSize={fontSize} time={items.created_at} count={items.count_post} user={items.user} headImage ={items.image} postCat={items.post_to_cat}/>
{/* <ZoomBtn setFontSize={setFontSize} fontSize={fontSize} className="" /> */}
<div className='my-12 grid grid-cols-3 gap-8 md:flex md:flex-col'>
   
<div className='col-span-2 w-full'>
{/* <Article   fontSize={fontSize} content={items.content_bn} /> */}
{(() => {
              if (items.is_visibility=== "premium"){
                  return (
                      <PaidArticles content={items.content_bn}/>
                  )
              }
              
              return <Article content={items.content_bn} />;
            })()}

</div>


<div className='w-full '>
{add.slice(0,1).map(item=>{

    return <img className='my-12' src={item.image} alt="" />

})}
</div>
</div>

{/* <div>
<h1 className='flex  items-center text-base font-bold text-xl text-black mb-4 dark:text-white'>
<Circle className=" h-3 pr-2 mb-1"/>ছবি সমুহ 
</h1>
<LongCarousel/> 
</div> */}
<div className='w-full '>
{add.slice(1,2).map(item=>{

    return <img className='my-12' src={item.image} alt="" />

})}
</div>

<div><h1 className='flex   items-center  text-2xl my-5 font-semibold text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>মন্তব্য করুন </h1></div>
<FaceBookComment/>
<div className='mx-80 lg:mx-24 md-mx-10'>
<h1 className='text-center text-lg text-black font-bold dark:text-white my-5'>Share Article</h1>
<ShareArticleButtons url={asPath}/>

<div className="tooltip flex justify-center w-full items-center my-4 " data-tip="Copy url to clipboard">
<Clipboard url={asPath}/>
{/* <button className='btn btn lowercase font-normal text-sm' onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}>http://localhost:3000{pathname} </button> */}
</div>

</div>    
<div className='-mx-48 my-12 bg-[#F1F1F6] dark:bg-[#202426] py-8 lg:-mx-10 '>
<div className='mx-48 lg:mx-10'>
<div className='flex justify-between items-center'><b><h1 className='flex   items-center text-base text-lg text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>আরো পড়ুন   </h1></b>
{data?.map(items=>{
  return items.post_to_cat?.map(it=>{
    return <Link href={`/categories/${it.category_id}`}><b><a className='btn btn-ghost text-lg text-base-100 mb-4 dark:text-white'>
  <h4 className='flex '><Plus className="h-5 pr-2 mt-1"/>আরো পড়ুন</h4>
  </a></b></Link>
  })
})}
</div>
</div>


{dataAll?.map(pageItems=>{
 return <div className='w-full'>
  <div className='grid grid-cols-4 mb-4  gap-10 mx-48 lg:mx-10 md:grid-cols-2'>
  {pageItems.articles.map(pageItem=>{

 return <Link href={`/categories/${catId}/articles/${pageItem.id}`}><a ><Cards title={pageItem.title_bn} catagory={pageItem.category_name_bn} time={pageItem.created_at} imgSrc={pageItem.image} route={pageItem.id} status={pageItem.status}  readed={pageItem.count_post}/></a></Link>
  })}

  </div>
      <div className='mx-48 flex justify-center items-center lg:mx-10'>   
       
      <a href={pageItems.ad?.add_url}><img className=' w-full my-24 object-cover' src= {`${pageItems.ad?.image}`} alt=""/></a>
      </div>
      </div>
})}

</div>



{/* <div  className='-mx-48 absolute  bg-primary z-10 h-[50vh] w-100vw bottom-0 sticky overflow-hidden'></div> */}
</div>

  })
}


    </div>
  )
}

export default Details