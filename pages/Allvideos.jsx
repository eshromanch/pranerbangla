import Video from "../components/HomepageComponents/Video"

export async function getStaticProps() {

    const res = await fetch('https://pranerbangla.com.bd/api/vb1/video-all')
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
                        return <Video link={items.video_url} img={items.image}/>
                    })
                }
        </div>
    );
}

export default Allvideos;