import Link from "next/link"

export async function getStaticProps() {

  try {

    const res = await fetch('https://pranerbangla.com.bd/api/vb1/year-post')
    const year = await res.json()
    const yearData = year["data"]
    const resAdd = await fetch("http://pranerbangla.com.bd/api/vb1/categoris-count-post")
    const adData = await resAdd.json()
    const cat = adData["data"]


    if (!yearData) {
      return { notFound: true };
    }
    return { props: { yearData ,cat} };
  } catch (err) {
    return { notFound: true };
  }
  }
  

function Archive({yearData,cat}) {

    return (
        <>
            <div className="grid grid-cols-2 mx-48 my-12 md:mx-10">
                <div>
                    {yearData?.map(items=>{
                        return <Link key={items?.year} href={`/archive/${items?.year}`}> <h1 className="text-black ">{items?.year} ({items?.total})</h1></Link>
                    })}
                </div>
                <div >
                    {cat?.map(items=>{
                        return <Link key={items?.id} href={`/categories/${items?.id}`}><h1 className="text-black ">{items?.name_bn} ({items?.post_to_category_count})</h1></Link>
                    })}
                </div>
            </div>
                </>
    );
}

export default Archive;

