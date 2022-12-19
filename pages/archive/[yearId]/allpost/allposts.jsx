import Link from "next/link"
import { useRouter } from "next/router";

import {useState, useEffect} from "react"

// let ids;
// export async function getStaticPaths() {
//   const res = await fetch(`https://pranerbangla.com.bd/api/vb1/category-post-count/${ids}`)
//   const data = await res.json();

//   const content = data["data"]

//   const paths = content?.map(pageName =>{
//     console.log(pageName)

//       return {
//           params: {allpostId: pageName.category_id.toString(),
//                     yearId: `${ids}`
//           }
//       }
   
//   })
//   return {
//     paths,
//     fallback: false // true or 'blocking'
//   };
// }

// export async function getStaticProps(context) {
//   const id = context.params.allpostId

//   try {

//     const res = await fetch(`https://pranerbangla.com.bd/api/vb1/year-cat-post/${ids}/${id}` )
//     const year = await res.json()
//     const yearData = year["data"]

//     if (!yearData) {
//       return { notFound: true };
//     }
//     return { props: { yearData} };
//   } catch (err) {
//     return { notFound: true };
//   }
//   }
  

function Allposts({yearData}) {
  const router = useRouter()
  const {yearId} = router.query
const catId = router.query.id
console.log(catId, yearId)
  const [data, setData]=useState();

  useEffect(()=>{
      async function fetchData() {
        const res = await fetch(
         ` http://pranerbangla.com.bd/api/vb1/year-cat-post/${yearId}/${catId}`
        );
        const data = await res.json();
        setData(data)
       console.log(data)
      }
      fetchData()
    },[]);


    return (
        <>
            <div className="grid grid-cols-2 mx-48 my-12 md:mx-10">

                <div >
                    {data?.post?.map(items=>{
                         console.log(items )
                        return <Link key={items.id} href={`/categories/${items.category_id}/articles/${items.post_id}`}><h1 className="text-black ">{items?.title_bn} </h1></Link>
                    })}
                </div>
            </div>
                </>
    );
}

export default Allposts;

