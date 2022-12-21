import Link from "next/link"
import { useRouter } from "next/router";

import Circle from "../../../components/svgs/Circle"

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
            <div className='flex justify-center mx-48 border-b-2 my-8 lg:mx-10 md:mx-5'>
        <h1 className='flex  items-center text- text-3xl text-black mb-4 dark:text-white'><Circle  className=" h-3 pr-2 mb-1"/>{yearId} বছরের পোস্টসমুহ </h1>
    </div>
            <div className="flex mx-52 my-12 md:mx-10 ">

                <div className="">
                    {yearData?.map(items=>{
                        return <Link key={items?.category_id} href={{pathname:`/archive/${yearId}/allpost/postList`, query:{catId: items.category_id, year: yearId}}}><h1 className="text-black w-max border-primary hover:border-b-2">{items?.name_bn} ({items?.post_count})</h1></Link>
                    })}
                </div>
            </div>
                </>
    );
}

export default Year;
// {pathname:`${items.category_id}`,query:{year:id, cat:items.category_id}}

