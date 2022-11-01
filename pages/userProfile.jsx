
import  Router  from 'next/router';
import React from 'react';

let user;

if (typeof window !== 'undefined') {
  user = localStorage.getItem("user") ; 
}


function userProfile(props) {
    const logout = ()=>{
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('token');
        Router.push("/")
    }
    const userData =JSON.parse(user)

    // console.log(userData?.user)
    // try {
    //   const userData =JSON.parse(user)
    //   if (!userData) {
    //     return { notFound: true };
    //   }
    //   return { props: { userData } };
    // } catch (err) {
    //   return { notFound: true };
    // }
    return (
        
        <div className='mx-52 font-enbody'>

            <div className='mt-12 flex justify-between'>
           <h1 className='text-black text-2xl font-bold'>{userData?.name}</h1> 
            <button className='btn btn-primary' onClick={logout}>logout</button>
            </div>
            <div className='bg-primary my-1 rounded w-1/6 h-1'></div>

            <div className='mx-48 my-12 bg-[#F5F7FF] h-[40vh] flex justify-center items-center  rounded-md  p-10'>
                <div className='grid grid-cols-2 gap-5 w-full '>
                <h1 className='text-black text-lg '>Email: {userData?.email}</h1>
            <h1 className='text-black text-lg  '>Country: {userData?.county}</h1>
            <h1 className='text-black text-lg  '  >Gender: {userData?.gender}</h1>
            <h1 className='text-black text-lg '>Date of birth: {userData?.date_of_birth}</h1>
            <h1 className='text-black text-lg '>Address: {userData?.address}</h1>
            <h1 className='text-black text-lg '>Mobile: {userData?.mobile}</h1>
                </div>
            </div>
            {/* <h1 className='text-black text-2xl'>{userData.name}</h1>
            <h1 className='text-black text-2xl'>{userData.email}</h1>
            <h1 className='text-black text-2xl'>{userData.country}</h1>
            <h1 className='text-black text-2xl'>{userData.gender}</h1>
            <h1 className='text-black text-2xl'>{userData.date_of_birth}</h1> */}
      
      <div className='mt-12 flex justify-between'>
           <h1 className='text-black text-2xl font-bold'>{userData?.name}</h1> 
           <h1 className='text-black text-2xl font-bold'>Package name</h1>
            </div>
            <div className='bg-gray-50 my-1 rounded w-full h-0.5'></div>

            <div >
  {/* <table class="my-12 -z-1 table table-zebra w-full ">

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
  </table> */}
</div>
        </div>
    );
}

export default userProfile;


