import React,{useState,useEffect} from 'react';


export async function getStaticPaths() {
    const res = await fetch("https://pranerbangla.com.bd/api/vb1/image-gallery")
    const data = await res.json();
  
    const content = data["data"]
  
    const paths = content.map(pageName =>{
     
  
        return {
            params: {galleryid: pageName.id.toString()
            }
        }
     
    })
    return {
      paths,
      fallback: false // true or 'blocking'
    };
  }
  export async function getStaticProps(context) {
    const id = context.params.galleryid
    // const res = await fetch("https://pranerbangla.com.bd/api/vb1/image-gallery")
    // const data = await res.json();
    // const content = data["data"]
    try {
      const res = await fetch("https://pranerbangla.com.bd/api/vb1/image-gallery")
      const data = await res.json();
      const content = data["data"]
      const datas= content.filter(e=>  e.id === Number(id))
      if (!datas) {
        return { notFound: true };
      }
      return { props: { datas } };
    } catch (err) {
      return { notFound: true };
    }

    
    // return {
    //   // Passed to the page component as props
    //   props: { datas},
    // }
  }
function Gallery({datas}) {
  const [mounted,setMounted] = useState(false)
  useEffect(()=> {
    setMounted(true)
},[])
if(!mounted) return null


    return (
        <div>
            {datas?.map(item=>{
 const date =new Date(`${item?.created_at}`).toLocaleString('en-uk',{day:"numeric",month:'short', year:'numeric'})
              return <div key={item?.id} className='mx-48 flex flex-col lg:mx-20 md:mx-0'>
                  <div><h1 className='text-black my-12 text-2xl dark:text-white md:ml-5'>{item?.title_bn}</h1></div>
                  <div className='flex flex-col gap-4 mx-48 my-12 lg:mx-20 md:mx-10'>
                    <img src={item?.image} className="object-fill" alt="" />
                    <h1 className='text-xl text-black dark:text-white '>{item?.title_bn}</h1>
                    <h1 className='text-xl text-black dark:text-white' dangerouslySetInnerHTML={{__html: item?.content_bn}}></h1>
                    <h1 className='text-xl text-black dark:text-white'>{date}</h1>
                  </div>
                  {item?.multi_gallery_image?.map(children=>{
                    const date2 =new Date(`${item?.created_at}`).toLocaleString('en-uk',{day:"numeric",month:'short', year:'numeric'})
                    return                   <div key={children?.id} className='flex flex-col gap-4 mx-48 my-12 lg:mx-20 md:mx-10'>
                    <img className='w-full h-full object-fill' src={children?.image} alt="" />
                    <h1 className='text-xl text-black dark:text-white'>{children?.title_bn}</h1>
                    <h1 className='text-xl text-black dark:text-white' dangerouslySetInnerHTML={{__html: children?.content_bn}}></h1>
                    <h1 className='text-xl text-black dark:text-white'>{date2}</h1>
                  </div>
                  })}
              </div>
            })}
        </div>
    );
}

export default Gallery;