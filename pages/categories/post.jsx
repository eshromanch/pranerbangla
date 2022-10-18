import { Article } from '../../components/PostDetailsPageComponents/Article';
import { Header } from '../../components/PostDetailsPageComponents/Header';
import React, { useState }  from 'react';

import Circle from '../../components/svgs/Circle'

import Plus from '../../components/svgs/Plus'
import Cards from '../../components/GridCards'
import FaceBookComment from '../../components/PostDetailsPageComponents/FacebookComment';
import ShareArticleButtons from '../../components/PostDetailsPageComponents/ShareArticleButtons';
import LongCarousel from '../../components/LongCarousel'
import Clipboard from '../../components/PostDetailsPageComponents/ClipBoard';
import Indicator from '../../components/PostDetailsPageComponents/Indicator';

// export async function getStaticPaths() {
//     const res = await fetch("https://pranerbangla.com.bd/api/vb1/category-tree")
//     const data = await res.json();
  
//     const content = data["data"]

//     const paths = content.map(pageName =>{

//         return {
//             params: {id: pageName.id.toString()}
//         }
     
//     })
//     return {
//       paths,
//       fallback: false // true or 'blocking'
//     };
//   }
  
//   export async function getStaticProps(context) {
//     const id = context.params.id
//      console.log(id)
//     const res = await fetch("https://pranerbangla.com.bd/api/vb1/category-to-post/" + id  )
//     const data = await res.json()
  
//     const content = data["data"]
  
//   //  console.log(content)
    
//     return {
//       props: {
//         pages:content
//       },
//     }
//   }
  

function PostDetails(props) {
    const completion = Indicator();
    const [fontSize, setFontSize]= useState(16)
    return (
        <div className='relative flex flex-col mx-48 '>
                 <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute -mx-48 bg-primary z-10 h-1 w-[100vw] top-0 sticky overflow-hidden"
      />
<Header   setFontSize={setFontSize} fontSize={fontSize}  />

            <div className='my-12 grid grid-cols-3 gap-8'>
                
<div className='col-span-2 w-full'>
<Article   fontSize={fontSize}  />

</div>


<div className='w-full h-[20vh] bg-primary'>
</div>
        </div>

        <div>
            <h1 className='flex  items-center text-base font-bold text-xl text-black mb-4 dark:text-white'>
            <Circle className=" h-3 pr-2 mb-1"/>ছবি সমুহ 
            </h1>
        <LongCarousel/> 
        </div>
        <div><h1 className='flex   items-center text-base text-2xl my-5 text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>মন্তব্য করুন </h1></div>
        <FaceBookComment/>
<div className='mx-80 '>
    <h1 className='text-center text-lg text-black font-bold dark:text-white my-5'>Share Article</h1>
<ShareArticleButtons/>

<div className="tooltip flex justify-center items-center my-4 " data-tip="Copy url to clipboard">
<Clipboard />
{/* <button className='btn btn lowercase font-normal text-sm' onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}>http://localhost:3000{pathname} </button> */}
</div>

</div>    
        <div className='-m-48 my-12 bg-[#F1F1F6] dark:bg-[#202426] py-8'>
<div className='mx-48'>
<div className='flex justify-between items-center'><b><h1 className='flex   items-center text-base text-lg text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>আরো পড়ুন   </h1></b>
<b><a className='btn btn-ghost text-lg text-base-100 mb-4 dark:text-white' href="#">
<h4 className='flex '><Plus className="h-5 pr-2 mt-1"/>আরো পড়ুন </h4>
  </a></b>
</div>
</div>
<div className='grid grid-cols-4 mb-4  gap-10 mx-48 '>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
<Cards/>
</div>
</div>


        </div>
    );
}

export default PostDetails;