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
          <div className="grid grid-cols-2 mx-48 gap-16 mt-16 mb-4 bg-slate-400  py-2 md:mx-10"><h1 className="text-black text-right">Archives</h1><h1 className="text-black ">Categories</h1></div>
            <div className="grid grid-cols-2 gap-16 mx-48 mb-12 md:mx-10">
                <div className="flex flex-col gap-2  items-end">
                    {yearData?.map(items=>{
                        return <Link key={items?.year} href={`/archive/${items?.year}`}> <h1 className="text-black border-primary hover:border-b-2">{items?.year} ({items?.total})</h1></Link>
                    })}
                </div>
                <div className="flex flex-col gap-2">
                    {cat?.map(items=>{
                        return <Link key={items?.id} href={`/categories/${items?.id}`}><h1 className="text-black w-max border-primary hover:border-b-2">{items?.name_bn} ({items?.post_to_category_count})</h1></Link>
                    })}
                </div>
            </div>
                </>
    );
}

export default Archive;

