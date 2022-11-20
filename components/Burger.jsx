import React ,{useState,useEffect}from 'react';

import Styles from "../styles/Search.module.css"
import Close from "../components/svgs/Close"
import Home from "../components/svgs/Home"
import UserIcon from "./svgs/UserIcon"
import EditIcon from "./svgs/Edit"

import SecondNav from './SecondNav';

import Themechanger from './Themechanger';
import Link from "next/link"
import BurgerIcon from "../components/svgs/BurgerIcon"


function Burger(props) {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
      setIsOpen(true);
    }
  
    const closeModal = () => {
      setIsOpen(false);
    }

    let user;
    if (typeof window !== 'undefined') {
      user = localStorage.getItem("user") ; 
    
    }
    
    const userData =JSON.parse(user)

    const [mounted,setMounted] = useState(false)

useEffect(()=> {
    setMounted(true)
},[])
if(!mounted) return null
    return (
      
      <div className="SearchBar ">
      {isOpen && (
        <>
          <div className={`${Styles.box}  absolute right-0  top-0 w-[100vw] h-[100vh] bg-white shadow-xl  dark:bg-slate-800 overflow-y-scroll  hidden md:block md:top-26`}>
      <div className="w-full h-full relative  flex justify-center items-center">
      <button className="absolute top-5 z-20 right-10 text-black " onClick={closeModal}><Close className="h-10 dark:stroke-white"/></button>

      <div  className="relative my-5 w-full">

         
        <button className='text-left' onClick={closeModal}>  <SecondNav/></button>
          <ul className="flex justify-evenly  w-full my-12 ">
      {/* <li><Link href={"/"}><a><Home className="dark:stroke-white"/></a></Link></li> */}
           
                  {(() => {
              if (localStorage.getItem("token")  !== null) {
                return (
                  <li><Link
                    href='/userProfile'
                    className='text-black dark:text-white flex'
                    legacyBehavior><a className='flex gap-4 text-black dark:text-white'><UserIcon className="h-5 fill-black dark:fill-white"/>{userData?.name}</a></Link></li>
                );
              } else {
                return <li><Link href='/signin' className='text-black dark:text-white ' legacyBehavior><a className='flex gap-4 text-black dark:text-white'><UserIcon className="h-5 fill-black dark:fill-white"/> Log in</a></Link></li>;
              } 
            })()}
         
            <li className=''><Link
              href='/contribute'
              className=''
              legacyBehavior><a className='flex gap-4 text-black dark:text-white'><EditIcon className="h-5  dark:stroke-white "></EditIcon> Write</a></Link></li>
               <li className='text-black dark:white text-center'><Themechanger /></li>

          </ul>
      </div>

      </div>

          
          </div>
        
        </>
      )}

      <button className="  top-5 right-10 ml-full hidden md:block" onClick={openModal}><BurgerIcon className="h-5 dark:stroke-white"/></button>
      </div>
    );
}

export default Burger;