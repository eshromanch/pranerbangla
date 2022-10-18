import Link from 'next/link';
import React, {useEffect} from 'react';
import Router from "next/router";

function signup(props) {

    const handleSubmit = async (event) => {
      
        event.preventDefault()
    
  
        const data = {
          email: event.target.email.value,
          password: event.target.password.value,

        }

       
        const JSONdata = JSON.stringify(data)
    
        
        const endpoint = 'https://pranerbangla.com.bd/api/vb1/login'
    
      
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

        const [user] = [result].map(item =>{
          return item.userData
        })

        // response.status(200).json({ message: 'Hello from Next.js!' })
        localStorage.setItem('token', result["access_token"]);
        localStorage.setItem('user', JSON.stringify( result["userData"]));
        // localStorage.setItem('user', {name:user.name, email:user.email});
        // alert(`Is this your full name: ${result}`)

        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');


        // useEffect(() => {
        //     // const { pathname } = Router;
        //     if (response.status === "200") {
        //       Router.push("/");
        //     }
        //   });
      
    // if (response.status==="200") {
    //     Router.push("/")
    // }
    if(response.ok) Router.push("/")
    // if(response.success === "false") alert(result.errors.map(e=> {return e}))
    // if(response.success === "false") result["errors"].map(e=>{alert(e); console.log(e)})
    if(response.success === "false") alert(result.errors)
    }


    return (
        <div>
            <div className='grid grid-cols-2 mt-28 mb-80 gap-10 md:flex md:flex-col'>
                <div className=' flex flex-col  items-end md:items-start md:mx-5'>
<h1 className='font-enbody font-semibold text-2xl text-center text-black dark:text-white' >Sign In with Email</h1>
<h1 className='font-enbody text-sm text-center text-gray-500 dark:text-white mt-8' >No account?</h1>
<Link href={`signup`}><a href=""><h1 className='font-enbody font-semibold text-xl text-center text-black dark:text-white' >Sign Up here</h1></a></Link>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-2/6 font-enbody md:items-center md:w-full'>
                <input type="text" placeholder="Email" name='email' className="input input-bordered text-black border-gray-300 input-md w-full max-w-xs bg-transparent " />
                <input type="password" placeholder="Password"  name="password" className="input input-bordered text-black border-gray-300 input-md w-full max-w-xs bg-transparent" />
                <a className='text-md text-gray-400 font-enbody ' href="reset">Forget password?</a>
                <button className='btn font-enbody' type='submit'>sign in</button>
                <div className='w-1/2'>
               
               
                </div>
                </form>
            </div>

        </div>
    );
}

export default signup;