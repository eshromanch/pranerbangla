import Link from "next/link"
import Cards from "../components/imageGalleryComponents/GridCards"


export async function getStaticProps() {

    const res = await fetch('https://pranerbangla.com.bd/api/vb1/image-gallery')
    const posts = await res.json()
    const data = posts["data"]


    return {
      props: {
        data,
      },
    }
  }
  

function Allvideos({data}) {

    return (
        <div className='grid grid-cols-4  gap-10 mx-48 my-28 lg:mx-10 md:grid-cols-2'>   
            {/* {data?.map(pageItem=>{
                return <Link href={`/categories/${ids}/articles/${pageItem.id}`}><a ><Cards title={pageItem.title_bn} catagory={pageItem.category_name_bn} time={pageItem.created_at} imgSrc={pageItem.image} route={pageItem.id} status={pageItem.status}/></a></Link>
            })} */}
                {
                    data?.map(items=>{
                        // return <Link href={`${ids}/articles/${items.id}`}><a ><Cards title={pageItem.title_bn} catagory={pageItem.category_name_bn} time={pageItem.created_at} imgSrc={pageItem.image} route={pageItem.id} status={pageItem.status} ids={ids} readed={pageItem.count_post} postId={pageItem.id} is_visibility={pageItem.is_visibility}/></a></Link>
                       return <Link key={items.id} href={`/gallery/${items.id}`}><Cards title={items.title_bn} catagory={items.category_name_bn} time={items.created_at} imgSrc={items.image} route={items.id} status={items.status} readed={items.count_post} postId={items.id} is_visibility={items.is_visibility}/></Link>;
                    })
                }
        </div>
    );
}

export default Allvideos;