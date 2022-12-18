
import  Router  from 'next/router';
import React,{useEffect, useState} from 'react';


let token;
if (typeof window !== 'undefined') {
   token = localStorage.getItem("token")
   
}

// export async function getStaticProps() {


//   try {
//     const res = await fetch(
//       'http://pranerbangla.com.bd/api/vb1/user-package-list',{
//         headers: {
    
//                 "Content-Type": 'application/json',
//                 // 'Accept': 'application/json',
//                 "Authorization": `Bearer ` + token

//         }
//       }
//     );
//     const data = await res.json()
//     // const data = posts["data"]

//     console.log(res)

//     if (!data) {
//       return { notFound: true };
//     }
//     return { props: { data } };
//   } catch (err) {
//     return { notFound: true };
//   }
//   }


function UserProfile() {
    const logout = ()=>{
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('token');
        Router.push("/")
    }
    // const data =JSON?.parse(user)

    // console.log(data?.user.user)


const [data, setData] =useState()
useEffect(()=>{
  async function fetchData() {
    const res = await fetch(
      'http://pranerbangla.com.bd/api/vb1/user-package-list',{
        headers: {
    
                "Content-Type": 'application/json',
                // 'Accept': 'application/json',
                "Authorization": `Bearer ` + token

        }
      }
    );
    const data = await res.json();
    
    setData(data)

    localStorage.setItem('status', data?.PackageUser[0]?.status);
  }
  
  fetchData()
});

// window.addEventListener("onload", async()=>{
//       try {
//       const data = await JSON.parse(user)
//       if (!data) {
//         return { notFound: true };
//       }
//       return { props: { data } };
//     } catch (err) {
//       return { notFound: true };
//     }
// })
console.log()
    return (
        
<>
<div className='grid grid-cols-3 mx-48 my-12 md:flex md:flex-col md:mx-0 md-p-0 '>
  <div className='flex flex-col justify-center items-center gap-4'>
  <div className="avatar">
  <div className="w-24 rounded-full">
    <img src="https://placeimg.com/192/192/people" />
  </div>
</div>
<h1 className='text-black dark:white font-enbody font-bold'>
  {data?.user.name}
</h1>

<div className='w-4/6 h-10 bg-[#fafafa] shadow-md  flex flex-col justify-center'>
<h1 className='text-black dark:white font-enbody font-bold ml-10'>
  Change password
</h1>

</div>

<div className='w-4/6 h-10 flex flex-col justify-center bg-[#fafafa] shadow-md' >
<h1 className='text-black dark:white font-enbody font-bold ml-10'>
  Update info
</h1>
</div>

<div className='w-4/6 flex flex-col justify-center bg-[#fafafa] shadow-md' >
<div className="collapse  bg-[#fafafa] shadow-md">
          <input type="checkbox" /> 
          <div className="collapse-title text-black text-xl flex justify-between font-enbody md:text-sm" >
            <h1>Packages</h1> 
            <h1>&#11167;</h1>
          </div>
          <div className="collapse-content text-"> 
           
          <table class="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider font-enbody"
              >
                Package name 
              </th>
              <th
                class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider font-enbody"
              >
                Created At
              </th>
              <th
                class="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider font-enbody"
              >
                Expired At
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-black font-enbody'>
              <td class="px-2 py-5 border-b border-gray-200 font-body bg-white text-sm ">
                {data?.PackageUser[0]?.package.name_bn}
              </td>
              <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
              {new Date(`${ data?.PackageUser[0]?.package.created_at}`).toLocaleString('en-uk',{day:"numeric",month:'short', year:'numeric'})}
              
              </td>
              <td class="px-2 py-5 border-b border-gray-200 bg-white text-sm">
              {new Date(`${  data?.PackageUser[0]?.package_expires_date}`).toLocaleString('en-uk',{day:"numeric",month:'short', year:'numeric'})}
              </td>
            </tr>

          </tbody>
        </table>
          </div>
        </div>
        
</div>
<div className='w-4/6 h-10 flex flex-col justify-center bg-[#fafafa] shadow-md' >
<button className='btn btn-primary' onClick={logout}>logout</button>
</div>

  </div>
  <div className='col-span-2'>


<div className='mx-12 my-12 bg-[#ffffff] h-[40vh] flex justify-center items-center shadow-lg rounded-md font-enbody  p-10 md:p-5'>
    <div className='grid grid-cols-2 gap-5 w-full '>
    <h1 className='text-black text-lg  md:text-sm'>Email: {data?.user.email}</h1>
<h1 className='text-black text-lg   md:text-sm'>Country: {data?.user.county}</h1>
<h1 className='text-black text-lg  md:text-sm '  >Gender: {data?.user.gender}</h1>
<h1 className='text-black text-lg  md:text-sm '>Date of birth: {data?.user.date_of_birth}</h1>
<h1 className='text-black text-lg  md:text-sm'>Mobile: {data?.user.mobile}</h1>
    </div>
</div>

  </div>

</div>
</>
    );
}

export default UserProfile;


{/* <div className='mx-22 font-enbody'>

<div className='mt-12 flex justify-between'>
<h1 className='text-black text-2xl font-bold'>{data?.user.name}</h1> 
<button className='btn btn-primary' onClick={logout}>logout</button>
</div>
<div className='bg-primary my-1 rounded w-1/6 h-1'></div>

<div className='mx-48 my-12 bg-[#F5F7FF] h-[40vh] flex justify-center items-center  rounded-md  p-10'>
    <div className='grid grid-cols-2 gap-5 w-full '>
    <h1 className='text-black text-lg '>Email: {data?.user.email}</h1>
<h1 className='text-black text-lg  '>Country: {data?.user.county}</h1>
<h1 className='text-black text-lg  '  >Gender: {data?.user.gender}</h1>
<h1 className='text-black text-lg '>Date of birth: {data?.user.date_of_birth}</h1>
<h1 className='text-black text-lg '>Address: {data?.user.address}</h1>
<h1 className='text-black text-lg '>Mobile: {data?.user.mobile}</h1>
    </div>
</div>


<div className='mt-12 flex justify-between'>
<h1 className='text-black text-2xl font-bold'>{data?.user.name}</h1> 
<h1 className='text-black text-2xl font-bold'>Package name</h1>
</div>
<div className='bg-gray-50 my-1 rounded w-full h-0.5'></div>

<div >
<table class="my-12 -z-1 table table-zebra w-full ">

<thead className=' color-[#CDD7E5]'>
<tr>
<th></th>
<th>Name</th>
<th>Job</th>
<th>Favorite Color</th>
</tr>
</thead>
<tbody>

<tr>
<th>1</th>
<td>Cy Ganderton</td>
<td>Quality Control Specialist</td>
<td>Blue</td>
</tr>

<tr>
<th>2</th>
<td>Hart Hagerty</td>
<td>Desktop Support Technician</td>
<td>Purple</td>
</tr>

<tr>
<th>3</th>
<td>Brice Swyre</td>
<td>Tax Accountant</td>
<td>Red</td>
</tr>
</tbody>
</table>
</div>
</div> */}

