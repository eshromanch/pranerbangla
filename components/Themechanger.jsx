import React, { useEffect,useState } from 'react'
import {useTheme } from 'next-themes'
import MoonIcon from "../public/feather/moon.svg"
import SunIcon from "../public/feather/sun.svg"
import Image from 'next/image';
import Logo from "../public/pranerbangla-logo-01.svg"
import DarkLogo from "../public/pranerbangla-logo-dark-01.svg"
export default function Themechanger() {
    const [mounted,setMounted] = useState(false)
    const {theme, setTheme} = useTheme()
useEffect(()=> {
    setMounted(true)
},[])
    const currentTheme = theme=== "system" ? "systemTheme" : theme;
    if(!mounted) return null
if (currentTheme==="light") {
    return <button onClick={() => setTheme('dark')}><Image src={MoonIcon}/></button>
    
} else {
    return <button onClick={() => setTheme('light')}><Image src={SunIcon}/></button>
}



}
