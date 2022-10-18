import React, { useEffect,useState } from 'react'
import {useTheme } from 'next-themes'
import MoonIcon from "../public/feather/moon.svg"
import SunIcon from "../public/feather/sun.svg"
import Image from 'next/image';
import Logo from "../public/pranerbangla-logo-01.svg"
import DarkLogo from "../public/pranerbangla-logodark-01.svg"
import Link from "next/link"
export default function LogoChange() {
    const [mounted,setMounted] = useState(false)
    const {theme, setTheme} = useTheme()
useEffect(()=> {
    setMounted(true)
},[])
    const currentTheme = theme=== "system" ? "systemTheme" : theme;
    if(!mounted) return null
if (currentTheme==="light") {
    return <Link href={`/`}><a className="btn btn-ghost normal-case text-xl " ><div className='md:w-40 sm:w-[7rem]'>
    <Image  src={Logo}/></div></a></Link>
    
} else {
    return <Link href={`/`}><a className="btn btn-ghost normal-case text-xl" ><div className='md:w-40 sm:w-[7rem]'><Image src={DarkLogo}/></div></a></Link>
}}
