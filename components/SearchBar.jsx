import React, { useState } from "react";

import Styles from "../styles/Search.module.css"
import Close from "../components/svgs/Close"
import Search from "./svgs/Search"
import {useRouter} from 'next/router';




function SearchBar() {
const router = useRouter()

  const handleSubmit = async (event) => {
      
    event.preventDefault()
  
  
    const data = {
      search: event.target.search.value,
  
    }
  
   
    const JSONdata = JSON.stringify(data)
  
    
    const endpoint = 'https://pranerbangla.com.bd/api/vb1/search-post'
  
  
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

  
  
  
  if(response.ok) {
    router.push({pathname:"SearchDetailsPage",query: { search: event.target.search.value}}); 
    closeModal()
  }
  
  // if(response.success === "false") alert(result.errors)
  }
  


  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div className="SearchBar">
      {isOpen && (
        <>
          <div className={`${Styles.box} absolute -mt-3  z-10  top-0 right-0 left-0 w-[100vw] h-[75vh] bg-white shadow-xl dark:bg-slate-800   `}>
<div className="w-full h-full relative  flex justify-center items-center">
<button className="absolute top-5 right-10 text-black " onClick={closeModal}><Close className="h-10 dark:stroke-white"/></button>
            <form onSubmit={handleSubmit}>
                <h1 className="text-xl text-gray-500 dark:text-gray-100 md:text-lg" >অনুসন্ধান করতে টাইপ করুন এবং এন্টার টিপুন</h1>
<div  className="relative my-5">
<input type="text" placeholder=" খুঁজুন ..." name="search" className="h-10 w-[40rem] input rounded-none bg-[#f0f2f5] text-black p-5 focus:border-primary md:w-[20rem]" />
                <button type="submit"><Search className="absolute top-2 right-2 h-5 stroke-gray-500  "/></button>
</div>
            </form>
</div>

          
          </div>
        
        </>
      )}

      <button className="h-full w-full flex justify-center items-center" onClick={openModal}><Search className="h-5 dark:stroke-white mx-5"/></button>
    </div>
  );
}

export default SearchBar;

//{`${Styles.box} -my-3 absolute right-0 z-10 -mx-[44rem] top-0 w-[100vw] h-[75vh] bg-white shadow-xl dark:bg-slate-800 md:-mx-[23.5rem]`}