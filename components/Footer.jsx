
import Archive from "../components/svgs/Archive"
import LogoChange from './LogoChange';
import Insta from "../components/svgs/Insta"
import Facebook from "../components/svgs/Facebook"
import Youtube from "../components/svgs/Youtube"
import LinkedIn from "../components/svgs/Linkedin"
import Tweet from "../components/svgs/Tweeter"
import RedDot from "../components/svgs/Red-divider"
import Link from "next/link"
import {useState, useEffect} from "react"
function Footer(props) {

  const [data, setData]=useState();
  const [footerdata, setFooterdata]=useState();

  useEffect(()=>{
      async function fetchData() {
        const res = await fetch(
          'https://pranerbangla.com.bd/api/vb1/page-menu'
        );
        const {data} = await res.json();
        setData(data)
      }
      fetchData()
    },[]);


    useEffect(()=>{
      async function fetchData() {
        const res = await fetch(
          'https://pranerbangla.com.bd/api/vb1/footer-menu'
        );
        
        const {data} = await res.json();

        setFooterdata(data)
        
      }
      fetchData()
    },[]);




    return (
        
        <div className='w-full flex flex-col bottom-0 bg-gray-50 justify-center items-center pb-6 dark:bg-slate-800 '>
<div className='flex w-full justify-evenly border-4 border-l-0 border-r-0 py-5 mb-4 dark:border-gray-600'>
{data?.map(items=>{
    if (items.name_en ==="About Us") {
      return <Link href={`/about`}><a href="" className="link link-hover text-base font-bold text-black dark:text-white">আমাদের পরিচিতি</a></Link>
    }
  })}
  <Link href={`/Subscription`}><a href="" className="link link-hover text-base font-bold text-black dark:text-white">সাবস্ক্রিপশন </a></Link>
  <Link href={`/Contact`}><a href="" className="link link-hover text-base font-bold text-black dark:text-white">যোগাযোগ</a></Link>

  {data?.slice(3).map(items=>{
    return <Link key={items.id} href={`footerPages/${items.id}`}><a href="" className="link link-hover  text-base font-bold text-black dark:text-white">{items.name_bn}</a></Link>
  })}
  {/* {data?.filter(e=> e.name_en !== "About Us").map(items=>{
    return <Link key={items.id} href={`footerPages/${items.id}`}><a href="" className="link link-hover  text-base font-bold text-black dark:text-white">{items.name_bn}</a></Link>
  })} */}

   
    {/* <a className="link link-hover text-base text-base font-bold text-black dark:text-white">যোগাযোগ</a> 
    <a className="link link-hover text-base text-base font-bold text-black dark:text-white">বিজ্ঞাপন</a> 
    <a className="link link-hover text-base text-base font-bold text-black dark:text-white">প্রিভেসি নীতি</a>
    <a className="link link-hover text-base text-base font-bold text-black dark:text-white">ব্যাবহারের সর্তাবলি</a>
    <a className="link link-hover text-base text-base font-bold text-black dark:text-white">কুকিজ</a> */}
</div>

<div className='w-full border-b-4 mb-12 dark:border-gray-600'>
<footer className="footer px-52 py-10 bg-transparent text-base-content md:pl-16 md:gap-1">
  
  <div>
    <span className="flex flex-col text-lg font-bold text-black dark:text-white ">অনন্যা বিভাগ সমুহ 
    <div className='my-2 grid grid-cols-7 w-full gap-2'> 
    <div className='h-1 w-full col-span-4 bg-primary rouded rounded-md'></div>
    <div className='h-1 w-1 bg-primary rouded rounded-md'></div>
    <div className='h-1 w-1 bg-primary rouded rounded-md'></div>
    <div className='h-1 w-1 bg-primary rouded rounded-md'></div>

    </div>
    </span> 

    {
      footerdata?.slice(0,4).map(items=>{
        return <a key={items.id} className="link link-hover text-base text-black dark:text-white">{items.name_bn}</a> 
      })
    }
    {/* <a className="link link-hover text-base text-black dark:text-white">Branding</a> 
    <a className="link link-hover text-base text-black dark:text-white">Design</a> 
    <a className="link link-hover text-base text-black dark:text-white">Marketing</a> 
    <a className="link link-hover text-base text-black dark:text-white">Advertisement</a> */}
  </div> 
  <div>
    {/* <span className="footer-title  text-black dark:text-white">Company</span>  */}
    <br />
    {
      footerdata?.slice(4,8).map(items=>{
        return <a key={items.id} className="link link-hover text-base text-black dark:text-white">{items.name_bn}</a> 
      })
    }
  </div> 
  <div>
    {/* <span className="footer-title  text-black dark:text-white">Company</span>  */}
    <br />
    {
      footerdata?.slice(9,14)?.map(items=>{
        return <a key={items.id} className="link link-hover text-base text-black dark:text-white">{items.name_bn}</a> 
      })
    }
  </div> 
  
  <div className='flex justify-center items-center'><Archive className="h-20 dark:fill-white"/> <h1 className='text-black text-2xl font-bold dark:text-white'>আর্কাইভ </h1></div>
  <div>
    <span className="footer-title  text-black dark:text-white">Social</span> 
    <div className="grid grid-flow-col gap-4 ">
      <a className=' '><Insta className="h-7 hover:fill-[#405DE6] dark:fill-white dark:hover:fill-[#405DE6]"/></a>
      <a><Youtube  className="h-8 hover:fill-red-700 dark:fill-white dark:hover:fill-red-700"/></a>
      <a><Facebook  className="h-7 hover:fill-[#4867aa] dark:fill-white dark:hover:fill-[#4867aa]"/></a>
      <a><LinkedIn  className="h-7 hover:fill-[#0077b5] dark:fill-white dark:hover:fill-[#0077b5]"/></a>
      <a><Tweet  className="h-7 hover:fill-[#1da1f2] dark:fill-white dark:hover:fill-[#1da1f2]"/></a>
    </div>
  </div>
</footer>
</div>

<div className='my-1'>    <LogoChange/></div>
  <div className='w-full flex flex-col justify-center items-center mb-12'>
  <p className='bold-case text-gray-800 text-base md:text-sm dark:text-white '>স্বত্ব © ২০১৬ - ২০২২ প্রাণের বাংলা। সম্পাদক ও প্রকাশক: আবিদা নাসরীন কলি।</p>
    <p className='bold-case text-gray-800 text-base md:text-xs dark:text-white'>Email: Article: amar@pranerbangla.com, Avertising: ad@pranerbangla.com
</p>
<p className='bold-case text-gray-800 text-base md:text-xs dark:text-white'>Phone:+8801818189677, +8801717256199</p>
  </div>
        </div>
    );
}

export default Footer;