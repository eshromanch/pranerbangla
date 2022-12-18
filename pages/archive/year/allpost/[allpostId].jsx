import Link from "next/link"
import { useRouter } from "next/router";



let ids;
export async function getStaticPaths() {
  const res = await fetch(`https://pranerbangla.com.bd/api/vb1/category-post-count/` + ids)
  const data = await res.json();

  const content = data["data"]

  const paths = content?.map(pageName =>{

      return {
          params: {allpostId: pageName.category_id.toString()
          }
      }
   
  })
  return {
    paths,
    fallback: false // true or 'blocking'
  };
}

export async function getStaticProps(context) {
  const id = context.params.allpostId

  try {

    const res = await fetch(`https://pranerbangla.com.bd/api/vb1/year-cat-post/${ids}/${id}` )
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
  

function Allposts({yearData}) {
  const router = useRouter()
  const yearId = router.query
  ids = yearId
console.log(yearId)
    return (
        <>
            <div className="grid grid-cols-2 mx-48 my-12 md:mx-10">

                <div >
                    {yearData?.map(items=>{
                        return <Link key={items.id} href={`/categories/${items.id}`}><h1 className="text-black ">{items?.name_bn} ({items?.post_count})</h1></Link>
                    })}
                </div>
            </div>
                </>
    );
}

export default Allposts;

