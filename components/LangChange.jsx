import React from 'react';
import Globe from "./svgs/Globe"
import Link from "next/link"
import {useState, useEffect} from "react"
function LAngChange(props) {

      const handleLang = async (e)=>{
        const data = {code: e.target.value}
        const JSONdata = JSON.stringify(data)
        const endpoint = 'http://pranerbangla.com.bd/api/vb1/language-store'
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSONdata,
        }
        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
 
        if(response.ok) location.reload() 
        // response.status(200).json({ message: 'Hello from Next.js!' })
      }

    return (
        <div>
            <div className="dropdown dropdown-hover">
  <label tabIndex="0" className="btn btn-ghost "><Globe className="h-5 dark:stroke-white"/></label>
  <ul tabIndex="0" className="dropdown-content menu p-4 shadow bg-base-100 rounded-box ">
    <li><button value={1} onClick={handleLang} className="text-white text-center">Bangla</button></li>
    <li><button value={2} onClick={handleLang} className="text-white text-center">English</button></li>
  </ul>
</div>
        </div>
    );
}

export default LAngChange;