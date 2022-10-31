import React from 'react';
import Link from "next/link"
import {useState, useEffect} from "react"
import Home from "../components/svgs/Home"

function SecondNav() {

    const [data, setData]=useState();
    // const [langData, setlangData]=useState();


    // useEffect(()=>{
    //     async function fetchData() {
    //       const resData = await fetch(
    //         'https://pranerbangla.com.bd/api/vb1/language'
    //       );
    //       const datlang = await resData.json();
    //       const langData = datlang["data"]
    //       setlangData(langData)
    //       // console.log(resData)
    //     }
    //     fetchData()
        
    //   },[]);


    useEffect(()=>{
        async function fetchData() {
          const res = await fetch(
            'https://pranerbangla.com.bd/api/vb1/category-tree'
          );
          const {data} = await res.json();
          setData(data)
        }
        fetchData()
      },[]);



const sortedActivities = data?.sort((a, b) =>{return a.serial_num - b.serial_num})


return (
  <div className=''>

      <div className="flex  navbar  bg-gray-50 dark:bg-slate-800 md:flex-col md:bg-white overflow-x-scroll lg:overflow-x-scroll">
      <Link href={"/"} legacyBehavior><button className='btn btn-ghost md:hidden'><Home className="dark:stroke-white"/></button></Link>
{
sortedActivities?.slice(0,16).map((nav) =>{

    if (nav.status==="1") {
      return (
        <Link
          key={nav.id}
          href={"/categories/" + nav.id}
         
          legacyBehavior>
          <a className="p-4 whitespace-nowrap tracking-wide text-base font-semibold font-sans text-black border-b-2 border-double 
          border-transparent hover:border-primary cursor-pointer select-none dark:text-white   " href="">{nav.name_bn}</a>
        </Link>
      ); 
     }
  

  })
// sortedActivities?.slice(0,16).map((nav) =>{
// if (langData.language_name==="Bangla") {
//   if (nav.status==="1") {
//     return <Link key={nav.id} href={"/categories/" + nav.id}>
//   <a className="p-4 whitespace-nowrap tracking-wide text-base font-semibold font-sans text-black border-b-2 border-double 
//   border-transparent hover:border-primary cursor-pointer select-none dark:text-white   ">{nav.name_bn} </a>
//   </Link> 
//    }
// }
// if (langData.language_name==="English") {
//   if (nav.status==="1") {
//     return <Link key={nav.id} href={"/categories/" + nav.id}>
//   <a className="p-4 whitespace-nowrap  font-bold font-sans text-black text-base border-b-2 border-double 
//   border-transparent hover:border-primary cursor-pointer select-none dark:text-white">{nav.name_en} </a>
//   </Link> 
//    }
// }
// })
}


{/* <Link href="/">
<a className="p-4 font-bold font-sans text-black text-base border-b-2 border-double 
border-transparent hover:border-primary cursor-pointer select-none dark:text-white">প্রচ্ছেদ </a>
</Link> */}






</div>
  </div>
);


}

export default SecondNav;



