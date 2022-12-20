import Link from "next/link"
import { useRouter } from "next/router";


let yearIds;
export async function getStaticPaths() {

  const res = await fetch(`https://pranerbangla.com.bd/api/vb1/category-post-count/${yearIds}`  )
  const data = await res.json();
  const content = data["data"]
  const year = data["year"]

 
  const paths = content?.map(pageName =>{
    
      return {
          params: {catPostId: pageName.category_id.toString(),
            yearId: year.toString()
          }
      }
   
  })
  return {
    paths,
    fallback: false // true or 'blocking'
  };
  revalidate: 100
}

export async function getStaticProps(context) {
 
   const id = context.params.catPostId
  // //  const years = context.params.yearId
  // const res = await fetch(`https://pranerbangla.com.bd/api/vb1/year-cat-post/${yearIds}/${id}` )
  // const data = await res.json()
  // const yearData = data["post"]
 
  // return { props: { yearData} };


  try {


    const res = await fetch(`https://pranerbangla.com.bd/api/vb1/year-cat-post/${yearIds}/${id}` )
    const year = await res.json()
    const yearData = year["post"]
    
    if (!yearData) {
      return { notFound: true };
    }
    return { props: { yearData} };
  } catch (err) {
    return { notFound: true };
  }
  }
  

function ArchiveCatPost({yearData}) {
const router = useRouter()
const {yearId }= router.query

yearIds = yearId
    return (
        <>
            <div className="grid grid-cols-2 mx-48 my-12 md:mx-10">

                <div >
                    {yearData?.map(items=>{
                        return <h1>{items.name_bn}</h1>
                    })}
                </div>
            </div>
                </>
    );
}

export default ArchiveCatPost;
// {pathname:`${items.category_id}`,query:{year:id, cat:items.category_id}}

