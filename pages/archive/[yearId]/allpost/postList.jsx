import React from 'react';
import {useState, useEffect} from "react"
import { useRouter } from "next/router";
import Link from "next/link"
// import Cards from "../../../../components/GridCards"
import Circle from "../../../../components/svgs/Circle"

function FuckThisShit(props) {

    const router = useRouter()
    const yearIds = router.query.year;
    const catId = router.query.catId

    const [data, setData]=useState();
  
    useEffect(()=>{
        async function fetchData() {
            const res = await fetch(`https://pranerbangla.com.bd/api/vb1/year-cat-post/${yearIds}/${catId}` )
          const data = await res.json();
          setData(data)
        }
        fetchData()
      },[]);

    return (<>
    <div className='flex justify-between mx-48 border-b-2 my-8 lg:mx-10 md:mx-5'>
        <h1 className='flex   items-center text-base text-3xl text-black mb-4 dark:text-white'><Circle  className=" h-3 pr-2 mb-1"/>{data?.category?.name_bn}</h1>
    </div>
        <div className='grid grid-cols-4 mb-4 gap-10 mx-48 lg:mx-10  md:grid-cols-2 md:mx-2 md:gap-5'>
            {data?.post.map(e=>{
    let date = new Date(`${e?.time}`).toLocaleString('en-uk',{day:"numeric",month:'short', year:'numeric'})
                return <Link key={e?.id} href={`/categories/${e?.category_id}/articles/${e?.post_id}`}><div className="card w-full h-full glass">
                <figure className='h-52'><img src={`${e?.image}`} className="h-full object-fill"/></figure>
                <div className="card-body">
                  <h2 className="card-title text-black">{e?.title_bn}</h2>
                  <p className='text-black'>{date}</p>
                  {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                  </div> */}
                </div>
              </div></Link>
            })}
        </div>
        </>
    );
}

export default FuckThisShit;