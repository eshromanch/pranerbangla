import Video from "../components/Video"
import Circle from '../components/svgs/Circle'

export async function getStaticProps() {

  try {

    const res = await fetch('https://pranerbangla.com.bd/api/vb1/video-all')
    const posts = await res.json()
    const data = posts["data"]
    const resAdd = await fetch("http://pranerbangla.com.bd/api/vb1/advertisement")
  const adData = await resAdd.json()
const adds = adData["data"]

const add = adds.filter(items=> items.add_space==="video")


const sliceArrayIntoGroups = (arr, size) => {
    var step = 0, sliceArr = [], len = arr.length;
   
    while (step < len ) {
      sliceArr.push(arr.slice(step, step += size));
    
    }
    return sliceArr;
  }
  
  const groupArticle = sliceArrayIntoGroups(data, 8);
  
  
  const dataAll = groupArticle.map((item, index) => ({
  
    vid: item,
    ad: add[index]
    
  }))
    if (!dataAll) {
      return { notFound: true };
    }
    return { props: { dataAll ,add} };
  } catch (err) {
    return { notFound: true };
  }
  }
  

function Allvideos({dataAll}) {

    return (
        <>
              <div className='flex justify-between mx-48 border-b-2 my-12 lg:mx-10'>
   
   <h1  className='flex   items-center text-base text-3xl text-black mb-4 dark:text-white'><Circle className=" h-3 pr-2 mb-1"/>ভিডিও</h1>
    
          </div>   
        {dataAll?.map((group) => {
            return (
              <div key={group?.id} className='w-full mt-24'>
                  <div className="grid grid-cols-4 mb-4 gap-10 mx-48 lg:mx-10  md:grid-cols-2">
                   
          {
           group?.vid?.map(items => {
            return <Video key={items.id} link={items.video_url} img={items.image}/>
           }
                      
              
            )
          }
                  </div>
                  <div className='mx-48 flex justify-center items-center lg:mx-10'>   
                  <a key={group?.ad?.id} href={group?.ad?.add_url}><img className=' w-full my-24 object-cover' src= {`${group?.ad?.image}`} alt=""/></a>
                  </div>
              </div>
            );
          })}
          
                </>
    );
}

export default Allvideos;

