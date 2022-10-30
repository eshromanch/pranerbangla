import Link from 'next/link';
import { useRouter } from 'next/router';
import {useState, useEffect} from "react"
import Cards from '../../../../components/GridCards'

// let id;
// export async function getStaticPaths() {
//     const res = await fetch("https://pranerbangla.com.bd/api/vb1/category-tree")
//     const data = await res.json();
  
//     const content = data["data"]
  
//     const paths = content.map(pageName =>{
     
  
//         return {
//             params: {id: pageName.id.toString(),
//                 subId: pageName.id.toString()
//             }
//         }
     
//     })
//     return {
//       paths,
//       fallback: true // true or 'blocking'
//     };
//   }
  
//   export async function getStaticProps(context) {
//     const id = context.params.subId
//     const res = await fetch("https://pranerbangla.com.bd/api/vb1/category-to-post/" + id  )
//     const data = await res.json()
//     const resAdd = await fetch("http://pranerbangla.com.bd/api/vb1/advertisement")
//     const adData = await resAdd.json()
  
//     const resChilds = await fetch("https://pranerbangla.com.bd/api/vb1/category-tree/" )
//     const childData = await resChilds.json()
  
  
  
//     const content = data["data"]
//     const contentAd = adData["data"]
//   const childContents = childData["data"]
  
  
  
//   let newNavIds=[]
//    childContents.map(e=>{
//   if (e.id===parseInt(id)) {
//     e.childs?.map(i=>{
//       newNavIds.push(i.id)
//       })
//   }
//   })
//   console.log(newNavIds)
  
//   let childNavContentPage=[]
//   // const resChildNav = await fetch("https://pranerbangla.com.bd/api/vb1/category-to-post/" + secondNavId  )
//   // const resChildNavData = await resChildNav.json();
//   for (let index = 0; index < newNavIds.length; index++) {
//     const resChildNav = await fetch("https://pranerbangla.com.bd/api/vb1/category-to-post/" + newNavIds[index]  )
//   const resChildNavData = await resChildNav.json();
//     const element = resChildNavData["data"];
//     element?.map(items=>{
//       childNavContentPage.push(items)
//     })
    
    
    
//   }
//     return {
//       // Passed to the page component as props
//       props: {childNavContents:childNavContentPage},
//     }
//   }

function SubId() {
    const router = useRouter()
    const id = router.query["subId"]
    const ids = router.query["id"]


    // console.log( router.query["subId"])



    const [data, setData]=useState();


useEffect(()=>{
    async function fetchData() {
      const res = await fetch(
        "https://pranerbangla.com.bd/api/vb1/category-to-post/" + id
      );
      const {data} = await res.json();
      setData(data)
    }
    fetchData()
  },[]);






    return (
        <div className='grid grid-cols-4 mb-4 gap-10 mx-48'>   
            {data?.map(pageItem=>{
                return (
                    <Link
                        key={pageItem.id}
                        href={`/categories/${ids}/articles/${pageItem.id}`}
                        legacyBehavior><Cards title={pageItem.title_bn} catagory={pageItem.category_name_bn} time={pageItem.created_at} imgSrc={pageItem.image} route={pageItem.id} status={pageItem.status}/></Link>
                );
            })}
        </div>
    );
}

export default SubId;