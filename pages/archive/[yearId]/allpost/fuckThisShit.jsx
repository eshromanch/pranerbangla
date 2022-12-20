import React from 'react';
import {useState, useEffect} from "react"
import { useRouter } from "next/router";
import Link from "next/link"
function fuckThisShit(props) {

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

    return (
        <div className=' mx-48 my-12 md:mx-10'>
            {data?.post.map(e=>{
    
                return <Link key={e?.id} href={`/categories/${e?.category_id}/articles/${e?.post_id}`}><h1 className='text-black'>{e?.title_bn}</h1></Link>
            })}
        </div>
    );
}

export default fuckThisShit;