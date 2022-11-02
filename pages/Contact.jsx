import { data } from 'autoprefixer';
import React from 'react';
import {useRouter} from "next/router"



export async function getStaticProps() {

  const res = await fetch('https://pranerbangla.com.bd/api/vb1/contract-us')
  const posts = await res.json()
  const data = posts["data"]


// console.log(data)
  return {
    props: {
      data,
    },
  }
}

// let token;
// if (typeof window !== 'undefined') {
//    token = localStorage.getItem("token")
//   console.log(token)
// }



function Contact({data}) {

  const router = useRouter()
  const handleSubmit = async (event) => {

      
    event.preventDefault()
  
  
    const data = {
      name:  event.target.name.value,
      email:  event.target.email.value,
      department:  event.target.selected.value,
      number:  event.target.number.value,
      country:  event.target.country.value,
      message:  event.target.message.value,
  
    }
  
   
    const JSONdata = JSON.stringify(data)
  
    
    const endpoint = 'https://pranerbangla.com.bd/api/vb1/contract'
  
  
    const options = {
  
      method: 'POST',
      
      headers: {

        'Content-Type': 'application/json',
      },
      
      body: JSONdata,
    }
  
    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)
  
    const result = await response.json()
    // console.log( result)
  
  
  
  if(response.ok) {
    router.push('/'); 
    
  }
  
  
  }
  


    return (
        <div className='mx-48 font-enbody lg:mx-10'>
            <div className='flex flex-col my-12 gap-4 justify-center items-center w-full'>
                <h1 className='text-black text-5xl dark:text-white md:text-xl'>Contact us</h1>
                <p className='text-black text-2xl   dark:text-white md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className='grid grid-cols-2 mx-36 my-12 gap-16 lg:mx-10 md:mx-0 lg:flex lg:flex-col'>
                <div className=' grid grid-cols-2 gap-4'>

{data?.map(items=>{
  return <div key={ items?.id} className="card dark:bg-base-100 shadow-xl">
  <div className="card-body">
<div className='flex flex-col'>
    <h1 className='text-lg text-black font-bold dark:text-white'>{items?.title_bn}</h1>
    <span className='bg-black w-10 h-0.5 rounded rounded-2 dark:bg-white'></span>
</div>
<h1 className='text-md text-black dark:text-white' dangerouslySetInnerHTML={{ __html: items?.content_bn }}></h1>
<a href={`tel:${items?.phone}`}><h1 className='text-md text-black dark:text-white' >Phone:{items?.phone}</h1></a>
<a href={`mailto:${items?.email}`}><h1 className='text-md text-black dark:text-white' >{items?.email}</h1></a>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">→</button>
    </div>
  </div>
</div>
})}

                </div>
                <div>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
                    <input type="text" placeholder="Name" name='name' className="input input-bordered text-black border-gray-400 input-md w-full  bg-transparent focus:border-primary" required />
                <input type="number" placeholder="Phone number" name='number' className="input appearance-none input-bordered text-black border-gray-400 input-md w-full  bg-transparent focus:border-primary" required/>
                <input type="text" placeholder="Email address" name='email' className="input input-bordered text-black border-gray-400 input-md w-full  bg-transparent focus:border-primary" required/>
                <input type="text" placeholder="Country" name='country' className="input input-bordered text-black border-gray-400 input-md w-full  bg-transparent focus:border-primary" required/>
                {/* <input type="text" placeholder="department" name='department' className="input input-bordered text-black border-gray-400 input-md w-full  bg-transparent focus:border-primary" required/> */}
                <select name='selected' className="select border-gray-400 bg-transparent text-black w-full   focus:select-primary">
  <option disabled selected>Choose department</option>
  <option value={"General Enquiries"}> General Enquiries</option>
  <option value={"Partnerships"}>Partnerships</option>
  <option value={"Careers"}>Careers</option>
  <option value={"Advertising"}>Advertising</option>
  <option value={" Bug Report"}> Bug Report</option>
  <option value={"Other"}>Other </option>
</select>
                <div className='w-full'>
                <textarea className="textarea input-bordered border-gray-400  focus:textarea-primary bg-transparent text-black input-md w-full h-48  " name='message' placeholder="Message"></textarea> 
                </div>
                <div className="form-control">
  <label className="label cursor-pointer ">
   
    <input type="checkbox" className="checkbox checkbox-primary" required />
    <span className="label-text text-black dark:text-white -my-12">By clicking &apos;Submit&apos;, I agree to Pranerbangla&apos;s Terms of Services and Privacy Policy.</span> 
  </label>
</div>
               <div >
               <button type='submit' className="btn btn-outline btn-primary hover:bg-primary">Submit</button>
               </div>

                    </form>
                    </div>
            </div>
        </div>
    );
}

export default Contact;

