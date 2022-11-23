import React from 'react';
import LogoChange from '../components/LogoChange';
import Facebook from "../components/svgs/Facebook"
function signin(props) {
    return (
        <div>
            <div className='my-12 h-full w-full flex flex-col justify-center items-center gap-10 overflow-x-hidden'>
            <LogoChange/>
            <h1 className='font-enbody font-semibold text-4xl text-center text-black dark:text-white w-[35rem] sm:w-[15rem] '>Join millions of readers from the region</h1>
            <p className='font-enbody text-xl text-center text-black dark:text-white w-[35rem] sm:w-[15rem]'>Access and engage on thousands of original, refreshing, and inspiring stories which capture the vibrancy of the South Asian region. And if you’ve got a story to tell, we’ve got a platform for you.</p>
            <div className='w-full h-full flex items-center justify-center gap-5'>
                <span className='w-20  border-b-2 border-black'></span><p className='text-xl text-center text-black dark:text-white font-enbody'>continue</p><span className='w-20  border-b-2 border-black'></span>
     
            </div>
            <div className='w-full h-full flex items-center justify-center gap-5 sm:flex-col'>
                <a className='btn btn-wide bg-[#4867aa] border-0 gap-5 hover:bg-[#4867aa]'>Facebook<Facebook  className="h-7 fill-white dark:fill-white dark:hover:fill-[#4867aa]"/></a>
                <a className='btn btn-wide bg-[#4867aa] text-normal border-0 gap-5 hover:bg-[#4867aa]'>Facebook<Facebook  className="h-7 fill-white dark:fill-white dark:hover:fill-[#4867aa]"/></a>
                </div>
                <h1 className='font-enbody text-xl text-center text-base-100 dark:text-white w-[35rem] '>or with <a className='underline' href="newSignin">email</a></h1>
            </div>
        </div>
    );
}

export default signin;