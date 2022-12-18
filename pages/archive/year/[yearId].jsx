import Link from "next/link"
import { useRouter } from "next/router";



export async function getStaticPaths() {
  const res = await fetch("https://pranerbangla.com.bd/api/vb1/year-post")
  const data = await res.json();

  const content = data["data"]

  const paths = content.map(pageName =>{

      return {
          params: {yearId: pageName.year.toString()
          }
      }
   
  })
  return {
    paths,
    fallback: false // true or 'blocking'
  };
}

export async function getStaticProps(context) {
   const id = context.params.yearId
  
  try {


    const res = await fetch(`https://pranerbangla.com.bd/api/vb1/category-post-count/${id}` )
    const year = await res.json()
    const yearData = year["data"]

    if (!yearData) {
      return { notFound: true };
    }
    return { props: { yearData} };
  } catch (err) {
    return { notFound: true };
  }
  }
  

function Year({yearData}) {
const router = useRouter()
const {yearId}= router.query

    return (
        <>
            <div className="grid grid-cols-2 mx-48 my-12 md:mx-10">

                <div >
                    {yearData?.map(items=>{
                        return <Link key={items?.category_id} href={{pathname:`/archive/year/${yearId}/allpost/${items?.category_id}` ,query:yearId}}><h1 className="text-black ">{items?.name_bn} ({items?.post_count})</h1></Link>
                    })}
                </div>
            </div>
                </>
    );
}

export default Year;
// {pathname:`${items.category_id}`,query:{year:id, cat:items.category_id}}

