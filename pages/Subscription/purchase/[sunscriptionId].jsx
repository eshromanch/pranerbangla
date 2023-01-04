import Link from 'next/link';
import React, {useEffect} from 'react';
import {useRouter} from "next/router";

// export async function getStaticPaths() {
//     const res = await fetch("https://pranerbangla.com.bd/api/vb1/package-list")
//     const data = await res.json();
  
//     const content = data["data"]
  
//     const paths = content.map(pageName =>{
     
  
//         return {
//             params: {subscriptionId: pageName.id.toString() 
//             }
//         }
     
//     })
//     return {
//       paths,
//       fallback: true // true or 'blocking'
//     };
//   }

let token;
if (typeof window !== 'undefined') {
   token = localStorage.getItem("token")

}


function Purchase(props) {
   
  const Router = useRouter()
  const items = Router.query


    const handleSubmit = async (event) => {
      
        event.preventDefault()
    
  
        const data = {
          // package_id: event.target.id.value,
          package_id: items.id,
          payment_txnId: event.target.payment_txnId.value,

        }

       
        const JSONdata = JSON.stringify(data)
    
        
        const endpoint = 'https://pranerbangla.com.bd/api/vb1/package-purchase'
    
      
        const options = {
      
          method: 'POST',
          
    
            headers: {
        
                    "Content-Type": 'application/json',
                    
                    // 'Accept': 'application/json',
                    "Authorization": `Bearer ` + token,
                    "Access-Control-Allow-Origin": "*",
  
            },
        
          
          body: JSONdata,
        }
        const response = await fetch(endpoint, options)
    
     

        const result = await response.json()
        // console.log(result)
        // console.log(token)

        const [user] = [result].map(item =>{
          return item.userData
        })


    if(response.ok) Router.push("/")
    if(response.status === 401 && token === null) alert("please check if you are logged in or Trxdl number is correct")
    }


    return (
        <div>
            <div className='grid grid-cols-2 mt-28 mb-80 gap-10 md:flex md:flex-col'>
                <div className=' flex flex-col  items-end  md:items-center md:mx-5'>
<h1 className='font-enbody font-semibold text-2xl text-center text-black dark:text-white' >Purchase</h1>
{/* <h1 className='font-enbody text-sm text-center text-gray-500 dark:text-white mt-8' >No account?</h1>
<Link href={`signup`}><a href=""><h1 className='font-enbody font-semibold text-xl text-center text-black dark:text-white' >Sign Up here</h1></a></Link> */}
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-2/6 font-enbody md:items-center md:w-full'>

                <input type="text" value={`${items.price_en} Taka`} name='price' className="input input-bordered text-black border-gray-300 input-md w-full max-w-xs bg-transparent " readOnly/>
                <input type="text" value={`${items.countMonth}  Month`} name='month' className="input input-bordered text-black border-gray-300 input-md w-full max-w-xs bg-transparent " readOnly/>
                {/* <input type="text" placeholder="Id" value={items.id} name='id' className="input input-bordered text-black border-gray-300 input-md w-full max-w-xs bg-transparent " readOnly/> */}
                <input type="text" placeholder="TrxID number"  name="payment_txnId" className="input input-bordered text-black border-gray-300 input-md w-full max-w-xs bg-transparent" />
                {/* <a className='text-md text-gray-400 font-enbody ' href="reset">Forget password?</a> */}
                <button className='btn font-enbody' type='submit'>Purchase</button>
                <div className='w-1/2'>
               
               
                </div>
                </form>
            </div>

        </div>
    );
}

export default Purchase;