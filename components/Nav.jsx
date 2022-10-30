import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import BellIcon from "./svgs/Bell"
import BookmarksIcon from "./svgs/BookMarks"
import UserIcon from "./svgs/UserIcon"
import EditIcon from "./svgs/Edit"
import Logo from "../public/pranerbangla-logo-01.svg"
import SecondNav from './SecondNav';
import {useTheme} from 'next-themes'
import Themechanger from './Themechanger';
import LogoChange from './LogoChange';
import Search from './svgs/Search';
import Globe from './svgs/Globe';
import Signin from './svgs/Signin-2';
import Link from "next/link"
import BookMarkComp from './BookMarkComp';
const LangChange = dynamic(()=>import ('./LangChange'))
import SearchBar from './SearchBar';
import Burger from './Burger';
import dynamic from 'next/dynamic';







function Nav() {
const [mounted,setMounted] = useState(false)
useEffect(()=> {
  setMounted(true)
},[])
if(!mounted) return null

let user;
if (typeof window !== 'undefined') {
  user = localStorage.getItem("user") ; 

}

const userData =JSON.parse(user)


    return (
      <div className='sticky top-0 w-full bg-gray-50 z-20 dark:bg-slate-800 shadow-xl font-body'>
        <div className='mx-48  md:mx-2 lg:mx-10 '>
          
   <div className="navbar bg-gray-50 border border-l-0 border-t-0  border-r-0 dark:bg-slate-800 dark:border-b-gray-700 ">
<div className="flex-1 ">
  <LogoChange/>
</div>
<div className="flex ">
  
  <ul className="menu menu-horizontal p-0">
    <SearchBar className="m-5"/>
    {/* <li  className='md:hidden'><button className='text-black dark:text-white'> <LangChange/></button></li> */}
    <li className='md:hidden'><Themechanger /></li>
    <li><button><BellIcon className="h-5 dark:stroke-white "/></button></li>
    {/* <li><button><BookmarksIcon className="h-5 dark:stroke-white"/></button></li> */}
<BookMarkComp />
          {(() => {
      if (localStorage.getItem("token")  !== null) {
        return <li><Link href='/userProfile' className='text-black dark:text-white md:hidden'><UserIcon className="h-5 fill-black dark:fill-white"/>{userData?.name}</Link></li>;
      } else {
        return <li><Link href='/signin' className='text-black dark:text-white md:hidden'><UserIcon className="h-5 fill-black dark:fill-white"/>Log in</Link></li>;
      } 
    })()}
 
    <li className='md:hidden'><Link href='/contribute' className='text-black dark:text-white '><EditIcon className="h-5  dark:stroke-white "></EditIcon>Write</Link></li>
  </ul>
  <Burger/>
</div>

</div>
<div className='md:hidden lg:overflow-x-hidden'><SecondNav /></div>
      </div>
     
      </div>
    );
}

export default Nav;
      {/* <li><button><BookmarksIcon className="h-5 dark:stroke-white"/></button></li> */}