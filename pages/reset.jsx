import React from 'react';

function reset(props) {
    return (
        <div>
        <div className='grid grid-cols-2 mt-28 mb-80 gap-10'>
            <div className=' flex flex-col  items-end'>
<h1 className='font-enbody font-semibold text-2xl text-center text-black dark:text-white' >Enter your Email address</h1>
<h1 className='font-enbody text-sm text-center text-gray-500 dark:text-white mt-8' >Already have account?</h1>
<a href='signin' className='font-enbody font-semibold text-xl text-center text-black dark:text-white' >Sign in</a>
            </div>
            <div className='flex flex-col gap-4 w-2/6'>
            <input type="text" placeholder="Email" className="input input-bordered border-gray-300 input-md text-black w-full max-w-xs bg-transparent " />
   
            <button className='btn font-enbody tracking-wide'>Reset</button>
            <div className='w-1/2'>
           
           
            </div>
            </div>
        </div>
    </div>
    );
}

export default reset;